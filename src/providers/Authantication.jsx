import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext();

const Authantication = ({children}) => {
    const [user, setUser] = useState();
    const [userName, setUserName] = useState(null);


    // providers 
    const google = new GoogleAuthProvider();
    const facebook = new FacebookAuthProvider();
    const github = new GithubAuthProvider();

    // create user with email and password
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password
    const loginWithEmailAndPassword = (email, password) =>{
        return signInWithEmailAndPassword( auth, email, password)
    }

    // SignIn with social login 
    const socialLogIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const createName= (name) =>{
        setUserName(name)
    }

    // signOut
    const logOut = () => { 
        return signOut(auth);
     }

    // set user to state
    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })

        return () => {
            unsubscribe();
        }
     },[])
    const authInfo = {
        createName,
        user,
        google,
        facebook,
        github,
        createUser,
        loginWithEmailAndPassword,
        socialLogIn,
        logOut,
        userName,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authantication;