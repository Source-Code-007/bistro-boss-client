import CommonParallex from "../../HelpingCompo/CommonParallex";
import Banner from "./Banner/Banner";
import MenuCategory from "./MenuCategory/MenuCategory";
import './homepage.css'
import cmnParallexBg from '../../assets/home/chef-service.jpg'

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
        </>
    );
};

export default Homepage;