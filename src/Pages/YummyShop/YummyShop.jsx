import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CommonParallex from "../../HelpingCompo/CommonParallex";
import yummyShopBG from '../../assets/shop/banner21.jpg'
import UseMenu from "../../CustomHook/UseMenu";
import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

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
                            return <Tab onClick={()=> setSelectedTab(menuItem)} key={menuItem+3} className={`${menuItem === selectedTab? 'bg-red-500  text-white' : 'border border-red-500 text-black'} font-semibold p-5 cursor-pointer`}>{menuItem}</Tab>
                        })}
                    </TabList>

                    {
                        menuItems.map(menuItem => {
                            return <TabPanel key={menuItem} >
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                    {
                                         menu.filter(item=> item.category === menuItem).map(yummyItem=>{
                                            const {name, recipe, category, image} = yummyItem
                                            // const {}
                                            return <div key={name+69} className="card bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                              <img src={image} alt="Shoes" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                              <h2 className="card-title">{name}</h2>
                                              <p>{recipe}</p>
                                              <div className="card-actions">
                                                <button className="btn btn-error btn-outline gap-2">Add to cart <FaCartPlus></FaCartPlus> </button>
                                              </div>
                                            </div>
                                          </div>
                                        })
                                    }
                                </div>
                            </TabPanel>
                        })
                    }

                </Tabs>
            </div>
        </div>
    );
};

export default YummyShop;