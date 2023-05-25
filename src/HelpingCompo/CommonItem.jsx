const CommonItem = ({item}) => {
    const {image, name, recipe, price} = item
    return (
        <div className='flex gap-4'>
                <img className='w-20 h-auto rounded-full' src={image} alt="" />            
                <div className='flex-1'>
                    <h2 className="font-bold text-xl">{name}-------------</h2>
                    <p className="text-slate-300">{recipe}</p>
                </div>
                <p className='text-yellow-500'>${price}</p>
        </div>
    );
};

export default CommonItem;