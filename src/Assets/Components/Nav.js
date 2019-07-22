import React from 'react';
import NavContainer from '../Images/nav-container.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function Nav() {
    return (
        <Router>
        <div className="Nav">
            <img src={NavContainer} alt="nav container" className="NavContainerImg" />
            <i className="fas fa-cloud-sun-rain Logo"></i>
            <nav>
                <ul>
                    <NavLink exact to="/"
                    activeClassName="active"
                    className="NavLinks">
                        <li>current</li>
                    </NavLink>
                    <NavLink to="/forecast"
                    activeClassName="active"
                    className="NavLinks">
                        <li>forecast</li>
                    </NavLink>
                    <NavLink to="/map"
                    activeClassName="active"
                    className="NavLinks">
                        <li>map</li>
                    </NavLink>
                </ul>
            </nav>
        </div>
        </Router>
    );
}

export default Nav;