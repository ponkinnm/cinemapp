import {createSlice} from '@reduxjs/toolkit'
import {auth} from "../../firebaseConfig";
import {
    signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile
} from "firebase/auth";
import {useDispatch} from "react-redux";

const initialState = {
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.user = action.payload;
        },
        logout: (state) => {
            state.value -= 1
        },
        signup: (state, action) => {
            state.value += action.payload
        },
    },
})

export async function login(email, password) {
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user.user.toJSON();
}

export async function logOut() {
    await signOut(auth)
}

// Action creators are generated for each case reducer function
export const {setUser} = authSlice.actions;

export default authSlice.reducer