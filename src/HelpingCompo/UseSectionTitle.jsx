
const UseSectionTitle = ({heading, subHeading}) => {
    return (
        <div className='w-3/6 lg:w-2/6 mx-auto space-y-4 text-center py-5'>
            <h2 className='text-yellow-500'>--{heading}--</h2>
            <p className="uppercase text-slate-600 font-bold text-3xl border-y-2 border-slate-600 border-opacity-30 py-4">{subHeading}</p>
        </div>
    );
};

export default UseSectionTitle;