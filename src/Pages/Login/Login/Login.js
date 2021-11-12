import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Login.css'
import login from '../../../img/login.png'
import Button from '@restart/ui/esm/Button';
import { Link,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';
const Login = () => {
    const [loginData ,setLoginData]=useState({})
     const { user,loginUsingGoogle, logIn } = useAuth();
     const location = useLocation();
     const history = useHistory();

    const onBlurHander=(e)=>{
     const flied=e.target.name 
     const value=e.target.value 
     const newData={...loginData}
       newData[flied]=value 
       setLoginData(newData)
    }
    
    const loginHandler=(e)=>{
       
        logIn(loginData.email, loginData.password, location, history);
        if(user?.email){
          toast('Successfully Login !')
        }
         e.preventDefault();
    }
// ----google login
const googleLogin=()=>{
  loginUsingGoogle(location,history)
}

    return (
      <div style={{ height: '70vh' }}>
        <Container>
          <ToastContainer />;
          <Row>
            <Col sm={12} md={6} lg={6}>
              <div className='py-5 login'>
                <h3>Please Sign in</h3>
                <form onSubmit={loginHandler}>
                  <input
                    placeholder='Your Email'
                    type='email'
                    onBlur={onBlurHander}
                    name='email'
                  />
                  <input
                    placeholder='Your Password'
                    type='password'
                    onBlur={onBlurHander}
                    name='password'
                  />

                  <Button className='loginBtn' type='submit'>
                    Login
                  </Button>
                </form>
                <div className='p-2 me-md-5 -e-md-5 text-center'>
                  <h5>
                    New User? Please
                    <Link to='/register'> Create an Account</Link>
                  </h5>
                  <p>-----------------Or----------------</p>
                  <Button className='googleBtn px-5' onClick={googleLogin}>
                    Login With Google
                  </Button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <img className='img-fluid' src={login} alt='' />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Login;