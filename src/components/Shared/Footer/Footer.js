import React from 'react';
import { Box, Container, Divider, Grid, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:'10rem'
    },
    listText:{
        color:'#9f9fb7'
    },
    mainGrid:{
        marginTop:'4rem',
        alignItems:'flex-start'
    },
    socialIcon:{
        marginTop:'1rem'
    }
  }));
const Footer = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Divider/>
            <Grid container className={classes.mainGrid}>
                <Grid item md={3}>
                    <Typography style={{fontSize:'2rem',fontWeight:'bold'}}>hype scout</Typography>
                </Grid>
                <Grid item md={2}>
                    <Typography><Box fontWeight={900}>Company</Box></Typography>
                    <Box className={classes.listText}>
                        <List>Terms</List>
                        <List>Privacy</List>
                        <List>Contact Us</List>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Typography><Box fontWeight={900}>Resources</Box></Typography>
                    <Box className={classes.listText}>
                        <List>Blogs</List>
                        <List>Case Study</List>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Typography><Box fontWeight={900}>Advertiser</Box></Typography>
                    <Box className={classes.listText}>
                        <List>Join as Advertiser</List>
                        <List>HypeLink</List>
                    </Box>
                </Grid>
                <Grid item md={3}>
                    <Typography><Box fontWeight={900}>Connect</Box></Typography>
                    <Grid container>
                        <Box className={classes.socialIcon}>
                            <InstagramIcon style={{ fontSize: 30,marginRight:10 }}/>
                            <FacebookIcon style={{ fontSize: 30,marginRight:10 }}/>
                            <TwitterIcon style={{ fontSize: 30,marginRight:10 }}/>
                            <YouTubeIcon style={{ fontSize: 30,marginRight:10 }}/>
                            <LinkedInIcon style={{ fontSize: 30,marginRight:10 }}/>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Footer;