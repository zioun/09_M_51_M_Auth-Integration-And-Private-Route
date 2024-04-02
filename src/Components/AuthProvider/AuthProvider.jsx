import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const prividerGoogle = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    } 

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, prividerGoogle)
        
    }

    //observe auth state change
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Current Value of the current user", currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return()=>{
            unSubscribe()
        }
    })

    const authInfo = {user, loading, createUser, logInUser, logOut, loginWithGoogle}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;