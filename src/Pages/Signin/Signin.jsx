import { Link } from 'react-router-dom';
import signinLottie from '../../../public/38435-register.json'
import Lottie from "lottie-react";
import { useContext } from 'react';
import { authContextData } from '../../Context/AuthContext';
import { useForm } from 'react-hook-form';


const Signin = () => {
    const { signinFunc } = useContext(authContextData)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSubmitFunc = data => {
        console.log(data);
        // signinFunc(email, password)
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(e => console.log(e.message))
    };

    return (
        <div className="hero min-h-screen w-full bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-3/6 flex justify-center items-center">
                    <Lottie animationData={signinLottie} loop={true} />
                </div>
                <form onSubmit={handleSubmit(handleSubmitFunc)} className="card flex-1 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='font-bold text-3xl'>Please Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {required: true})} placeholder="email" className="input input-bordered" />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {required: true})} placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p>New here? <Link to='/signup' className='btn btn-link px-0'>signup</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;