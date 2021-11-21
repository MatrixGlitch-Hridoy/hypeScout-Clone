import React from 'react';
import { Avatar, Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import PeopleIcon from '@material-ui/icons/People';
import Taka from '../../images/taka.png';

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
        fontWeight:900
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
const Statistics = () => {
    const classes = useStyles();
    return (
        <>
             <Typography><Box fontWeight={900} fontSize={25} sx={{my:2}}>Statistics</Box></Typography>
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6} >
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
                        <Grid item xs={12} md={6}>
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
                        <Grid item xs={12} md={12}>
                        <Paper elevation={3} className={classes.profileCard} style={{marginTop:'1.5rem'}}>
                                <Box><Avatar src={Taka} className={classes.iconAvatar}/></Box>
                                <Typography variant="h4">
                                    <Box fontWeight={900} sx={{my:1}} fontSize={45}>0</Box>
                                </Typography>
                                <Typography variant="h5">
                                    <Box fontWeight={900}>BDT Spent</Box>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
        </>
    );
};

export default Statistics;