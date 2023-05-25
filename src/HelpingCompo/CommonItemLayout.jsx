import CommonItem from "./CommonItem";

const CommonItemLayout = ({ items}) => {
    return (
        <>   
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 py-10 my-container'>
                {
                    items.map((item, ind) => <CommonItem key={item.name + ind} item={item}></CommonItem>)
                }
            </div></>
    );
};

export default CommonItemLayout;