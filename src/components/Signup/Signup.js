import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import './signup.css';
import {useHistory} from 'react-router-dom';

function Signup() {
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem("userData")){
            history.push("/home")
        }
    },[])

    const [fullname, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setuserName] = useState('')

    async function register(e){
        e.preventDefault();

        let userData = {fullname, email, username, password}
        console.log(userData)
        debugger
        let result = await fetch("http://localhost:5000/register",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        })
        result = await result.json();
        console.log("result",result)
        localStorage.setItem("userData", JSON.stringify(result));
        history.push("/home")
    }


    return (
        <>
            <div className="container">
                <Form onSubmit={register}>
                    <div className="signupform">
                        <div className="heading">instagram</div>
                        <div className="hbelow">Sign up to see photos and videos from your friends.</div>
                        <Button className="">Log in With Facebook</Button>
                        <div className="or">
                            <hr/>
                            <span style={{backgroundColor: "white", fontWeight: 600, marginTop:"3px"}}>OR</span>
                            <hr/>
                        </div>
                        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input placeholder="Full Name" value={fullname} onChange={(e)=>setName(e.target.value)}/>
                        <input placeholder="Username" value={username} onChange={(e)=>setuserName(e.target.value)}/>
                        <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Button className="btn" type="submit">Sign Up</Button>
                        <div className="bsignup">By signing up, you agree to our Terms , Data Policy and Cookies Policy .</div>
                    </div>
                </Form>
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
