import React, { useContext, useState } from 'react';
import { authContextData } from '../Context/AuthContext';
import { Oval } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(authContextData)
    const location = useLocation()

    if(loading){
        return <div className='min-h-[80vh] flex justify-center items-center'><Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      
      /></div>
    } 
    if(user?.email){
        return children
    }
    return <Navigate to={'/signin'} state={{from: location}}></Navigate>
};

export default PrivateRoute;