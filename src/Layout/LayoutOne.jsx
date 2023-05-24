import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <div className='overflow-x-hidden'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayoutOne;