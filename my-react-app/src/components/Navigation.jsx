import { Link, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <NavLink to="/about">About</NavLink> {/* Tự động highlight khi trang active */}
        </nav>
    );
}

export default Navigation;