import { Link, useLocation, useNavigate } from 'react-router-dom';
import signinLottie from '../../../public/38435-register.json'
import Lottie from "lottie-react";
import { useContext, useState } from 'react';
import { authContextData } from '../../Context/AuthContext';
import { useForm, useWatch } from 'react-hook-form';


const Signin = () => {
    const { signinFunc, setUser, setLoading, signoutFunc, passwordResetFunc } = useContext(authContextData)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const { register, handleSubmit, watch, control, formState: { errors } } = useForm();
    const watchEmail = useWatch({ control, name: 'email' });

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleSubmitFunc = data => {
        const { email, password } = data
        signinFunc(email, password)
            .then(data => {
                const currUser = data.user
                // if not verified email then signout automatically otherwise not
                setLoading(true)
                if (currUser.emailVerified) {
                    setUser(currUser)
                    setLoading(false)
                    setSuccess('user signin successfully')
                    navigate(from)
                    return
                }
                signoutFunc().then(() => {
                    setLoading(false)
                    setError('You need to verify email first!')
                    setUser(null)
                }).catch(e => setError(e.message))

            })
            .catch(e => {
                setLoading(false)
                if (e.code === 'auth/user-not-found') {
                    setError("User not found. Please check your credentials or create a new account.");
                }
                if (e.code === 'auth/wrong-password') {
                    setError("Incorrect password. Please try again.");
                }
            })
    };

    // handle password reset func
    const handlePassResetFunc = () => {
        console.log(watchEmail)
        passwordResetFunc(watchEmail)
            .then(res => {
                setLoading(false)
                console.log(res);
            })
            .catch(e => console.log(e.message))
    }

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
                            <input onKeyDown={() => setError('')} type="email" {...register("email", { required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/ })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>*Please enter a valid email</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input onKeyDown={() => setError('')} type="password" onChange={() => setError('')} {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{6,}$/ })} placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-red-500'>*Password must be 6 characters or more, with at least one letter, one digit and one special character.</span>}
                            <label className="label">
                                <a onClick={handlePassResetFunc} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {error && <span className='text-red-500'>*{error}</span>}
                        {success && <span className='text-green-500'>{success}</span>}
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