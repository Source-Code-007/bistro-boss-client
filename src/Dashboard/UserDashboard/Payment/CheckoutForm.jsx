import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../CustomHook/UseAxiosSecure";
import { authContextData } from "../../../Context/AuthContext";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";


const CheckoutForm = ({ price, cartItems }) => {
  const stripe = useStripe();
  const elements = useElements();

  const { user } = useContext(authContextData)
  const [clientSecret, setClientSecret] = useState('')
  const [axiosSecure] = UseAxiosSecure()
  const [error, setError] = useState('')

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price }).then((data) => {
      setClientSecret(data.data.clientSecret)
    });
  }, [price, axiosSecure]);



  // handle payment submit func
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }

    // create payment
    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setError(error.message);
    }




    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I want to make payment!'
    }).then(async (result) => {
      if (result.isConfirmed) {

        // confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: card,
              billing_details: {
                email: user?.email || 'unknown',
                name: user?.displayName || 'anonymous'
              },
            },
          },
        );

        if (confirmError) {
          setError(confirmError.message);
          return
        }
        setError('')




        const menusId = cartItems.map(item => item.itemId)
        const productsId = cartItems.map(item => item._id)
        const { id, amount } = paymentIntent
        const paymentInfo = { trxId: id, user: user?.displayName, email: user?.email, productsId, menusId, amount, date: new Date() }
        console.log(paymentInfo);

        axiosSecure.post(`/payment-info`, { paymentInfo }).then(res => {
          if (res.data.insertedId) {
            toast.success('payment successfully!', {
              position: "top-right",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        }).catch(e => setError(e.message))
      }
    })



  };


  return (
    <form onSubmit={handlePaymentSubmit}>
      {/* <PaymentElement ></PaymentElement> */}
      <CardElement ></CardElement>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" disabled={!stripe || !elements} className="btn btn-error btn-sm my-3 text-white">Pay</button>

      {/* toast container compo */}
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />

    </form>
  );
};

export default CheckoutForm;