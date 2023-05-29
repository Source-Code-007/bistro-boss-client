import { Outlet } from 'react-router-dom';
import UseActiveLink from '../HelpingCompo/UseActiveLink';

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
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><UseActiveLink to={'/user-dashboard'}>User Home</UseActiveLink></li>
                        <li><UseActiveLink to={'/user-dashboard-cart'}>My Cart</UseActiveLink></li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default UserDashboardLayout;