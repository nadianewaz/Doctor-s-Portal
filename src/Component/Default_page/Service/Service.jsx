import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Service(props) {
    const {name, description, img} = props.service; 
  return (
    <>
    <Grid item xs={2} sm={4} md={4}>

        <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0}}>

        <CardMedia
        component="img"
        style={{ width: 'auto', height:'80px', margin:'0 auto'}}
        image={img}
        title="green iguana"
      />
        <CardContent sx={{ textAlign: 'center'}}>
            <Typography variant="h5" component="div" >
                {name}
                </Typography>
                
                <Typography variant="body2" sx={{ color: 'gray', mt: 2, fontSize: 16}}>
                    {description}
            </Typography>
        </CardContent>
        </Card>

    </Grid>
    </>
  )
}

export default Service