import React, { useState, useEffect } from "react";
import './login.css';
import { Button, Form } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    useEffect(()=>{
        if(localStorage.getItem("userData")){
            history.push("/home")
        }
    },[])

    async function login(e){
        e.preventDefault();

        let userData = {email, password}
        console.log(userData)
        let result = await fetch("http://localhost:5000/login",{
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
                <Form onSubmit={login}>
                    <div className="loginform">
                        <div className="heading">instagram</div>
                        <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <Button className="btn" type="submit">Log In</Button>
                        <div className="or">
                            <hr/>
                            <span style={{backgroundColor: "white", fontWeight: 600, marginTop:"3px"}}>OR</span>
                            <hr/>
                        </div>
                        <div className="fb">Log In With Facebook</div>
                        <div className="fp">Forgot Password?</div>
                    </div>
                </Form>
                
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
