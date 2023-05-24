import UseMenuContext from "../../../Context/UseMenuContext";
import CommonItemsLayout from "../../../HelpingCompo/CommonItemsLayout";
import UseSectionTitle from "../../../HelpingCompo/UseSectionTitle";

const PopularMenu = () => {
    const [menu] = UseMenuContext()
    return (
        <div className="py-16 my-container">
            <UseSectionTitle
                heading={'FROM OUR MENU'}
                subHeading={'Check it out'}
            ></UseSectionTitle>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
                {
                    menu.map(item => <CommonItemsLayout key={item._id} item={item}></CommonItemsLayout>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;