import React from 'react';
import { Container,Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from '../../../img/logo.png'
const Header = () => {
    return (
      <>
        <Navbar className='navbar' expand='md' variant='dark'>
          <Container>
            <NavLink className='brand' to='/home'>
              <img src={logo} alt='' />
              Cycle Point
            </NavLink>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto header'>
                <NavLink to='/home' activeClassName='selected'>
                  Home
                </NavLink>
                <NavLink to='/explore' activeClassName='selected'>
                  Explore
                </NavLink>
                <NavLink to='/Login' activeClassName='selected'>
                  Login
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;