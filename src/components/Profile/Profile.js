import React from 'react'
import Header from '../../helpers/Header/Header'
import {Button, Container, Row, Col, Image} from 'react-bootstrap';
import './profile.css';
import { NavLink, Link } from "react-router-dom";

function Profile() {
    return (
        <>
            <Header/>
            <Container>
                <div className="profileBody">
                    <div className="profileTop">
                        <div>
                            <Image className="profilePic" src={`${process.env.PUBLIC_URL}/assets/dpimage.jpg`} roundedCircle />
                        </div>
                        <Row className="profileEdit">
                            <Col md={6}><div className="profileUsername">faisal_78625</div></Col>
                            <Col md={6}><button className="editbutn">Edit Profile</button></Col>
                        </Row>
                    </div>
                </div>
           </Container>
        </>
    )
}

export default Profile
