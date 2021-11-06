import React,{useEffect, useState} from 'react'
import Header from '../../helpers/Header/Header'
import {Container, Row, Col, Image} from 'react-bootstrap';
import './profile.css';
import { NavLink, Link } from "react-router-dom";

function Profile() {
    const [data,setData] = useState({})
    const [post,postData] = useState([])

    useEffect(()=>{
        getProfile()
        getAllPosts()
    },[])

    async function getProfile(){
        let userData = localStorage.getItem('userData');
        let userdataNew = JSON.parse(userData)
        debugger
        let result = await fetch("http://localhost:5000/ownProfile",{
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json",
                "authorization": userdataNew.data.token
            },
        })
        debugger
        result = await result.json();
        setData(result.data)
        console.log("result",result)
    }

    async function getAllPosts(){
        let userData = localStorage.getItem('userData');
        let userdataNew = JSON.parse(userData)
        debugger
        let result = await fetch("http://localhost:5000/getAllUsersPosts",{
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json",
                "authorization": userdataNew.data.token
            },
        })
        debugger
        result = await result.json();
        postData(result.data)
        console.log("postresult",result)
    }



    return (
        <>
            <Header/>
            <Container>
                <div className="profileBody">
                    <div className="profileTop">
                        <div>
                            <Image className="profilePic img-fluid" src={data.profileImage} roundedCircle />
                        </div>
                        <div>
                            <Row className="profileEdit">
                                <Col md={6}><div className="profileUsername">{data.username}</div></Col>
                                <Col md={6}><button className="editbutn">Edit Profile</button></Col>
                            </Row>
                            <div className="followers">
                                <div>4 posts</div>
                                <div>{data.followers ? data.followers.length : 0} followers</div>    
                                <div>{data.following ? data.following.length : 0} following</div>        
                            </div>
                            <div className="ProfileName">{data.fullname}</div>
                            <div className="bio">
                                {data.bio}
                            </div>   
                        </div>
                    </div>
                    <hr/>
                    <Row style={{marginTop:"20px"}}>
                        {
                            post.map(ele => 
                                <Link style={{ textDecoration: 'none' }} className="col-xs-12 m-2">
                                    <Image className="postPic img-fluid" src={ele.image} rounded />
                                </Link>
                            )
                        }
                    </Row>
                </div>
           </Container>
        </>
    )
}

export default Profile
