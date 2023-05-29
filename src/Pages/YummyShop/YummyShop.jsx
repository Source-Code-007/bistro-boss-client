import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CommonParallex from "../../HelpingCompo/CommonParallex";
import yummyShopBG from '../../assets/shop/banner21.jpg'
import UseMenu from "../../CustomHook/UseMenu";
import { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { authContextData } from "../../Context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UseCartItem from "../../CustomHook/UseCartItem";
import { Puff } from "react-loader-spinner";

const YummyShop = () => {
    const { user } = useContext(authContextData)
    const [menu, menuLoading] = UseMenu()
    const { refetch } = UseCartItem()
    const [selectedTab, setSelectedTab] = useState('salad')

    // handle add to cart func
    const handleAddToCartFunc = (item) => {
        const itemId = item._id
        delete item._id
        const newItem = { ...item, email: user.email, itemId }
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
        }
        fetch('http://localhost:2500/cart-item', option)
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    refetch() // refetch cartItems data
                    toast.success('Item added in cart!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch(e => console.log(e.message))
    }

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
                                                            <button onClick={() => handleAddToCartFunc(yummyItem)} className="btn btn-error btn-outline gap-2">Add to cart <FaCartPlus></FaCartPlus> </button>
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