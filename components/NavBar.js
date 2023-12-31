'use client'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';
import logo from '../public/assets/Logo/Mingles_Logo_Color_Mesa_de_trabajo_1.png'
import twitter from '../public/assets/Logo/twitter.svg'
import telegram from '../public/assets/Logo/telegram.png'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg='' className="bg-body-white" fixed='top' >
      <Container fluid className='' >
        <Navbar.Brand href="/"><Image src={logo} className='img-fluid' alt='Mingles' width={292.48} height={66.853} ></Image> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex align-items-center">
          
          </Nav>
          <Nav className='d-flex align-items-center'>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/roadmap">ROADMAP</Nav.Link>
            <Nav.Link href="/team">TEAM</Nav.Link>
            <Nav.Link href="#"> <Image className='img-fluid' src={twitter} alt='mingle-twitter' width={41.783} height={41.783} ></Image> </Nav.Link>
            <Nav.Link href="#"> <Image className='img-fluid' src={telegram} alt='mingle-telegram' width={41.783} height={41.783} ></Image> </Nav.Link> 
            <Nav.Link href="#mingle"><button type="button" className="btn btn-outline-dark">Come Mingle</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar