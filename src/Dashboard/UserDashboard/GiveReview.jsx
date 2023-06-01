import UseSectionTitle from '../../HelpingCompo/UseSectionTitle';

const GiveReview = () => {
    return (
        <div className='bg-slate-100 min-h-screen'>
            <UseSectionTitle
                heading="give a review"
                subHeading="Customers Rave About Our Toys: Hear What They Have to Say!"
            ></UseSectionTitle>

            <div className=" flex items-center justify-center">
                <form className="card w-4/6 md:3/6 shadow-2xl bg-slate-50">

                    {/* rating title */}
                    <div className='text-center p-8 font-semibold text-4xl space-y-3'>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h2>Rate us</h2>
                    </div>

                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Which recipe you liked most?</span>
                            </label>
                            <input type="text" placeholder="fav recipe" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Do you have any suggestion for us?</span>
                            </label>
                            <input type="text" placeholder="suggestion" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Kindly express your care in a short way.</span>
                            </label>
                            <textarea name="" className='input input-bordered w-full h-[200px]'></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add review</button>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default GiveReview;