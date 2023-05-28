import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-6 my-container">
        <div className="bg-green-200">
            <div className="p-10 flex flex-col justify-center items-center min-h-[200px]">
                <p>Shanti Niketan, Dhaka</p>
                <h2 className="font-bold text-3xl">Address</h2>
            </div>
            <div className="py-8 bg-green-500 text-white text-xl flex justify-center"> <FaLocationArrow></FaLocationArrow> </div>
        </div>
        <div className="bg-green-200">
            <div className="p-10 flex flex-col justify-center items-center min-h-[200px]">
                <p>Mon - Fri: 08:00 - 22:00 </p>
                <p>Sat - Sun: 10:00 - 23:00</p>
                <h2 className="font-bold text-3xl">Working Hours</h2>
            </div>
            <div className="py-8 bg-green-500 text-white text-xl flex justify-center"> <FaClock></FaClock> </div>
        </div>
        <div className="bg-green-200">
            <div className="p-10 flex flex-col justify-center items-center min-h-[200px]">
                <p>016*****</p>
                <h2 className="font-bold text-3xl">Phone</h2>
            </div>
            <div className="py-8 bg-green-500 text-white text-xl flex justify-center"> <FaPhone></FaPhone> </div>
        </div>
    </div>
    );
};

export default ContactInfo;