
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { userContext } from './App';
import axios from 'axios';
import { useNavigate } from 'react-router';
 export function Naves() {

  const user =useContext(userContext)
  const navigate = useNavigate();
  const handleLogout=()=>{
    axios.get('http://localhost:5000/logout')
    .then(res =>{
      if(res.data)
      navigate(0)

    }).catch(err=>console.log(err))
  }

  return (
    
    <>
    <Navbar bg="black" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">blog.App</Navbar.Brand>
        <Nav className="me">
          <Nav.Link href="/">Home</Nav.Link>

          {user && user.username ? (
              <>
              <Nav.Link href="/Create">Create</Nav.Link>
              <Nav.Link href="" onClick={handleLogout}>Logout</Nav.Link>
              </>
          ) : (
            <>
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/regi">Sign Up</Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
    <br />
  </>
  
  )
}