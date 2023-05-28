import CommonParallex from "../../HelpingCompo/CommonParallex";
import UseSectionTitle from "../../HelpingCompo/UseSectionTitle";
import bannerBg from '../../assets/contact/banner.jpg'
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {

    return (
        <div>
            <CommonParallex
                img={bannerBg}
                title={'Contact Us'}
                subTitle={'Would you like to try as dish?'}
            ></CommonParallex>

            <div className="py-12">
                <UseSectionTitle
                    heading={'our location'}
                    subHeading={'Visit us'}
                ></UseSectionTitle>
                <ContactInfo></ContactInfo>
            </div>

            <div className="py-10">
                <UseSectionTitle
                heading={'Contact form'}
                subHeading={'Send us message'}
                ></UseSectionTitle>
                <ContactForm></ContactForm>
            </div>

        </div>
    );
};

export default ContactUs;