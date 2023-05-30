import { ToastContainer } from "react-toastify";
import AddToCartBtn from "../Pages/YummyShop/AddToCartBtn";

const CommonCard = ({item}) => {
    const {name, recipe, image } = item
    return (
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={name} className="rounded-t-xl h-60 w-full" />
                </figure>
                <div className="card-body items-center text-center p-5">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                    <AddToCartBtn yummyItem={item}></AddToCartBtn>
                    </div>
                </div>
            <ToastContainer /><ToastContainer />
            </div>
    );
};

export default CommonCard;