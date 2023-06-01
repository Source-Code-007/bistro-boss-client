import { useForm } from 'react-hook-form';
import UseSectionTitle from '../../HelpingCompo/UseSectionTitle';

const AddAnItem = () => {
    const imgHostingAPIsecretKey = import.meta.env.VITE_Img_hosting_secret_API_key
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingAPIsecretKey}`

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.recipeImg[0])
        // img host in imgBB
        const options = {
            method: "POST",
            body: formData
        }
        fetch(url, options)
            .then(res => res.json())
            .then(imgbbRes => {
                if (imgbbRes.success) {
                    const imgUrl = imgbbRes.data.display_url
                    const newRecipe = { ...data, recipeImg: imgUrl }
                    console.log(newRecipe);
                }
            })
            .catch(e => console.log(e.message))
    };

    return (
        <div className='bg-slate-100 min-h-screen'>
            <UseSectionTitle
                heading="Add an Item"
                subHeading="Whats New?"
            ></UseSectionTitle>

            <div className=" flex items-center justify-center">
                <form onSubmit={handleSubmit(onSubmit)} className="card w-4/6 md:3/6 shadow-2xl bg-slate-50">

                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Name</span>
                            </label>
                            <input type="text" placeholder="fav recipe" className="input input-bordered" {...register("recipeName")} />
                        </div>
                        <div className='flex'>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <select className="select select-success w-full" {...register("category")}>
                                    <option disabled value='demo'>Pick your product</option>
                                    <option value='Soup'>Soup</option>
                                    <option value='Pizza'>Pizza</option>
                                    <option value='Dessert'>Dessert</option>
                                    <option value='Drinks'>Drinks</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="Price" className="input input-bordered" {...register("price")} />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details</span>
                            </label>
                            <input type="text" placeholder="Price" className="input input-bordered" {...register("recipeDetails")} />
                        </div>

                        <input type="file" className="file-input file-input-bordered file-input-success w-full max-w-xs" {...register("recipeImg")} />
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Item</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default AddAnItem;