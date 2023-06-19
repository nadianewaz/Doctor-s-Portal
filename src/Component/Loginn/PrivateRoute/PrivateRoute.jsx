import React from 'react';
import { Navigate, Outlet  } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// import { CircularProgress } from '@mui/material';
// import { redirect } from 'react-router-dom';


const PrivateRoute = ( { children, ...rest } ) => {


  const auth = null; 
  return auth ? <Outlet /> : <Navigate to="/login" />;
 
    // const {user, isLoading } = useAuth();
    // if(isLoading) { return <CircularProgress/> } 
    // return (
    //     <>
    //     <Route
    //   {...rest}                           
    //   render={({ location }) =>
    //     user.email ? (
    //       children
    //     ) : (
    //       <Redirect               
    //         to={{
    //           pathname: "/login",
    //           state: { from: location }
    //         }}
    //       />
    //     )
    //   }
    // />
    // </>
    // );



};

export default PrivateRoute;
