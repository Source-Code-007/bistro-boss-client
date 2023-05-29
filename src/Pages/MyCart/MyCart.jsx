import { FaTrash } from "react-icons/fa";
import UseCartItem from "../../CustomHook/UseCartItem";
import { Puff } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

const MyCart = () => {
    const { cartItems, isLoading, refetch } = UseCartItem()

    // handle item delete function
    const handleDeleteCartItemFunc = (id) => {
        fetch(`http://localhost:2500/cart-item/${id}`, { method: 'DELETE' })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success('Item deleted successfully!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(e => console.log(e.message))
    }

    return (
        <div className="min-h-screen flex items-center">
            <div className="overflow-x-auto w-5/6 mx-auto py-20">
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
                                    const { name, _id, image, price } = item
                                    return <tr key={name + ind + price}>
                                        <td>{ind + 1}</td>
                                        <td>
                                            <img className="rounded-full h-10 w-10" src={image} />
                                        </td>
                                        <td>{name}</td>
                                        <td>{price}</td>
                                        <td><span onClick={() => handleDeleteCartItemFunc(_id)} className="text-red-500 text-xl cursor-pointer"><FaTrash></FaTrash></span></td>
                                    </tr>
                                })}
                            </tbody>

                        </table>
                }
            </div>
            <ToastContainer /><ToastContainer />
        </div>
    );
};

export default MyCart;