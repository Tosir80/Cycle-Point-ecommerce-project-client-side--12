import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Row, Tab } from 'react-bootstrap';
import './dashboard.css'
import profile from '../../../img/profile.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import MyOrder from '../MyOrder/MyOrder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import useAuth from '../../Hooks/useAuth';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
     const { user, logOut } = useAuth();
    return (
      <>
        <Row>
          <Col sm={12} md={3}>
            <div className='nestedNav'>
              <div className="Customer">
                <div className="bg-info p-2 text-center rounded shadow-lg">
                  {user?.photoURL? <img className="rounded-circle" src={user?.photoURL} alt="" />:
                  <img className="rounded-circle w-100" src={profile} alt="" />
                  }
                  <h4 className="text-light py-2">Name : {user.displayName}</h4>
                  <h6 className="text-light py-2">Name : {user.email}</h6>
                </div>
                <li>
                  <NavLink activeClassName='nestedSelcted' to={`${url}/pay`}>
                    Pay
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='nestedSelcted'
                    to={`${url}/myorder`}
                  >
                    MyOrder
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName='nestedSelcted' to={`${url}/review`}>
                    Add Review
                  </NavLink>
                </li>
              </div>
              <Button onClick={()=>logOut()} className="btn bg-warning btn-outline-light px-5 b">LogOut</Button>
            </div>
          </Col>
          <Col sm={12} md={9}>
            <Switch>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route path={`${path}/myorder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
            </Switch>
          </Col>
        </Row>
      </>
    );
};

export default Dashboard;