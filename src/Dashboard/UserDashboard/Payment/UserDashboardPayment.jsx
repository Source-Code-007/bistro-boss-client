import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import UseCartItem from "../../../CustomHook/UseCartItem";
import { Oval } from "react-loader-spinner";


const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK)

const UserDashboardPayment = () => {
    const { cartItems, isLoading, refetch } = UseCartItem()

    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'><Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}

        /></div>
    }


    const price = cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0)

    // const options = {
    //     mode: 'payment',
    //     amount: price * 100,
    //     currency: 'usd',
    //     // Fully customizable with appearance API.
    //     theme: 'stripe',
    // };

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center">
            <div className="bg-slate-50 shadow p-14 w-3/6">
                <h2 className="py-8 font-bold text-xl text-gray-400 text-center">You have to pay <span>${price}</span></h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm price={price} cartItems={cartItems}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default UserDashboardPayment;