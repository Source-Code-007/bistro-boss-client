import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import UseCartItem from "../../../CustomHook/UseCartItem";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)
const options = {
    mode: 'payment',
    amount: 1099,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

const UserDashboardPayment = () => {
    const { cartItems, isLoading, refetch } = UseCartItem()
    const totalPrice = cartItems?.reduce((acc, item)=> acc+item.price*item.quantity, 0)
    console.log(totalPrice);

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center">
            <div className="bg-slate-50 shadow p-20">
                <h2 className="py-8 font-bold text-3xl text-center">Payment</h2>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm></CheckoutForm>
            </Elements>
            </div>
        </div>
    );
};

export default UserDashboardPayment;