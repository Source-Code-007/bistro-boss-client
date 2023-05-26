/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase.config';

export const authContextData = createContext(null) 
const auth = getAuth(app)

const AuthContext = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState('')

    // create user func
    const signupFunc = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin func
    const signinFunc = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData = {
        user, setUser, loading, setLoading, signinFunc, signupFunc
    }
    return (
        <authContextData.Provider value={authData}>{children}</authContextData.Provider>
    );
};

export default AuthContext;