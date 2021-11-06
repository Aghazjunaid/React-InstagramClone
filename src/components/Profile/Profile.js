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
                            <Image className="profilePic img-fluid" src={`${process.env.PUBLIC_URL}/assets/dpimage.jpg`} roundedCircle />
                        </div>
                        <div>
                            <Row className="profileEdit">
                                <Col md={6}><div className="profileUsername">faisal_78625</div></Col>
                                <Col md={6}><button className="editbutn">Edit Profile</button></Col>
                            </Row>
                            <div className="followers">
                                <div>4 posts</div>
                                <div>11 followers</div>    
                                <div>23 following</div>        
                            </div>
                            <div className="ProfileName">Faisal Junaid</div>
                            <div className="bio">
                                Official I'd
                                Welcome to my world 🌍
                                First crush my mom and dad
                                Music addicted 🎧
                                My life my choice ☺️
                                Wish me on 31 July 🎂
                                #HMS
                            </div>   
                        </div>
                    </div>
                    <hr/>
                </div>
                
           </Container>
        </>
    )
}

export default Profile
