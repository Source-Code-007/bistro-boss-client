import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
    const [hideBtn, setHideBtn] = useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.pageYOffset
            setHideBtn(scrollPosition>0)
        }

        window.addEventListener('scroll', handleScroll)

        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // handle scroll to top func
    const handleTopFunc= () => {
        window.scrollTo(0, 0)
    }

    return (
        <span onClick={handleTopFunc} className={`fixed bottom-5 right-5 rounded-full p-4 bg-orange-500 opacity-50 hover:opacity-80 z-50 transition text-white text-lg cursor-pointer ${hideBtn? 'block' : 'hidden'}`}> 
        <FaArrowUp></FaArrowUp>
         </span>
    );
};

export default ScrollToTopBtn;