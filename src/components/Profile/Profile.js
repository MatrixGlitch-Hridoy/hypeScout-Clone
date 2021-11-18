import React from 'react';
import { Avatar, Box, Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PeopleIcon from '@material-ui/icons/People';
import Taka from '../../images/taka.png';
const useStyles = makeStyles((theme) => ({
    avatar:{
        width:'30%',
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
        width:'100%'
    },
    typography:{
        lineHeight:'2rem',
        color:'#939aa3'
    }
  }));
const Profile = () => {
    const classes = useStyles();
    const handleClick = (value) => {

    }
    return (
        <Container container>
            <Grid container>
                <Grid item md={4}>
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
                        <Typography><Box fontWeight={900} sx={{my:2}} style={{backgroundColor:'#f3f4fb',padding:'10px 15px',width:'75%'}}>b57ff6fa-99e9-4bf2-81fc-9c21138f311a</Box></Typography>
                    </Box>
                </Grid>
                <Grid item md={8}>
                    <Grid container className={classes.flex} spacing={2} >
                        <Grid item md={4} >
                            <Button onClick={()=>handleClick('statistics')} className={classes.button}>Statistics</Button>
                        </Grid>
                        <Grid item md={4} >
                            <Button onClick={()=>handleClick('payment')} className={classes.button}>Payment</Button>
                        </Grid>
                        <Grid item md={4} >
                            <Button onClick={()=>handleClick('setting')} className={classes.button}>Setting</Button>
                        </Grid>
                    </Grid>
                    <Typography><Box fontWeight={900} fontSize={25} sx={{my:2}}>Statistics</Box></Typography>
                    <Grid container spacing={3} >
                        <Grid item md={6} >
                            <Paper elevation={3} className={classes.profileCard}>
                                <Box><FlashOnIcon style={{fontSize:'2rem'}}/></Box>
                                <Typography variant="h4">
                                    <Box fontWeight={900} sx={{my:1}} fontSize={45}>1</Box>
                                </Typography>
                                <Typography variant="h5">
                                    <Box fontWeight={900}>Campaigns</Box>
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={6}>
                            <Paper elevation={3} className={classes.profileCard}>
                            <Box><PeopleIcon style={{fontSize:'2rem'}}/></Box>
                                <Typography variant="h4">
                                    <Box fontWeight={900} sx={{my:1}} fontSize={45}>0</Box>
                                </Typography>
                                <Typography variant="h5">
                                    <Box fontWeight={900}>Hired</Box>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item md={12}>
                        <Paper elevation={3} className={classes.profileCard} style={{marginTop:'1.5rem'}}>
                                <Box><Avatar src={Taka} style={{width:'5%'}}/></Box>
                                <Typography variant="h4">
                                    <Box fontWeight={900} sx={{my:1}} fontSize={45}>0</Box>
                                </Typography>
                                <Typography variant="h5">
                                    <Box fontWeight={900}>BDT Spent</Box>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Profile;