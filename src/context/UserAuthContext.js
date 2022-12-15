import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, deleteUser
} from "firebase/auth";
import {auth} from "../firebaseConfig";

const userAuthContext = createContext(null);

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState({});

    function updateDisplayName(name){
        return updateProfile(auth.currentUser, {displayName: name})
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    function logOut() {
        return signOut(auth);
    }
    function deleteCurrentUser(currentuser) {
        return deleteUser(currentuser);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth", currentUser);
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (<userAuthContext.Provider
            value={{user, logIn, signUp, logOut, updateDisplayName, deleteCurrentUser}}
        >
            {children}
        </userAuthContext.Provider>);
}

export function useUserAuth() {
    return useContext(userAuthContext);
}