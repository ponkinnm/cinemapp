import {Outlet, NavLink} from "react-router-dom";

function Layout() {
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

export default Layout;
