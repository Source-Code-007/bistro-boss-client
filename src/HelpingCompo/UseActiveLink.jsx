import { NavLink, useLocation } from 'react-router-dom';

const UseActiveLink = ({to, children}) => {
    const {pathname} = useLocation()
    return (
        <NavLink to={to} className={({isActive})=> `!rounded-none ${(isActive && pathname !== '/signin') ? 'border border-orange-500 text-white !rounded' : ''}`}>{children}</NavLink>
    );
};

export default UseActiveLink;