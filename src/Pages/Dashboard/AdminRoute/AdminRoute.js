import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Spinner from '../../Shared/Spinner/Spinner';
const AdminRoute = ({ children, ...rest }) => {
  let { user, isLoading ,admin } = useAuth();
  if ( !admin) {
    return (
      <div className='text-center py-5'>
         <Spinner></Spinner>

      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
