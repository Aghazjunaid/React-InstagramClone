import React from 'react'
import { Navbar, Container, Form, Button, NavDropdown, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import './header.css';

function Header() {
    return (
        <>
            <Navbar bg="light" expand="lg" style={{ backgroundColor: 'white' }}>
                <Container>
                    <Link to="/home" className="navbar-brand heading"><img className="img-fluid instaLogo"
                        src={`${process.env.PUBLIC_URL}/assets/instaLogo.png`}
                        alt="logo" />
                    </Link>
                    
                </Container>
            </Navbar>
        </>
    )
}

export default Header
