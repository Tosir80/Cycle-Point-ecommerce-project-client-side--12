import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import register from '../../../img/register.png';
const Register = () => {
        const [registerData, setLoginData] = useState({});

        const onBlurHander = (e) => {
          const flied = e.target.name;
          const value = e.target.value;
          const newData = { ...registerData };
          newData[flied] = value;
          setLoginData(newData);
        };

        const registerHandler = (e) => {
          console.log(registerData)
          e.preventDefault();
          console.log(registerData.password)
          if(registerData.password!==registerData.password2){
             alert('password not match')
             return
          }
          
        };
    return (
      <div  style={{height:'80vh'}}>
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <div className='py-5 login'>
                <h3>Please create your an Account</h3>
                <form onSubmit={registerHandler}>
                  <input placeholder='Name' type='name' onBlur={onBlurHander} name='name' />
                  <input placeholder='Your Email' type='email' onBlur={onBlurHander} name='email' />
                  <input
                    placeholder='Your Password'
                    type='password'
                    name='password' onBlur={onBlurHander}
                  />
                  <input
                    placeholder='Confirm Password'
                    type='password'
                    name='password2' onBlur={onBlurHander}
                  />

                  <Button className='loginBtn' type='submit'>
                   Register
                  </Button>
                </form>
                <div className='p-2 me-5 text-center'>
                  <h5>
                    Already have An Account?
                    <Link to='/register'> Sign In</Link>
                  </h5>
                  <p>-----------------Or----------------</p>
                  <Button className='googleBtn'>Login With Google</Button>
                </div>
              </div>
            </Col>
            <Col sm={12} md={6}>
              <img className='img-fluid' src={register} alt='' />
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default Register;