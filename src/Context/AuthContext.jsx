/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';

export const authContextData = createContext(null)
const auth = getAuth(app)

const AuthContext = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    // create user func
    const signupFunc = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin func
    const signinFunc = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile info func
    const updateProfileUserFunc = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    // reset password func
    const passwordResetFunc = (email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    // signout func
    const signoutFunc = () => {
        setLoading(true)
        return signOut(auth)
    }

    // email verificaiton func 
    const emailVerificationFunc = (user) => {
        setLoading(true)
        return sendEmailVerification(user)
    }


    // user state monitoring
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currUser => {
            if (currUser) {
                // create access token and store it in local storage
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: currUser.email, name: currUser.displayName })
                }
                fetch('http://localhost:2500/jwt', options)
                    .then(res => res.json())
                    .then(data => {
                        setUser(currUser)
                        setLoading(false)
                        localStorage.setItem('jwt-token', `Bearer ${data.token}`)
                    })
                    .catch(e => console.log(e.message))
            } else {
                localStorage.removeItem('jwt-token')
                setUser(null)
                setLoading(false)
            }
        })
        return unsubscribe()
    }, [])

    const authData = {
        user, setUser, loading, setLoading, signinFunc, signupFunc, signoutFunc, updateProfileUserFunc, emailVerificationFunc, passwordResetFunc
    }
    return (
        <authContextData.Provider value={authData}>{children}</authContextData.Provider>
    );
};

export default AuthContext;