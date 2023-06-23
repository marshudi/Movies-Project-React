import React from "react";
import img from "./img/bg.jpg"
import { NavLink } from "react-router-dom";


const background={
    backgroundImage: `url(${img})`,
    width:"100%",
    backgroundSize: "cover"
}


export default function Login(){ 
    console.log("hi")
    return(

        <>
        
        <body style={background}>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <main className="container center" >
        <div className="container-fluid login-container">
        <h2>Login</h2>
        <form>
            <div className="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username"></input>
            </div>
            <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"></input>
            </div>
            <button type="submit">Login</button>
            <br/>
            <hr/>
   
                <NavLink to="/Register" type="submit">
                Register
                </NavLink>
             
                
        </form>
        </div>
        </main>
        </body>

        
        
        </>
    );



};