import { useContext, useEffect, useState } from "react";
import { authContextData } from "../../Context/AuthContext";
import { FaBook, FaCartArrowDown, FaCartPlus, FaDollarSign, FaMagento, FaStar, FaWallet } from "react-icons/fa";
import UseAxiosSecure from "../../CustomHook/UseAxiosSecure";

const UserDashboardHome = () => {
    const { user } = useContext(authContextData)
    const [axiosSecure] = UseAxiosSecure()
    const [userStats, setUserStats] = useState('')
    useEffect(() => {
        axiosSecure.get(`/user-stats?email=${user?.email}`).then(res => {
            setUserStats(res.data)
        }).catch(e => console.log(e.message))
    }, [user?.email, axiosSecure])

    return (
        <div className="min-h-screen p-5">
            <h2 className="font-bold text-3xl">Welcome back, {user?.displayName}</h2>

            <div className="w-4/6 mx-auto my-10">
                <div className="stats shadow w-full">

                    <div className="stat p-10 flex items-center justify-center gap-3 text-center bg-slate-800 text-white bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]">
                        <FaWallet className="text-3xl"></FaWallet>
                        <div>
                            <div className="stat-value">${userStats.totalAmount/100}</div>
                            <div className="stat-title text-white">Total Spend</div>
                        </div>
                    </div>

                    <div className="stat p-10 flex items-center justify-center gap-3 text-center bg-slate-800 text-white bg-gradient-to-r from-[#de6161] to-[#2657eb]">
                        <FaCartPlus className="text-3xl"></FaCartPlus>
                        <div>
                            <div className="stat-value">{userStats.totalOrders}</div>
                            <div className="stat-title text-white">Total Order</div>
                        </div>
                    </div>

                    <div className="stat p-10 flex items-center justify-center gap-3 text-center bg-slate-800 text-white bg-gradient-to-r from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99]">
                        <FaMagento className="text-3xl"></FaMagento>
                        <div>
                            <div className="stat-value">{userStats.totalMenuItems}</div>
                            <div className="stat-title text-white">Total Menu Items</div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-2 py-10">
                <div className="bg-red-500 space-y-4 border-l border-r-2 border-red-500 px-10 py-24 rounded-l flex flex-col justify-center items-center">
                    <img className="h-14 w-14 rounded-full" src={user?.displayUrl} alt="" />
                    <h2 className="font-bold text-3xl uppercase">{user?.displayName}</h2>
                </div>
                <div className="bg-green-500 px-10 py-24 rounded-r">
                    <h2>Your Activity</h2>
                    <p className="flex gap-2 items-center"><FaCartArrowDown></FaCartArrowDown>Orders: 6</p>
                    <p className="flex gap-2 items-center"><FaStar></FaStar> Reviews: 6</p>
                    <p className="flex gap-2 items-center"> <FaBook></FaBook> Booking: 6</p>
                    <p className="flex gap-2 items-center"> <FaDollarSign></FaDollarSign> Payment: 4234</p>
                </div>
            </div>

        </div>
    );
};

export default UserDashboardHome;