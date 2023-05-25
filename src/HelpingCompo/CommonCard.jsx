const CommonCard = ({item}) => {
    const {name, recipe, image, category, price} = item
    return (
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={image} alt={name} className="rounded-t-xl h-60 w-full" />
                </figure>
                <div className="card-body items-center text-center p-5">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn bg-slate-200 border-transparent text-orange-500 !border-b-2 border-b-orange-500">Add to Cart</button>
                    </div>
                </div>
            </div>
    );
};

export default CommonCard;