import React from "react";
import img from "./img/bg.jpg"

const background={
    backgroundImage: `url(${img})`,
    width:"100%",
    backgroundSize: "cover"

}






export default function Register(){
   
    return(

        <>
        <body style={background}>
        <br/><br/><br/><br/><br/><br/>
        <main className="container center">
        <div className="container-fluid login-container">
        <h2>Register</h2>
        <form>
            <div className="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username"></input>
            </div>
            <div className="form-group">
            <label for="Email">Email</label>
            <input type="text" id="username" name="username" placeholder="user@sample.com"></input>
            </div>
            <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password"></input>
            </div>
            <div className="form-group">
            <label for="password">Confirm Password</label>
            <input type="password" id="cPassword" name="cPassword" placeholder="Confirm your password"></input>
            </div>
            <button type="submit">Register</button>

        </form>
        </div>
        </main>
        </body>

        
        
        </>
    );



};