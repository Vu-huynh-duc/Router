import { NavLink } from "react-router-dom"

const Navigation = () => {
    return <nav>
        <ul>
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
        </ul>

    </nav>
}

export default Navigation