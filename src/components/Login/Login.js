import React from 'react'
import './login.css';
import { Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function Login() {
    return (
        <>
            <div className="container">
                <div className="loginform">
                    <div className="heading">instagram</div>
                    <input placeholder="Email"/>
                    <input placeholder="Password"/>
                    <Button className="btn">Log In</Button>
                    <div className="or">
                        <hr/>
                        <span style={{backgroundColor: "white", fontWeight: 600}}>OR</span>
                        <hr/>
                    </div>
                    <div className="fb">Log In With Facebook</div>
                    <div className="fp">Forgot Password?</div>
                </div>
                <div className="lowerPart">
                    <div className="ac">Don't have an account?</div>
                    <NavLink to="signup">
                        <div className="signup">Sign up</div>
                    </NavLink>
                    
                </div>
            </div>
        </>
    )
}

export default Login
