import { Link } from "react-router-dom";
import UseActiveLink from "../../HelpingCompo/UseActiveLink";
import logo from '../../assets/logo.png'

const Nav = () => {
    const menuItem = <>
        <li><UseActiveLink to='/'>Home</UseActiveLink></li>
        <li><UseActiveLink to='/about'>Contact Us</UseActiveLink></li>
        <li><UseActiveLink to='/dashboard'>Dashboard</UseActiveLink></li>
        <li><UseActiveLink to='/our-menu'>Our Menu</UseActiveLink></li>
        <li><UseActiveLink to='/shop'>Our Shop</UseActiveLink></li>
        <li><UseActiveLink to='/signin'>Signin</UseActiveLink></li>
    </>
    return (
        <div className="navbar bg-slate-800 bg-opacity-40 text-slate-50 fixed left-0 top-0 z-50">
            <div className="justify-between w-full lg:navbar-start">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl"><img className="w-14 h-auto" src={logo} alt="" /></Link>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu right-0 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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