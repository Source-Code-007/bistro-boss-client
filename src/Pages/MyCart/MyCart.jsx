import { FaTrash } from "react-icons/fa";
import UseCartItem from "../../CustomHook/UseCartItem";
import { Puff } from "react-loader-spinner";

const MyCart = () => {
    const { cartItems, isLoading } = UseCartItem()
    return (
        <div className="min-h-screen flex items-center">
            <div className="overflow-x-auto w-5/6 mx-auto">
                {
                    isLoading ? <div className="flex justify-center">
                        <Puff
                            height="80"
                            width="80"
                            radius={1}
                            color="#4fa94d"
                            ariaLabel="puff-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                        />
                    </div> :
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {cartItems?.map((item, ind) => {
                                    const { name, recipe, image, price } = item
                                    return <tr key={name + ind + price}>
                                        <td>{ind + 1}</td>
                                        <td>
                                            <img className="rounded-full h-10 w-10" src={image} />
                                        </td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td><FaTrash></FaTrash></td>
                                    </tr>
                                })}
                            </tbody>

                        </table>
                }
            </div>
        </div>
    );
};

export default MyCart;