import React from 'react';
import { Container,Nav, Navbar,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './header.css'
import logo from '../../../img/logo.png'
import useAuth from '../../Hooks/useAuth';
const Header = () => {
  const{user,logOut}=useAuth()
    return (
      <>
        <Navbar className='navbar' expand='md' variant='light'>
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
                {user?.email && <NavLink to='/dashboard' activeClassName='selected'>
                  Dashboard
                </NavLink> }
                {user?.email? (
                  <div className="d-flex">
                    {user?.photoURL?<img className='img-fluid rounded-circle w-25 mx-2' src={user?.photoURL} alt='' /> :
                     <h4 className="me-1 pt-2">{user?.displayName}</h4> }
                     <Button className="logOutBtn" onClick={()=>logOut()}>LogOut</Button>   
                  </div>
                ) : (
                  <NavLink to='/Login' activeClassName='selected'>
                    Login
                  </NavLink>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;