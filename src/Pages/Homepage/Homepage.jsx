import CommonParallex from "../../HelpingCompo/CommonParallex";
import Banner from "./Banner/Banner";
import MenuCategory from "./MenuCategory/MenuCategory";
import './homepage.css'
import cmnParallexBg from '../../assets/home/chef-service.jpg'
import CallUs from "./CallUs/CallUs";
import PopularMenu from "./PopularMenu/PopularMenu";
import ChefRecommended from "./ChefRecommended/ChefRecommended";
import Testimonial from "./Testimonial/Testimonial";

const Homepage = () => {
    return (
        <>
            <Banner></Banner>
            <MenuCategory></MenuCategory>
            <CommonParallex
                img={cmnParallexBg}
                title={'BISTRO BOSS'}
                subTitle={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.'}
            ></CommonParallex>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommended></ChefRecommended>
            <Testimonial></Testimonial>
        </>
    );
};

export default Homepage;