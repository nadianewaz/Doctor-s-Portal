import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Button, Container, Typography } from '@mui/material';
import treatment from '../../../images/treatment.png';


const ExceptionalSection = () => {
    return (
        <>
      <Container sx={{ flexGrow: 1 , mt: "100px"}}> 
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
        <img style={{width: '100%', height: '100%'}} src={treatment} alt="" />
        </Grid>
        <Grid item xs={12} md={7}>
         <Box> 
          <Typography variant="h4" component="div" sx={{textTransform: "capitalize", fontWeight: "500", mx: 6}}>
            <h2> exceptional dental care, on your terms </h2>
            </Typography>

            <Typography variant="body2" sx={{ color: 'gray', mt: 2, fontSize: "16px", lineHeight: "32px", mx: 6}}>
                <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus, vel assumenda, excepturi voluptatibus a autem iure id doloremque quae, ullam iste sed. Accusantium vero corrupti eum, natus alias nostrum reiciendis ipsum iste voluptas nihil quae illum molestiae nesciunt, hic saepe? Quas placeat magni laborum deleniti quos corrupti incidunt, sint aliquid necessitatibus exercitationem totam iusto ex modi nam dolor illo! </p>
            </Typography>
            </Box>

            <Button variant='contained' sx={{ backgroundColor: '#18D3B6', mt: 8, textTransform: 'capitalize', p: '10px 35px',  mx: 6}} >learn more  </Button>
          </Grid>
        
      </Grid>
    </Container>
    </>
    );
};

export default ExceptionalSection;