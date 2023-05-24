import UseSectionTitle from "../../../HelpingCompo/UseSectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import categoryImgOne from '../../../assets/home/slide1.jpg'
import categoryImgTwo from '../../../assets/home/slide2.jpg'
import categoryImgThree from '../../../assets/home/slide3.jpg'
import categoryImgFour from '../../../assets/home/slide4.jpg'

const MenuCategory = () => {
    const menuCategoryItem = [
        {
            menuTitle: 'salad',
            img: categoryImgOne
        },
        {
            menuTitle: 'soup',
            img: categoryImgTwo
        },
        {
            menuTitle: 'pizzas',
            img: categoryImgThree
        },
        {
            menuTitle: 'desserts',
            img: categoryImgFour
        },
    ]
    return (
        <div className="py-20">
           <div className="my-container">
           <UseSectionTitle
                heading={'From 11:00am to 10:00pm'}
                subHeading={'ORDER ONLINE'}
            ></UseSectionTitle>

            <Swiper
             breakpoints={{
                320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 2,
                  },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    menuCategoryItem.map((menu,ind) => {
                        return <SwiperSlide key={ind} className="relative mb-8">
                            <img className="h-[400px] lg:h-[550px] w-full" src={menu.img} alt="" />
                            <h2 className="uppercase font-bold text-3xl text-white absolute bottom-3 left-1/2 -translate-x-1/2">{menu.menuTitle}</h2>
                        </SwiperSlide>
                    })
                }
            </Swiper>
           </div>
        </div>
    );
};

export default MenuCategory;