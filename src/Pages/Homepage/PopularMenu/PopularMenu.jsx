import { useState } from "react";
import UseMenuContext from "../../../Context/UseMenuContext";
import CommonItemsLayout from "../../../HelpingCompo/CommonItemsLayout";
import UseSectionTitle from "../../../HelpingCompo/UseSectionTitle";

const PopularMenu = () => {
    const [menu] = UseMenuContext()

    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const totalPage = [...Array(Math.ceil(menu.length / itemsPerPage)).keys()]

    // Calculate starting and ending indices for the current page
    const startIndex = (currentPage - 0) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className="py-16 my-container">
            <UseSectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            ></UseSectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
                {
                    menu.slice(startIndex, endIndex).map(item => <CommonItemsLayout key={item._id} item={item}></CommonItemsLayout>)
                }
            </div>
            {/* pagination button */}
            <div className="text-center space-x-2">
            {totalPage.map((page, ind) => <button key={ind} onClick={() => setCurrentPage(page)} className={`btn btn-success px-5 ${page!==currentPage? 'btn-outline' : '' }`}>{page}</button>)}
            </div>
            
        </div>
    );
};

export default PopularMenu;