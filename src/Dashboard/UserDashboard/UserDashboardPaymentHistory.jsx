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
                            <h2 className="font-bold text-3xl my-3">Total Payment: ${paymentInfo.reduce((sum, pInfo)=> sum+pInfo.amount, 0)/100} </h2>
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Email</th>
                                        <th>trxId</th>
                                        <th>Total Price</th>
                                        <th>Payment Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {paymentInfo?.map((pInfo, ind) => {
                                        const {_id, trxId, email, user, amount, date } = pInfo
                                        const dateP = new Date(date).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric',
                                          })
                                        return <tr key={_id}>
                                            <td>{ind + 1}</td>
                                            <td>{email}</td>
                                            <td>{trxId}</td>
                                            <td>{amount/100}</td>
                                            <td>{dateP}</td>
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