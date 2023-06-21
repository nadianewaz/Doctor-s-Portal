import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';
import {  Navigate , useLocation} from 'react-router-dom';


const PrivateRoute = ( { children, ...rest } ) => {
 
    const {user, isLoading } = useAuth();
    const location = useLocation();
    if(isLoading) { return <CircularProgress/> } 
    return (
        <>
        {user.email ? (
          children
        ) : (
          <Navigate                
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
          }
    </>
    );



};

export default PrivateRoute;
