import {Outlet, NavLink} from "react-router-dom";
import {useUserAuth} from "../context/UserAuthContext"
import SignOutButton from "../SignOutButton";
function Layout() {
    const {user} = useUserAuth();
    if (user) {
        return (

            <>
                <nav className={"navigation"}>
                    <span className="font-accent">CinemApp</span>
                    <ul className={"menu"}>
                        <li className={"menu__item"}>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className={"menu__item"}>
                            <NavLink
                                to="game">Quiz</NavLink>
                        </li>
                        <li className={"menu__item"}>
                            <div>User:{user.displayName}</div>
                        </li>
                        <li className={"menu__item"}>
                            <SignOutButton />
                        </li>

                    </ul>
                </nav>
                <div className="main-content">
                    <Outlet/>
                </div>
            </>
        )
    }
    else {
        return (

            <>
                <nav className={"navigation"}>
                    <span className="font-accent">CinemApp</span>
                    <ul className={"menu"}>
                        <li className={"menu__item"}>
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className={"menu__item"}>
                            <NavLink to="signup">Sign
                                up</NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="main-content">
                    <Outlet/>
                </div>
            </>
        )
    }

}

export default Layout;
