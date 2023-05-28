import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CommonParallex from "../../HelpingCompo/CommonParallex";
import yummyShopBG from '../../assets/shop/banner21.jpg'
import UseMenu from "../../CustomHook/UseMenu";
import { useState } from "react";

const YummyShop = () => {
    const [menu] = UseMenu()
    const [selectedTab, setSelectedTab] = useState('salad')
    const menuItems = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    return (
        <div>
            <CommonParallex
                img={yummyShopBG}
                title={'Our Yummy Shop'}
                subTitle={'Would you like to try a dish?'}
            ></CommonParallex>

            <div className="py-10 my-container">
                <Tabs>
                    <TabList className='flex justify-center gap-2'>
                        {menuItems.map(menuItem => {
                            return <Tab onClick={()=> setSelectedTab(menuItem)} key={menuItem} className={`${menuItem === selectedTab? 'bg-red-500  text-white' : 'border border-red-500 text-black'} font-semibold p-5 cursor-pointer`}>{menuItem}</Tab>
                        })}
                    </TabList>

                    {
                        menuItems.map(menuItem => {
                            return <TabPanel key={menuItem} >
                                <h2>{menuItem}</h2>
                            </TabPanel>
                        })
                    }

                </Tabs>
            </div>
        </div>
    );
};

export default YummyShop;