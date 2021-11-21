import React, { useState } from 'react';
import { Avatar, Box, Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PeopleIcon from '@material-ui/icons/People';
import Taka from '../../images/taka.png';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Statistics from './Statistics';
import PaymentList from '../PaymentList/PaymentList';

const useStyles = makeStyles((theme) => ({
    avatar:{
        width:'30%',
        [theme.breakpoints.down('sm')]: {
            width:'40%',
        },
    },
    flex:{
        // justifyContent:'flex-start',
        marginTop:20,
        textAlign:'center'
    },
    profileCard:{
        backgroundColor:'#efefef',
        borderRadius:'15px',
        padding:'1rem'
    },
    button:{
        backgroundColor:'#e0e2f5',
        borderRadius:'5px',
        width:'100%',
        fontWeight:900,
        textDecoration:'none'
    },
    typography:{
        lineHeight:'2rem',
        color:'#939aa3'
    },
    code:{
        backgroundColor:'#f3f4fb',
        padding:'10px 15px',
        width:'75%',
        [theme.breakpoints.down('sm')]: {
            width:'90%',
            fontSize:15
        },
    },
    iconAvatar:{
        width:'5%',
        [theme.breakpoints.down('sm')]: {
            width:'15%',
        },
    }
  }));
const Profile = () => {
    const classes = useStyles();
    let {path,url} = useRouteMatch();
    return (
        <Container container>
            <Grid container>
                <Grid item xs ={12} md={4}>
                    <Box className={classes.avatar} sx={{mt:3}}>
                        <Avatar src="/broken-image.jpg" style={{backgroundSize:'cover',height:'7rem',width:'100%'}}/>
                    </Box>
                    <Box sx={{my:2}} >
                        <Typography variant="h5">Username</Typography>
                        <Typography>Rizvi Khalid Hridoy</Typography>
                    </Box>
                    <Box sx={{my:2}}>
                        <Typography className={classes.typography}>Dhaka, Bangladesh</Typography>
                        <Typography className={classes.typography}>Joined On: November 14th,2021</Typography>
                    </Box>
                    <Box sx={{my:2}}>
                        <Typography className={classes.typography}>Company Type:<span style={{fontWeight:'bold'}}>Business</span></Typography>
                        <Typography className={classes.typography}>Contact Number:<span style={{fontWeight:'bold'}}>01777777778</span></Typography>
                        <Typography className={classes.typography}>Email:<span style={{fontWeight:'bold'}}>rkhridoy68@gmail.com</span></Typography>
                        <Typography className={classes.typography}>Social Link:<span style={{fontWeight:'bold'}}>www.facebook.com</span></Typography>
                        <Typography className={classes.typography}>Website:Not-Set</Typography>
                    </Box>
                    <Box>
                        <Typography><Box fontWeight={900} fontSize={20}>Your Unique Code</Box></Typography>
                        <Typography><Box fontWeight={900} sx={{my:2}} className={classes.code}>b57ff6fa-99e9-4bf2-81fc-9c21138f311a</Box></Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Grid container className={classes.flex} spacing={2} >
                        <Grid item xs={12} md={4} >
                            <Link style={{textDecoration:'none'}} to={`${url}`}>
                                <Button className={classes.button}>Statistics</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Link style={{textDecoration:'none'}} to={`${url}/payment`}>
                                <Button className={classes.button}>Payment</Button>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={4} >
                            <Link style={{textDecoration:'none'}} to="/setting/personal">
                                <Button className={classes.button}>Setting</Button>
                            </Link>
                        </Grid>
                    </Grid>
                   {/* Nested Route Here */}
                   <Switch>
                       <Route exact path={path}>
                            <Statistics/>
                       </Route>
                       <Route exact path={`${path}/payment`}>
                            <PaymentList/>
                       </Route>
                       
                   </Switch>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;