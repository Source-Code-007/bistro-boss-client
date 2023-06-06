import { FaTrash } from "react-icons/fa";
import UseCartItem from "../../CustomHook/UseCartItem";
import { Puff } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const MyCart = () => {
    const { cartItems, isLoading, refetch } = UseCartItem()
    const totalOrder = cartItems?.reduce((total , currVal)=> total + currVal.quantity, 0)
    const totalPrice = cartItems?.reduce((total , currVal)=> total + (currVal.price * currVal.quantity), 0)

    // handle item delete function
    const handleDeleteCartItemFunc = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:2500/cart-item/${id}`, { method: 'DELETE' })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch() // refetch cart item data after delete a cart item
                        toast.success('Item deleted successfully!', {
                            position: "top-right",
                            autoClose: 1000,
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
          })
    }

    return (
        <div className="min-h-screen flex items-center bg-slate-200">
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
                    </div> : cartItems.length<1 ?  <h2 className="text-3xl font-bold text-center">No cart items here!</h2> :
                    <div className="p-10 bg-slate-50">
                    <div className="flex justify-between font-bold text-2xl my-5">
                        <h2>Total orders:{totalOrder}</h2>
                        <h2>Total price: {totalPrice} </h2>
                        <Link to={'/user-dashboard-payment'}><button className="btn btn-error">Pay</button></Link>
                    </div>
                    <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th className="text-center">Quantity</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {cartItems?.map((item, ind) => {
                                    const { name, _id, image, quantity, price } = item
                                    return <tr key={name + ind + price}>
                                        <td>{ind + 1}</td>
                                        <td>
                                            <img className="rounded-full h-10 w-10" src={image} />
                                        </td>
                                        <td>{name}</td>
                                        <td className="text-center">{quantity}</td>
                                        <td>{price}</td>
                                        <td><span onClick={() => handleDeleteCartItemFunc(_id)} className="text-red-500 text-xl cursor-pointer"><FaTrash></FaTrash></span></td>
                                    </tr>
                                })}
                            </tbody>

                        </table>
                    </div>
                }
            </div>
            <ToastContainer /><ToastContainer />
        </div>
    );
};

export default MyCart;