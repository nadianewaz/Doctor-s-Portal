import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../../images/login.png';

const Registration = () => {
    const [loginData, setLoginData] = useState({});
    
    const handleOnChange = e => {
        const field = e.target.name; 
        const value = e.target.value; 
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData); 

    }

    const handleFormSubmitting = (event) => {
        if(loginData.password !== loginData.password2){
          alert('Your password did not match');
          return
        }
        event.preventDefault();
      }

    return (
        <>
         <Container>
        <Grid container spacing={2}>
        <Grid item sx={{mt: 15}} xs={12} md={6}>
        <Typography sx={{textTransform: "capitalize", ml: 23}}  variant="body1" gutterBottom> registration  </Typography> 
            <form onSubmit={handleFormSubmitting}>
            <TextField 
            sx={{ width: '75%', m: 1, mt: 8}} 
            id="standard-basic" 
            label="User Name" 
            type='text'
            name='name'
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
            <Button type='submit' sx={{ textTransform: "capitalize",  mb: 7, m:1, backgroundColor: '#18D3B6', p: "8px 65px", borderRadius: "5px", width: '75%', mt: 8}} variant="contained"> sign in </Button>                     
           


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

export default Registration;