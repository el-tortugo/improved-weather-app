import React from 'react';
import { Link } from 'react-router-dom';
import './primary-weather-nav.css';

function BasicWeatherNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/weather">Weather</Link>
                </li>
            </ul>
        </nav>
    );
}

export default BasicWeatherNav;
