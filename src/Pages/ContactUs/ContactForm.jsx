/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { FaTelegram } from 'react-icons/fa';

const ContactForm = () => {

    const { register, handleSubmit, errors } = useForm(); // initialize the hook
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
            <form onSubmit={handleSubmit(onSubmit)} className="card flex-shrink-0 w-full sm:w-4/6 lg:w-3/6 mx-auto bg-slate-100 py-14 px-8">
                <div className="card-body">
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" {...register("name")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" {...register("email")}/>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Phone" className="input input-bordered" {...register("phone")}/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className='input input-bordered w-full h-32' placeholder='message' {...register("message")}></textarea>
                    </div>
                    <button className="btn btn-error btn-outline gap-2 my-5"><span>Send message</span> <FaTelegram></FaTelegram> </button>
                </div>
            </form>
    );
};

export default ContactForm;