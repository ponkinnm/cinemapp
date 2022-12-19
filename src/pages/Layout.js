import {Outlet, NavLink, Link} from "react-router-dom";
import SignOutButton from "../SignOutButton";
import {useSelector} from "react-redux";
import {selectUser} from "../features/auth/authSlice";

function Layout() {
    const user = useSelector(selectUser);

    return (

        <>
            <nav className={"navigation"}>
                <Link className={"logo"} to="/">
                    <span className="font-accent">CinemApp</span>
                </Link>

                <ul className="menu">
                    {user && <>
                        <li className={"menu__item"}>
                            <NavLink
                                to="game">Quiz</NavLink>
                        </li>
                        <li className={"menu__item"}>
                            <div>User:{user.displayName}</div>
                        </li>
                        <li className={"menu__item"}>
                            <SignOutButton/>
                        </li>
                        <li className={"menu__item"}>
                            <NavLink
                                to="highscore">Highscore</NavLink>
                        </li>
                    </>}
                </ul>
            </nav>
            <div className="main-content">
                <Outlet/>
            </div>
        </>
    )

}

export default Layout;
