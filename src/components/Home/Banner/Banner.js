import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
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
        padding:10,
        fontSize:20,
        textTransform:'lowercase'
    }
  }));
const Banner = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box className={classes.container} borderRadius="borderRadius">
                <Grid container className={classes.flex}>
                <Grid item xs={12} md={10}>
                    <Typography variant="h4">
                        <Box fontWeight={900}>My Campaigns</Box> 
                    </Typography>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button variant="contained" color="primary" className={classes.button}>Create Campaign</Button>
                </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;