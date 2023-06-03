import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')

    // handle payment submit func
    const handlePaymentSubmit = async (e) => {
        e.preventDefault()
        if (!elements) {
            return
        }

        // Trigger from validation and wallet collection
        const { error: submitError } = await elements.submit()
        if (submitError) {
            setError(submitError.message)
            return
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