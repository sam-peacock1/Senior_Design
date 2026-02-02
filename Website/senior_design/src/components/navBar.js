import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import githubLogo from '../assets/img/githubLogo.svg';
import linkedLogo from '../assets/img/linkedLogo.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => setActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#about" className = {activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick = {() => setActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#experiance" className = {activeLink === 'experiance' ? 'active navbar-link' : 'navbar-link'} onClick = {() => setActiveLink('experiance')}>Experience</Nav.Link>
            <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick = {() => setActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className = {activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick = {() => setActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className = "navbar-text">
            <div className="social-icons">
                <a href="#"><img src={githubLogo} alt="GitHub" /></a>
                <a href="#"><img src={linkedLogo} alt="LinkedIn" /></a>
            </div>
            <button className = "vvd" onClick = {() => console.log('connect')}><span>Let’s Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    }