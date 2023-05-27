import CommonParallex from "../../HelpingCompo/CommonParallex";
import bannerBg from '../../assets/contact/banner.jpg'

const ContactUs = () => {
    return (
        <div>
            <CommonParallex
            img={bannerBg}
            title={'Contact Us'}
            subTitle={'Would you like to try as dish?'}
            ></CommonParallex>
        </div>
    );
};

export default ContactUs;