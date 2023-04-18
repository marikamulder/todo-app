import './Help.scss';
import { Outlet } from 'react-router-dom';
import { NavLink } from "react-router-dom";

function Help() {
    return (
        <div className="helpbox">
            <h1>Help</h1>
            <p>This app is to be used as a task keeper, so that you can stay on top of what needs to be done. <br/>
            Managing everything from common chores, tasks for work, or as a grocery list.  <br/>
             See the links below for further instructions if you need more help.</p>
            <Outlet />
            <nav>
                <NavLink to="/help/add" className='subNav' style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'lightgrey' })}><li>Adding Tasks</li></NavLink>
                <NavLink to="/help/remove" className='subNav' style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'lightgrey' })}><li>Removing tasks</li></NavLink>
                <NavLink to="/help/change" className='subNav' style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'lightgrey' })}><li>Changing status</li></NavLink>
            </nav>
        </div>
    );
}

export default Help;