import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CommonParallex from "../../HelpingCompo/CommonParallex";
import yummyShopBG from '../../assets/shop/banner21.jpg'
import UseMenu from "../../CustomHook/UseMenu";
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Puff } from "react-loader-spinner";
import AddToCartBtn from "./AddToCartBtn";


const YummyShop = () => {
    const [menu, menuLoading] = UseMenu()
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
                        {menuItems.map((menuItem, ind) => {
                            return <Tab onClick={() => setSelectedTab(menuItem)} key={menuItem + ind} className={`${menuItem === selectedTab ? 'bg-red-500  text-white' : 'border border-red-500 text-black'} font-semibold p-5 cursor-pointer`}>{menuItem}</Tab>
                        })}
                    </TabList>

                    {
                        menuItems.map((menuItem, ind) => {
                            return <TabPanel key={ind} >
                                {
                                    menuLoading ? <div className="min-h-[50vh] flex justify-center items-center">
                                        <Puff
                                            height="80"
                                            width="80"
                                            radius={1}
                                            color="#4fa94d"
                                            ariaLabel="puff-loading"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                    </div> : <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12">
                                        {
                                            menu.filter((item) => item.category === menuItem).map((yummyItem, ind) => {
                                                const { _id, name, recipe, image } = yummyItem
                                                // console.log(yummyItem);
                                                return <div key={_id + ind} className="card bg-base-100 shadow-xl">
                                                    <figure>
                                                        <img src={image} alt="Shoes" className="rounded-t-xl w-full h-80" />
                                                    </figure>
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title">{name}</h2>
                                                        <p>{recipe}</p>
                                                        <div className="card-actions">
                                                            <AddToCartBtn yummyItem={yummyItem}></AddToCartBtn>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>}
                            </TabPanel>
                        })
                    }

                </Tabs>
            </div>
            <ToastContainer /><ToastContainer />
        </div>
    );
};

export default YummyShop;