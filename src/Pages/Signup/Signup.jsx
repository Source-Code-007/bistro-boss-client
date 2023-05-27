import Lottie from "lottie-react";
import signupLottie from '../../../public/registration-animation.json'
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useContext } from "react";
import { authContextData } from "../../Context/AuthContext";

const Signup = () => {
    const {signupFunc} = useContext(authContextData)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const handleSubmitFunc = data => {
        signinFunc(email, password)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(e => console.log(e.message))
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-3/6 flex justify-center items-center">
                    <Lottie animationData={signupLottie} loop={true} />
                </div>
                <form onSubmit={handleSubmit(handleSubmitFunc)} className="card flex-1 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='font-bold text-3xl'>Please Register</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", {required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/})} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>*Please enter a valid email</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" {...register("password", {required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{6,}$/})} placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-red-500'>*Password must be 6 characters or more, with at least one letter, one digit and one special character.</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Signup</button>
                        </div>
                        <p>Already registered? <Link to='/signin' className='btn btn-link px-0'>signin</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;