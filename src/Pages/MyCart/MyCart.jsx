import { FaTrash } from "react-icons/fa";
import CartContext from "../../Context/CartContext";

const MyCart = () => {
    const { data } = CartContext()
    return (
        <div className="min-h-screen flex items-center">
            <div className="overflow-x-auto w-5/6 mx-auto">
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
                        {data.map((item, ind) => {
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
            </div>
        </div>
    );
};

export default MyCart;