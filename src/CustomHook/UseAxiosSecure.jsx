import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContextData } from '../Context/AuthContext';

const axiosSecure = axios.create(
    {
        baseURL: 'http://localhost:2500'
    }
)
const UseAxiosSecure = () => {
    const { signoutFunc } = useContext(authContextData)
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('jwt-token')
            if (token) {
                config.headers.Authorization = token
            }
            return config
        })


    axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                await signoutFunc();
                navigate('/signin');
            }
            return Promise.reject(error);
        }
    );
}, [signoutFunc, navigate]);

return [axiosSecure]

};

export default UseAxiosSecure;