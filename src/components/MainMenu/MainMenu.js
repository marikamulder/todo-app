import { NavLink } from "react-router-dom";
import './MainMenu.scss';

function MainMenu() {
    return (
        <nav>
            <button><NavLink to="/" className="navButton" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'grey' })}>Tasks</NavLink></button>
            <button><NavLink to="/add" className="navButton" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'grey' })}>Add</NavLink></button>
            <button><NavLink to="/help" className="navButton" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'grey' })}>Help</NavLink></button>
        </nav>
    );
}

export default MainMenu;