import UseMenu from "../../../CustomHook/UseMenu";
import CommonCardLayout from "../../../HelpingCompo/CommonCardLayout";
import UseSectionTitle from "../../../HelpingCompo/UseSectionTitle";

const ChefRecommended = () => {
    const [menu] = UseMenu()
    const offeredItem = menu.filter(item=> item.category === 'offered')
    return (
        <div className="py-20 my-container"> 
            <UseSectionTitle
                heading='CHEF RECOMMENDS'
                subHeading='Should Try'
            ></UseSectionTitle>
            
            <CommonCardLayout items={offeredItem}></CommonCardLayout>

        </div>
    );
};

export default ChefRecommended;