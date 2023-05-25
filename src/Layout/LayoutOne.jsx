import CompoFromTop from '../HelpingCompo/CompoFromTop';
import ScrollToTopBtn from '../HelpingCompo/ScrollToTopBtn';
import Footer from '../Shared/Footer/Footer';
import Nav from '../Shared/Nav/Nav';
import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <div className='overflow-x-hidden'>
            <CompoFromTop>
                <Nav></Nav>
                <Outlet></Outlet>
                <Footer></Footer>
                <ScrollToTopBtn></ScrollToTopBtn>
            </CompoFromTop>
        </div>
    );
};

export default LayoutOne;