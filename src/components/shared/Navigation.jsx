import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <img src="https://image.flaticon.com/icons/png/512/2785/2785819.png" width="30" alt="logo" className="d-inline-block align-top"/>
                COVID-19
            </a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Covid">Covid Data</Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navigation;