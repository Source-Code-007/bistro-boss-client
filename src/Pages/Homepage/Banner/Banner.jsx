import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slideOne from '../../../assets/home/01.jpg'
import slideTwo from '../../../assets/home/02.jpg'
import slideThree from '../../../assets/home/03.jpg'
import slideFour from '../../../assets/home/04.jpg'
const Banner = () => {
    
    return (
        <Carousel showArrows={true} >
                <div className="h-[92vh]">
                    <img className="" src={slideOne} />
                </div>
                <div className="h-[92vh]">
                    <img className="" src={slideTwo} />
                </div>
                <div className="h-[92vh]">
                    <img className="" src={slideThree} />
                </div>
                <div className="h-[92vh]">
                    <img className="" src={slideFour} />
                </div>
            </Carousel>
    );
};

export default Banner;