import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { account } from '../../../configs/setting';
import { logInAction } from '../../../redux/actions/UserAction';
import './Header.scss'
import { history } from '../../../App'

export default function Header(props) {
    // let currentPage = props.history.pathname;
   //Log out
  const logout = () => {
    localStorage.removeItem("User");
    history.push('/')
    // props.history.replace(props.history.pathname);
  };

  //Check login
  const isLogin = () => {
    if (localStorage.getItem("User")) {
      let user = JSON.parse(localStorage.getItem("User"));
      //Logged
      return (
        <div className="infor">
          <div>
          <a>
            <span className="text-white btn btn-outline-white">
              Hello{" "}
              {user.hoTen}
            </span>
          </a>
          </div>
         
            <div>
            <a href="# "
            className="text-white btn btn-outline-white"
              style={{ cursor: "pointer" }}
              onClick={logout}>Logout</a>
            </div>
        </div>
      );
    }
    return (
        <NavLink
          className="user d-flex align-items-center"
        //   activeClassName="active"
          exact
          to={{
            pathname: `/login`,
            // preRequire: currentPage,
            // prePage: currentPage
          }}
        >
          <span className="text-white">Login</span>
        </NavLink>
      );
}
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
                    
                </ul>
                
                <form >
                <div className="mr-5 ml-5 btn btn-outline-light">{isLogin()}</div>
                </form>
            </div>
        </nav>


    )


}
