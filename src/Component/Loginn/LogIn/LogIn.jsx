import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material'; 
import React, { useState } from 'react';
import Login from '../../../images/login.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const LogIn = () => {
    const [loginData, setLoginData] = useState({});
    const {user, logUser, isLoading, authError} = useAuth();

    const location = useLocation();
    const navigate = useNavigate();  
                                               
    const handleOnChange = e => {
        const field = e.target.name; 
        const value = e.target.value; 
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData); 

    }

    const handleFormSubmitting = (event) => {
      logUser(loginData.email, loginData.password, location, navigate);  
        event.preventDefault();
      }

    return (
        <>
        <Container>
        <Grid container spacing={2}>
        <Grid item sx={{mt: 15}} xs={12} md={6}>
        <Typography sx={{textTransform: "capitalize", ml: 23}}  variant="body1" gutterBottom> login </Typography> 
            <form onSubmit={handleFormSubmitting}>
            <TextField 
            sx={{ width: '75%', m: 1, mt: 8}} 
            // id="standard-basic" 
            label="User Email" 
            type='email'
            name='email'
            onChange={handleOnChange}
            variant="standard" />
            <TextField 
            sx={{ width: '75%', m: 1, mt: 3}} 
            // id="standard-basic" 
            label="Password" 
            type='password'
            name='password'
            onChange={handleOnChange} 
            variant="standard" />
          <Link to="/registration">
          <Button variant='text'> New user? Please register!! </Button>  
          </Link>
            <Button type='submit' sx={{ textTransform: "capitalize",  mb: 7, m:1, backgroundColor: '#18D3B6', p: "8px 65px", borderRadius: "5px", width: '75%', mt: 8}} variant="contained"> sign in </Button>   

            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success"> Login is successful!!</Alert>}
            {authError && <Alert severity="error"> {authError} </Alert>}                  
           


            </form>
       
         
        </Grid>
        <Grid item xs={12} md={6}>
        <img style={{width: '100%', height: '100%'}} src={Login} alt="" /> 
        
        </Grid>
       </Grid>
      </Container>




            
        </>
    );
};

export default LogIn;