/* eslint-disable no-unused-vars */
import { useState } from "react";
import UseSectionTitle from "../../../HelpingCompo/UseSectionTitle";
import CommonItem from "../../../HelpingCompo/CommonItem";
import UseMenu from "../../../CustomHook/UseMenu";

const PopularMenu = () => {
    const [menu] = UseMenu()

    const [itemsPerPage, setItemsPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)
    const totalPage = [...Array(Math.ceil(menu.length / itemsPerPage)).keys()] // for pagination button

    // calculate start and end index for dynamically display data via current page and items per page
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return (
        <div className="py-16 my-container">
            <UseSectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            ></UseSectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
                {

                    menu.slice(startIndex, endIndex).map((item, ind) => <CommonItem key={item.name + ind} item={item}></CommonItem>)
                }
            </div>

            {/* pagination button */}
            <div className="text-center space-x-2">
                {totalPage.map((page, ind) => <button key={ind} onClick={() => setCurrentPage(page)} className={`btn btn-success px-5 ${page !== currentPage ? 'btn-outline' : ''}`}>{page}</button>)}
            </div>

        </div>
    );
};

export default PopularMenu;