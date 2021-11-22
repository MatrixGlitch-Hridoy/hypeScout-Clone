import { Box, Button, Container, Grid,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor:'#F7F7F8',
    },
    flex:{
        alignItems:'center',
        justifyContent:'space-between',
        padding:25
    },
    button:{
        backgroundColor:'black',
        color:'white',
        fontWeight:'bold',
        padding:"10 20",
        fontSize:20,
        textTransform:'capitalize',
        [theme.breakpoints.down('sm')]: {
           fontSize:15
          },
    },
    typography:{
        [theme.breakpoints.down('sm')]:{
            fontSize:20
        }
    }
  }));
const Banner = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box className={classes.container} borderRadius="borderRadius">
                <Grid container className={classes.flex} spacing={2}>
                <Grid item xs={6} md={9}>
                    <Typography variant="h4" className={classes.typography}>
                        <Box fontWeight={900}>My Campaigns</Box> 
                    </Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                <Link to="/new" style={{textDecoration:'none'}}>
                    <Button variant="contained" color="primary" className={classes.button}>Create Campaign</Button>
                </Link>
                </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;