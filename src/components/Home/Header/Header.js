import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
            <NavLink className="navbar-brand" to="/home">PANDA CINEMNA</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink activeClassName="activeNavItem" className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="activeNavItem" className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="activeNavItem" className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink activeClassName="activeNavItem" className="nav-link dropdown-toggle" to="/service" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink activeClassName="activeNavItem" className="dropdown-item" to="#">Movies Schedule</NavLink>
                            <NavLink activeClassName="activeNavItem" className="dropdown-item" to="#">Food and Drinks</NavLink>
                        </div>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}
