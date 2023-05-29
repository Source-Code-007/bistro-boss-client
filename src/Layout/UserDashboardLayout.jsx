import { Link, Outlet } from 'react-router-dom';
import UseActiveLink from '../HelpingCompo/UseActiveLink';
import logo from '../../src/assets/logo.png'
import { FaAccessibleIcon, FaAdjust, FaCartArrowDown, FaDollarSign, FaHome, FaOutdent } from 'react-icons/fa';

const UserDashboardLayout = () => {
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-green-500">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className='bg-green-500'>
                        <Link to={'/'}><img src={logo} className='w-auto h-10' alt="" /></Link>
                        <ul className="menu p-4 w-80  space-y-3 text-whitef">
                            <li><UseActiveLink to={'/user-dashboard'}> <FaHome></FaHome> User Home</UseActiveLink></li>
                            <li><UseActiveLink to={'/user-dashboard-reservation'}> <FaOutdent></FaOutdent> Reservation</UseActiveLink></li>
                            <li><UseActiveLink to={'/user-dashboard-payment-history'}> <FaDollarSign></FaDollarSign> Payment History</UseActiveLink></li>
                            <li><UseActiveLink to={'/user-dashboard-my-cart'}> <FaCartArrowDown></FaCartArrowDown> My Cart</UseActiveLink></li>
                            <li><UseActiveLink to={'/user-dashboard-add-review'}> <FaAdjust></FaAdjust> Add Review</UseActiveLink></li>
                            <li><UseActiveLink to={'/user-dashboard-my-booking'}> <FaAccessibleIcon></FaAccessibleIcon> My Booking</UseActiveLink></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    );
};

export default UserDashboardLayout;