import { FaProductHunt, FaTruckPickup, FaUsers, FaWallet } from "react-icons/fa";
import { Oval } from "react-loader-spinner";

const AdminDashBoardHome = () => {
    const user =0 
    const userStats = 0
    const userStatsLoading =false
    return (
        <div className="min-h-screen p-5">
        <h2 className="font-bold text-3xl">Welcome back, {user?.displayName}</h2>

        {
            userStatsLoading ? <div className='min-h-screen flex justify-center items-center'><Oval
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
          /></div> :

                <>
                    <div className="w-4/6 mx-auto my-10">
                        <div className="stats shadow w-full">

                            <div className="stat p-10 flex items-center justify-center gap-3 text-center bg-slate-800 text-white bg-gradient-to-r from-[#12c2e9] via-[#c471ed] to-[#f64f59]">
                                <FaWallet className="text-3xl"></FaWallet>
                                <div>
                                    <div className="stat-value">${userStats?.totalAmount / 100}</div>
                                    <div className="stat-title text-white">Total Spend</div>
                                </div>
                            </div>

                            <div className="stat p-10 flex items-center justify-center gap-3 text-center bg-slate-800 text-white bg-gradient-to-r from-[#de6161] to-[#2657eb]">
                                <FaUsers className="text-3xl"></FaUsers>
                                <div>
                                    <div className="stat-value">{userStats?.totalOrders}</div>
                                    <div className="stat-title text-white">Total Order</div>
                                </div>
                            </div>

                            <div className="stat p-10 flex items-center justify-center gap-3 text-center bg-slate-800 text-white bg-gradient-to-r from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99]">
                                <FaProductHunt className="text-3xl"></FaProductHunt>
                                <div>
                                    <div className="stat-value">{userStats?.totalMenuItems}</div>
                                    <div className="stat-title text-white">Total Menu Items</div>
                                </div>
                            </div>

                            <div className="stat p-10 flex items-center justify-center gap-3 text-center bg-slate-800 text-white bg-gradient-to-r from-[#aa4b6b] via-[#6b6b83] to-[#3b8d99]">
                                <FaTruckPickup className="text-3xl"></FaTruckPickup>
                                <div>
                                    <div className="stat-value">{userStats?.totalMenuItems}</div>
                                    <div className="stat-title text-white">Total Menu Items</div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className="grid grid-cols-2 py-10">
                        <div className="bg-red-500 space-y-4 border-l border-r-2 border-red-500 px-10 py-24 rounded-l flex flex-col justify-center items-center">
                            <img className="h-14 w-14 rounded-full" src={user?.displayUrl} alt="" />
                            <h2 className="font-bold text-3xl uppercase">{user?.displayName}</h2>
                        </div>
                        <div className="bg-green-500 px-10 py-24 rounded-r text-gray-200">
                            <h2 className="font-bold text-3xl">Your Activity</h2>
                            <p className="flex gap-2 items-center"><FaCartArrowDown></FaCartArrowDown>Orders: {userStats?.totalOrders}</p>
                            <p className="flex gap-2 items-center"> <FaDollarSign></FaDollarSign> Payment: ${userStats?.totalAmount/100}</p>
                        </div>
                    </div> */}
                </>

        }


    </div>
    );
};

export default AdminDashBoardHome;