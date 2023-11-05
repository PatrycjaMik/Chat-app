import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="navBar">
            <li><NavLink to="/">profile</NavLink></li>
            <li><NavLink to="/chat">chat</NavLink></li>
        </ul>
    )
}