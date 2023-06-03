import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../CustomHook/UseAxiosSecure";

const CheckoutForm = ({ price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecretP, setClientSecretP] = useState('')
    const [axiosSecure] = UseAxiosSecure()
    const [error, setError] = useState('')

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:2500/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json", Authorization: localStorage.getItem('jwt-token') },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {console.log(data); setClientSecretP(data.clientSecret)});
    }, [price]);

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



        //   const {client_secret: clientSecret} = await res.json();

        // const res = await axiosSecure.post('/create-payment-intent',{price}).then(res=> console.log(res.data))
        // const  {clientSecret} = await res.json();

        // console.log(clientSecret);

        // const {error} = stripe.confirmPayment({

        // })

        setError('')


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