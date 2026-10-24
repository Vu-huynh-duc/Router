import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.scss"

function Navigation() {
    return <nav>
        <ul className = {styles.navigation}>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/buttons">Buttons</NavLink>
            </li>
            <li>
                <NavLink to="/comments">Comment</NavLink>
            </li>
            <li>
                <NavLink to="/counter">Counter</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
                <NavLink to="/todo">Todo</NavLink>
            </li>
            <li>
                <NavLink to="/weather">Weather</NavLink>
            </li>
            <li>
                <NavLink to="/admin">Admin</NavLink>
            </li>
            <li>
                <NavLink to="/post">Post</NavLink>
            </li>
        </ul>

    </nav>
}

export default Navigation