import UseMenu from '../../CustomHook/UseMenu';
import CommonItemLayout from '../../HelpingCompo/CommonItemLayout';
import CommonParallex from '../../HelpingCompo/CommonParallex';
import UseSectionTitle from '../../HelpingCompo/UseSectionTitle';
import ourMenuBg from '../../assets/home/banner.jpg'
const OurMenu = () => {
    const [menu] = UseMenu()
    const offeredMenu = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')

    return (
        <div>
            <CommonParallex
                img={ourMenuBg}
                title={'Our Menu'}
                subTitle={"World you like to try a Dist?"}
            ></CommonParallex>

            {/* offered */}
            <div className='py-24'>
                <UseSectionTitle
                    heading="Today's Offer"
                    subHeading="Don't miss"
                ></UseSectionTitle>
                <CommonItemLayout items={offeredMenu}></CommonItemLayout>
            </div>

            {/* dessert */}
            <div className='py-24'>
                <CommonParallex
                    img={ourMenuBg}
                    title={'Desserts'}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonParallex>
                <CommonItemLayout items={dessert}></CommonItemLayout>
            </div>

            {/* pizza */}
            <div className='py-24'>
                <CommonParallex
                    img={ourMenuBg}
                    title={'Pizzas'}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonParallex>
                <CommonItemLayout items={pizza}></CommonItemLayout>
            </div>

            {/* salad */}
            <div className='py-24'>
                <CommonParallex
                    img={ourMenuBg}
                    title={'Salads'}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonParallex>
                <CommonItemLayout items={salad}></CommonItemLayout>
            </div>

            {/* soup */}
            <div className='py-24'>
                <CommonParallex
                    img={ourMenuBg}
                    title={'soups'}
                    subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                ></CommonParallex>
                <CommonItemLayout items={soup}></CommonItemLayout>

            </div>


        </div>
    );
};

export default OurMenu;