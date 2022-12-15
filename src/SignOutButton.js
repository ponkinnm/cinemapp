/**
 *SignOutButton to be displayed ingame so the user can sign out
 *
 *
 *
 */
import './SignOutButton.css';
import {useNavigate} from "react-router-dom";
import {logOut, setUser} from "./features/auth/authSlice";
import {useDispatch} from "react-redux";

export default function SignOutButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logOut();
            dispatch(setUser(null));
            navigate("/");
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <div>
                <button className="log-out" onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}