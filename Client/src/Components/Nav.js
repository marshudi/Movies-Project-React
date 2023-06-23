import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./img/logo-no-background - Copy.png"

const textcolor={
    color:"#EC058E"
}


export default function Nav() {
  return (
    <>
    <div >
    <nav className="navbar fixed-top navbar-expand-lg navbar-expand-md navbar-expand-sm" >
        <ul className="">
       
                <NavLink exact to="/" activeClassName="text-pink-600">
                    <img src={logo} style={{width:"50px",height:"40px"}}></img>
                </NavLink>
        
            <li>
                <NavLink exact to="/" activeClassName="active">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/RegisterMovie" activeClassName="active"> 
                    Register Movies
                </NavLink>
            </li>
            <li>
                <NavLink to="/Movies" activeClassName="active">
                    Movies
                </NavLink>
            </li>
            <li>
                <NavLink to="/Contact" activeClassName="active">
                    Contact
                </NavLink>
            </li>
            
            
        </ul>
        <ul className="ml-auto">
            <div className="container justify-content-end ">
            <div className="d-flex align-items-center justify-content-end">
            <NavLink to="/Login" activeClassName="active" 
                style={{}}
                className="btn btn-outline-info px-3"
                href=""
                role="button"
                exact="true"
              >
                <i style={textcolor}>Login</i>
            </NavLink>
              
            </div>
            </div>
            </ul>
    </nav>
    </div>
    </>

  );
}
