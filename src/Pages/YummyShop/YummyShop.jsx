import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CommonParallex from "../../HelpingCompo/CommonParallex";
import yummyShopBG from '../../assets/shop/banner21.jpg'
import UseMenu from "../../CustomHook/UseMenu";
import { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { authContextData } from "../../Context/AuthContext";

const YummyShop = () => {
    const {user} = useContext(authContextData)
    const [menu] = UseMenu()
    const [selectedTab, setSelectedTab] = useState('salad')
    const menuItems = ['salad', 'pizza', 'soup', 'dessert', 'drinks']

    // handle add to cart func
    const handleAddToCartFunc = (item)=>{
        delete item._id
        const newItem = {...item, email: user.email, id: item._id}
        const option = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem) 
        }
        fetch('http://localhost:2500/cart-item', option)
        .then(res=> res.json())
        .then(data=> console.log(data))
        .catch(e=> console.log(e.message))
    }

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
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12">
                                    {
                                         menu.filter((item)=> item.category === menuItem).map((yummyItem)=>{
                                            const {_id, name, recipe, category, image} = yummyItem
                                            return <div key={_id} className="card bg-base-100 shadow-xl">
                                            <figure>
                                              <img src={image} alt="Shoes" className="rounded-t-xl w-full h-80" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                              <h2 className="card-title">{name}</h2>
                                              <p>{recipe}</p>
                                              <div className="card-actions">
                                                <button onClick={()=> handleAddToCartFunc(yummyItem)} className="btn btn-error btn-outline gap-2">Add to cart <FaCartPlus></FaCartPlus> </button>
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