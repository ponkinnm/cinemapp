/**
 *SignOutButton to be displayed ingame so the user can sign out
 *
 *
 *
 */
import './SignOutButton.css';
import {useUserAuth} from './context/UserAuthContext';
import {useNavigate} from "react-router-dom";

export default function SignOutButton(){
    const {logOut} = useUserAuth();
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await logOut();
            navigate("/");
        }
        catch (err) {
            console.error(err);
        }
    }
    return (
        <>
            <div>
                <button className="log-out"  onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}