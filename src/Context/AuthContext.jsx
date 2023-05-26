/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';

export const authContextData = createContext(null) 
const AuthContext = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState('')
    const authData = {
        user, setUser, loading, setLoading
    }
    return (
        <authContextData.Provider value={authData}></authContextData.Provider>
    );
};

export default AuthContext;