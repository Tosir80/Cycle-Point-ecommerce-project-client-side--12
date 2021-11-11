import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Spinner from '../../Shared/Spinner/Spinner';
const PrivateRoute=({ children, ...rest })=>{
  let {user,isLoading}= useAuth();
      if (isLoading) {
        return (
          <div className="text-center py-5">
            <Spinner></Spinner>
          </div>
        );
      }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


export default PrivateRoute;