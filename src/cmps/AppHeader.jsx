import { NavLink } from "react-router-dom";

export function AppHeader() {
    return (
        <header className="app-header">
            <h4>Mister Toy</h4>
            <nav>
                <NavLink to="/">Home</NavLink> |
                <NavLink to="/toy">Toys</NavLink> |
                <NavLink to="/about">About</NavLink> |
            </nav>
        </header>
    )
}