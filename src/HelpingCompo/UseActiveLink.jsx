import { NavLink } from 'react-router-dom';

const UseActiveLink = ({to, children}) => {
    return (
        <NavLink to={to} className={({isActive})=> `!rounded-none ${isActive ? 'bg-slate-50 border border-orange-500 !rounded' : ''}`}>{children}</NavLink>
    );
};

export default UseActiveLink;