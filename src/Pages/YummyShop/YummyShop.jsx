import CommonParallex from "../../HelpingCompo/CommonParallex";
import yummyShopBG from '../../assets/shop/banner21.jpg'

const YummyShop = () => {
    return (
        <div>
            <CommonParallex
            img={yummyShopBG}
            title={'Our Yummy Shop'}
            subTitle={'Would you like to try a dish?'}
            ></CommonParallex>           
        </div>
    );
};

export default YummyShop;