/* eslint-disable react/prop-types */
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const googleLogin = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };
    const githubLogin = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)
    };
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const passwordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unsubscribed
    })


    const authInfo = {
        user,
        googleLogin,
        githubLogin,
        register,
        passwordLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;