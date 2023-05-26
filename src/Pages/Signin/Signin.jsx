import signinLottie from '../../../public/38435-register.json'
import Lottie from "lottie-react";

const Signin = () => {
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-3/6 flex justify-center items-center">
                    <Lottie animationData={signinLottie} loop={true} />
                </div>
                <div className="card flex-1 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className='font-bold text-3xl'>Please Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;