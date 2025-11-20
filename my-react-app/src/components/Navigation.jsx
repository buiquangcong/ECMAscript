import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/booking">Booking</NavLink>
        </nav>
    );
}

export default Navigation;