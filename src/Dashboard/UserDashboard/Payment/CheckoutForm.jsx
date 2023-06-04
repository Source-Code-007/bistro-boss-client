import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../CustomHook/UseAxiosSecure";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
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

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      console.log('error', error)
      setError(error.message);
    }
    else {
      setError('');
    }



    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          // billing_details: {
          //   email: user?.email || 'unknown',
          //   name: user?.displayName || 'anonymous'
          // },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }

    console.log('payment intent', paymentIntent)



  };


  return (
    <form onSubmit={handlePaymentSubmit}>
      {/* <PaymentElement ></PaymentElement> */}
      <CardElement ></CardElement>
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" disabled={!stripe || !elements} className="btn btn-error my-3">Payment</button>
    </form>
  );
};

export default CheckoutForm;