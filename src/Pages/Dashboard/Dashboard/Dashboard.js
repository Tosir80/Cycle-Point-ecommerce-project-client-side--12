import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Row, Tab } from 'react-bootstrap';
import './dashboard.css';
import profile from '../../../img/profile.png';
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
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProducts/ManageProduct';
import AdminRoute from '../AdminRoute/AdminRoute';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { user, logOut ,admin } = useAuth();
  console.log(admin)
  return (
    <>
      <Row>
        <Col sm={12} md={3} className=" p-0 m-0">
          <div className='nestedNav'>
            <div className='bg-info p-2 text-center rounded shadow-lg'>
              {user?.photoURL ? (
                <img className='rounded-circle' src={user?.photoURL} alt='' />
              ) : (
                <img className='rounded-circle w-100' src={profile} alt='' />
              )}
              <h4 className='text-light py-2'>Name : {user.displayName}</h4>
              <h6 className='text-light py-2'>Name : {user.email}</h6>
            </div>
            {/* ----------------customer----- */}
            {!admin? (
              <div className='Customer'>
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
            ) : (
              <div>
                {/* admin------ */}
                <li>
                  <NavLink
                    activeClassName='nestedSelcted'
                    to={`${url}/manageorder`}
                  >
                    Manage all Order
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='nestedSelcted'
                    to={`${url}/addproduct`}
                  >
                    Add Proudct
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='nestedSelcted'
                    to={`${url}/makeadmin`}
                  >
                    Make Admin
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    activeClassName='nestedSelcted'
                    to={`${url}/manageproduct`}
                  >
                    Manage Products
                  </NavLink>
                </li>
              </div>
            )}
            <Button
              onClick={() => logOut()}
              className='btn bg-warning btn-outline-light px-5 b'
            >
              LogOut
            </Button>
          </div>
        </Col>
        <Col sm={12} md={8} className="p-0 m-0" >
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
            <AdminRoute path={`${path}/manageorder`}>
              <ManageAllOrder></ManageAllOrder>
            </AdminRoute>
            <AdminRoute path={`${path}/addproduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageproduct`}>
              <ManageProduct></ManageProduct>
            </AdminRoute>
          </Switch>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
