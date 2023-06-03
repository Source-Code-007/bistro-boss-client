import { Link } from "react-router-dom";
import UseActiveLink from "../../HelpingCompo/UseActiveLink";
import logo from '../../assets/logo.png'
import { useContext } from "react";
import { authContextData } from "../../Context/AuthContext";
import { Puff } from "react-loader-spinner";
import { FaCartArrowDown } from "react-icons/fa";
import UseCartItem from "../../CustomHook/UseCartItem";
import UseAdmin from "../../CustomHook/UseAdmin";

const Nav = () => {
    const { user, setUser, setLoading, loading, signoutFunc } = useContext(authContextData)
    const [isAdmin, isAdminLoading] = UseAdmin()
    const { isLoading: isCartLoading, cartItems } = UseCartItem()
    const totalOrder = cartItems?.reduce((total, currVal) => total + currVal.quantity, 0)

    // handle signout func
    const handleSignOut = () => {
        signoutFunc().then(() => {
            setLoading(false)
            setUser(null)
        }).catch(e => console.log(e.message))
    }


    const menuItem = <>
        <li><UseActiveLink to='/'>Home</UseActiveLink></li>
        <li><UseActiveLink to='/contact-us'>Contact Us</UseActiveLink></li>
        <li><UseActiveLink to={`${isAdmin ? '/admin-dashboard' : '/user-dashboard'}`}>Dashboard</UseActiveLink></li>
        <li><UseActiveLink to='/our-menu'>Our Menu</UseActiveLink></li>
        <li><UseActiveLink to='/yummy-shop'>Yummy Shop</UseActiveLink></li>
        {
            (loading || isAdminLoading || isCartLoading) ? <Puff
                height="50"
                width="50"
                radius={1}
                color="#4fa94d"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            /> :
                user ?
                    <> {!isAdmin && <li><UseActiveLink to='/user-dashboard-my-cart'> <FaCartArrowDown className="font-bold text-4xl text-green-500"></FaCartArrowDown> <span className="badge text-red-500 absolute bottom-0 right-0">{cartItems.length ? totalOrder : 0}</span></UseActiveLink></li>}
                        <img className="w-14 h-14 !rounded-full border border-orange-500 mr-2 mb-2" src={user.photoURL} alt="" />
                        <li className="flex items-center"><button onClick={handleSignOut} className="btn btn-outline btn-error">Signout</button></li></> :
                    <li className="flex items-stretch"><UseActiveLink to='/signin'><button className="btn btn-error">Signin</button></UseActiveLink></li>
        }
    </>
    return (
        <div className="navbar bg-slate-800 bg-opacity-40 text-slate-50 fixed left-0 top-0 z-50">
            <div className="justify-between w-full lg:navbar-start">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img className="w-14 h-auto" src={logo} alt="" /></Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu right-0 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                        {menuItem}
                    </ul>
                </div>
            </div>
            <div className="w-0 lg:navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Nav;