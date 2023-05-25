import UseSectionTitle from "../../../HelpingCompo/UseSectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`/reviews.json`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(e => console.log(e.message))
    }, [])

    return (
        <div className="my-container">
            <UseSectionTitle
                heading='testimonials'
                subHeading='What Our Client Say'
            ></UseSectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => {
                    const { name, details, rating } = review
                    return <SwiperSlide key={review._id}>
                        <div className="text-center space-y-5 px-36">
                            <h2>{rating}</h2>
                            <span className="flex justify-center text-6xl"><FaQuoteLeft></FaQuoteLeft></span>
                            <p>{details}</p>
                            <h2 className="font-bold text-3xl text-orange-500">{name}</h2>
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>
        </div>
    );
};

export default Testimonial;