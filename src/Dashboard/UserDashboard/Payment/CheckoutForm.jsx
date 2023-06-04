import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import UseAxiosSecure from "../../../CustomHook/UseAxiosSecure";
import { authContextData } from "../../../Context/AuthContext";


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

    const menuId = cartItems.map(item=> item.itemId)
    const productId = cartItems.map(item=> item._id)
    const { id, amount } = paymentIntent
    const paymentInfo = { trxId: id, productId, menuId, amount, date: new Date() }
    console.log(paymentInfo);
    // axiosSecure.post(`/payment-info`, { paymentInfo })

  };


  return (
    <form onSubmit={handlePaymentSubmit}>
      {/* <PaymentElement ></PaymentElement> */}
      <CardElement ></CardElement>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" disabled={!stripe || !elements} className="btn btn-error btn-sm my-3 text-white">Pay</button>
    </form>
  );
};

export default CheckoutForm;