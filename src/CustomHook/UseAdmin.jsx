import  { useContext, useEffect, useState } from 'react';
import { authContextData } from '../Context/AuthContext';
import axios from 'axios';

const UseAdmin = () => {
    const {user} = useContext(authContextData)
    const [isAdmin, setIsAdmin] = useState()
    const [isAdminLoading, setIsAdminLoading] = useState(true)
    useEffect(()=>{
        if(user?.email){
            axios(`http://localhost:2500/isAdmin?email=${user?.email}`)
            .then(res=>{
                setIsAdmin(res.data.isAdmin)
                setIsAdminLoading(false)
            })
        } else{
            setIsAdmin(false)
            setIsAdminLoading(false)
        }
    }, [user?.email])
    return [isAdmin,  isAdminLoading]
};

export default UseAdmin;