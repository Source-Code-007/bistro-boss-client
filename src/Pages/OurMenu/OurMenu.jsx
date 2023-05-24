import UseMenuContext from '../../Context/UseMenuContext';
import CommonItemsLayout from '../../HelpingCompo/CommonItemsLayout';
import CommonParallex from '../../HelpingCompo/CommonParallex';
import UseSectionTitle from '../../HelpingCompo/UseSectionTitle';
import ourMenuBg from '../../assets/home/banner.jpg'
const OurMenu = () => {
    const [menu] = UseMenuContext()
    const offeredMenu = menu.filter(item=> item.category === 'offered')
    return (
        <div>
            <CommonParallex
            img={ourMenuBg}
            title={'Our Menu'}
            subTitle={"World you like to try a Dist?"}
            ></CommonParallex>

            <UseSectionTitle
            subHeading={"Don't miss"}
            heading={"Today's offer"}
            ></UseSectionTitle>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 my-container">
                {
                    offeredMenu.map(item => <CommonItemsLayout key={item._id} item={item}></CommonItemsLayout>)
                }
            </div>

        </div>
    );
};

export default OurMenu;