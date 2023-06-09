import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import Login from '../../../images/login.png';
import useAuth from '../../../hooks/useAuth';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate(); 
    const {user, registerUser, isLoading, authError} = useAuth();    

    const handleOnChange = e => {
        const field = e.target.name; 
        const value = e.target.value; 
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        // console.log(newLoginData); 
        setLoginData(newLoginData); 

    }

    const handleFormSubmitting = (event) => {
        if(loginData.password !== loginData.password2){
          alert('Your password did not match');
          return
        }
        registerUser(loginData.email , loginData.password, loginData.name, navigate); 
        event.preventDefault();
      }

    return (
        <>
         <Container>
        <Grid container spacing={2}>
        <Grid item sx={{mt: 15}} xs={12} md={6}>
        <Typography sx={{textTransform: "capitalize", ml: 23}}  variant="body1" gutterBottom> registration  </Typography> 
           { !isLoading && <form onSubmit={handleFormSubmitting}>
            <TextField 
            sx={{ width: '75%', m: 1, mt: 8}} 
            id="standard-basic" 
            label="Your Name" 
            type='text'
            name='name' 
            onChange={handleOnChange}
            variant="standard" />
            <TextField 
            sx={{ width: '75%', m: 1, mt:3}} 
            id="standard-basic" 
            label="Your Email" 
            type='email'
            name='email' 
            onChange={handleOnChange}
            variant="standard" />
            <TextField 
            sx={{ width: '75%', m: 1, mt: 3}} 
            id="standard-basic" 
            label="Password" 
            type='password'
            name='password'
            onChange={handleOnChange} 
            variant="standard" />
            <TextField 
            sx={{ width: '75%', m: 1, mt: 3}} 
            id="standard-basic" 
            label="Re-Type Your Password" 
            type='password'
            name='password2'
            onChange={handleOnChange} 
            variant="standard" />
          <Link to="/login"> 
          <Button variant='text'> Already registered? Please login!! </Button>  
          </Link>
            <Button type='submit' sx={{ textTransform: "capitalize",  mb: 7, m:1, backgroundColor: '#18D3B6', p: "8px 65px", borderRadius: "5px", width: '75%', mt: 8}} variant="contained"> register  </Button>                     
           </form> }

            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="success"> User Created Successfully!!</Alert>}
            {authError && <Alert severity="error"> {authError} </Alert>}
       
         
        </Grid>
        <Grid item xs={12} md={6}>
        <img style={{width: '100%', height: '100%'}} src={Login} alt="" /> 
        
        </Grid>
       </Grid>
      </Container>
      
      </>
    );
};

export default Registration;