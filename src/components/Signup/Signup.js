import React from 'react'
import { Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import './signup.css';

function Signup() {
    return (
        <>
            <div className="container">
                <div className="signupform">
                    <div className="heading">instagram</div>
                    <div className="hbelow">Sign up to see photos and videos from your friends.</div>
                    <Button className="">Log in With Facebook</Button>
                    <div className="or">
                        <hr/>
                        <span style={{backgroundColor: "white", fontWeight: 600}}>OR</span>
                        <hr/>
                    </div>
                    <input placeholder="Email"/>
                    <input placeholder="Full Name"/>
                    <input placeholder="Username"/>
                    <input placeholder="Password"/>
                    <Button className="btn">Sign Up</Button>
                    <div className="bsignup">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</div>
                </div>
                <div className="lowerPart">
                    <div className="ac">Have an account?</div>
                    <NavLink to="">
                        <div className="login">Log In</div>
                    </NavLink>
                    
                </div>

            </div>  
        </>
    )
}

export default Signup
