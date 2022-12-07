/**
 *SignOutButton to be displayed ingame so the user can sign out
 *
 *
 *
 */
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
                <button  onClick={handleLogout}>Log out</button>
            </div>
        </>
    )
}