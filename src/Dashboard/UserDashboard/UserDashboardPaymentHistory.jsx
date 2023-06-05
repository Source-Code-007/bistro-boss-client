import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../CustomHook/UseAxiosSecure";
import { useContext } from "react";
import { authContextData } from "../../Context/AuthContext";
import { Puff } from "react-loader-spinner";

const UserDashboardPaymentHistory = () => {
    const { user } = useContext(authContextData)
    const [axiosSecure] = UseAxiosSecure()

    const { data: paymentInfo = [], isLoading, refetch } = useQuery({
        queryKey: ['paymentInfo'],
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/payment-info?email=${user?.email}`)
                return res.data
            } catch (e) {
                console.log(e.message);
            }
        },
        enabled: !!user
    })
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
                    </div> :
                        <div className="p-10 bg-slate-50">
                            <h2>Total Payment: </h2>
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Email</th>
                                        <th>Category</th>
                                        <th className="text-center">Total Price</th>
                                        <th>Payment Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {paymentInfo?.map((pInfo, ind) => {
                                        const { trxId, email, , quantity, price } = pInfo
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
        </div>
    );
};

export default UserDashboardPaymentHistory;