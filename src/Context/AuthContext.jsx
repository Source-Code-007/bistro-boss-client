/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';

export const authContextData = createContext(null) 
const auth = getAuth(app)

const AuthContext = ({children}) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    // create user func
    const signupFunc = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin func
    const signinFunc = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile info func
    const updateProfileUserFunc = (name, photoURL)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
    }

    // signout func
    const signoutFunc = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    // email verificaiton func 
    const emailVerificationFunc = ()=>{
        return sendEmailVerification(auth.currentUser)
    }


    // user state monitoring
    useEffect(()=>{
        onAuthStateChanged(auth, currUser=> {
            setUser(currUser)
            setLoading(false)
        })
    }, [])

    const authData = {
        user, setUser, loading, setLoading, signinFunc, signupFunc, signoutFunc, updateProfileUserFunc, emailVerificationFunc
    }
    return (
        <authContextData.Provider value={authData}>{children}</authContextData.Provider>
    );
};

export default AuthContext;