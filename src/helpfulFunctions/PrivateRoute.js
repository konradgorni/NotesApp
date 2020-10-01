import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuth } from 'data/slices/userInfoSlice';

const PrivateRoute = ({ component: Component, path }) => {
  // const Auth = useSelector((state) => state.userInfo.isAuth);
  const Auth = true;
  return (
    <Route
      path={path}
      render={(props) => (Auth ? <Component {...props} /> : <Redirect to={'/'} />)}
    />
  );
};

export default PrivateRoute;
