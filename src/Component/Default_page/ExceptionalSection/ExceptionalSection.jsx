import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png';

const ExceptionalSection = () => {
    return (
        <>
        <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <img style={{width: '80%', height: '100%'}} src={treatment} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant="h4" component="div" sx={{textTransform: "capitalize", fontWeight: "500"}}>
            <h2> exceptional dental care, on your terms </h2>
            </Typography>

            <Typography variant="body2" sx={{ color: 'gray', mt: 2, fontSize: 16}}>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit magni nihil corporis eligendi molestiae placeat debitis aliquam illo est, laborum et distinctio molestias facere doloremque ab, a eum tempore eveniet. Laborum laboriosam dolorum, tenetur maxime illo esse dignissimos facere. </p>
            </Typography>
            
        
        </Grid>
        
      </Grid>
    </Container>
    </>
    );
};

export default ExceptionalSection;