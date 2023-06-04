import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
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
        e.preventDefault()

        if (!elements) {
            return
        }

        // Trigger from validation and wallet collection
        const { error: submitError } = await elements.submit()
        if (submitError) {
            console.log(submitError.message);
            setError(submitError.message)
            return
        }


        const {error} = await stripe.confirmPayment({
            //`Elements` instance that was used to create the Payment Element
            elements,
            clientSecret,
            confirmParams: {
                return_url: 'http://localhost:5173/user-dashboard',
              },
          });

          if (error) {
            console.log('error');
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setError(error.message);
          } else {
            console.log('error hy nai');

            // Your customer will be redirected to your `return_url`. For some payment
            // methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
            setError('')
          }



    }

    return (
        <form onSubmit={handlePaymentSubmit}>
            <PaymentElement></PaymentElement>
            {error && <p className="text-red-500">{error}</p>}
            <button type="submit" disabled={!stripe || !elements} className="btn btn-error my-3">Payment</button>
        </form>
    );
};

export default CheckoutForm;