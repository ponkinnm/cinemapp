import {createSlice} from '@reduxjs/toolkit'
import {auth} from "../../firebaseConfig";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, deleteUser} from "firebase/auth";

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
    },
})

export async function login(email, password) {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user.toJSON();
}

export async function signUp(email, password, displayName) {
    const credential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {displayName});
    return credential.user.toJSON();
}

export async function deleteCurrentUser() {
    return await deleteUser(auth.currentUser)
}

export async function logOut() {
    await signOut(auth)
}

export const selectUser = (state) => state.auth?.user;

// Action creators are generated for each case reducer function
export const {setUser} = authSlice.actions;

export default authSlice.reducer