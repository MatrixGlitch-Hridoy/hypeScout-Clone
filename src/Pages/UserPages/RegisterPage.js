import { Box, Button, Container, Divider, Grid, Paper, Radio, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Header/Header';
import { Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
    button: {
      color: "white",
      textAlign:'center',
      width:'100%',
      backgroundColor:'black'
    },
  }));
const RegisterPage = () => {
    const classes=useStyles();
    return (
        <>
        <Header/>
        <Container container>
            <Grid container justifyContent="center" spacing={5}>
                <Grid item md={5}>
                    <img src="https://business.hypescout.co/static/media/register_img.f4c08a57.png" style={{width:'100%'}}/>
                </Grid>
                <Grid item md={7}>
                    <Box><Typography variant="h5" style={{fontWeight:900}}>Create and Advertiser Account</Typography></Box>
                    <Divider/>
                    <Box border={1} sx={{my:4}} borderRadius="borderRadius">
                        <Box bgcolor="black" color="white" style={{padding:'.8rem 1.5rem'}}><Typography variant="h5" style={{fontWeight:900}}>Personal Information</Typography></Box>
                        <Box sx={{p:3}}>
                            <TextField
                            id="outlined-full-width"
                            placeholder="Contact Person's Name"
                            fullWidth
                            variant="outlined"
                            
                            />
                            <TextField
                            id="outlined-full-width"
                            placeholder="Email. ex:john@gmail.com"
                            fullWidth
                            variant="outlined"
                            style={{margin:'1rem 0'}}
                            />
                            <TextField
                            id="outlined-full-width"
                            placeholder="Phone no. ex:01700000000"
                            fullWidth
                            variant="outlined"

                            />
                        </Box>
                    </Box>
                    <Box border={1} sx={{my:4}} borderRadius="borderRadius">
                        <Box bgcolor="black" color="white" style={{padding:'.8rem 1.5rem'}}><Typography variant="h5" style={{fontWeight:900}}>Company Information</Typography></Box>
                        <Box sx={{p:3}}>
                            <TextField
                            id="outlined-full-width"
                            placeholder="Company. ex:hypescout.co"
                            fullWidth
                            variant="outlined"
                            style={{marginBottom:'1rem'}}
                            />
                            <Typography>I Represent,</Typography>
                            <Divider/>
                            <Box sx={{my:2}}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Paper>
                                        <Grid container  alignItems='center' justifyContent='center'>
                                            <Grid item xs={2}>
                                                <Radio
                                                    value="paid"
                                                    color="default"
                                                    name="paid"
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography style={{fontWeight:'bold'}}>A Brand</Typography>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper>
                                        <Grid container  alignItems='center' justifyContent='center'>
                                                <Grid item xs={2}>
                                                    <Radio
                                                        value="paid"
                                                        color="default"
                                                        name="paid"
                                                    />
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <Typography  style={{fontWeight:'bold'}}>An Agency</Typography>
                                                </Grid>
                                            </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                            </Box>
                            <TextField
                            id="outlined-full-width"
                            placeholder="Website. ex:https://hypescout.co (optional)"
                            fullWidth
                            variant="outlined"
                            
                            />
                            <TextField
                            id="outlined-full-width"
                            placeholder="Social Link, ex:instagram.com/hypescout"
                            fullWidth
                            variant="outlined"
                            style={{margin:'1rem 0'}}
                            />
                            <TextField
                            id="outlined-full-width"
                            placeholder="City"
                            fullWidth
                            variant="outlined"

                            />
                        </Box>
                    </Box>
                    <Box border={1} sx={{my:4}} borderRadius="borderRadius">
                        <Box bgcolor="black" color="white" style={{padding:'.8rem 1.5rem'}}><Typography variant="h5" style={{fontWeight:900}}>Security</Typography></Box>
                        <Box sx={{p:3}}>
                            <TextField
                            id="outlined-full-width"
                            placeholder="Password"
                            fullWidth
                            variant="outlined"
                            style={{margin:'1rem 0'}}
                            />
                            <TextField
                            id="outlined-full-width"
                            placeholder="Confirm Password"
                            fullWidth
                            variant="outlined"

                            />
                        </Box>
                    </Box>
                    <Typography style={{fontSize:'13px',textAlign:'center',margin:'1rem 0'}}>By signing up you agree to our Terms of Use and have read and understood our Privacy Policy.</Typography>
                    <Button className={classes.button}>Agree & Sign Up</Button>
                    <Typography style={{marginTop:'1rem'}}>Already an advertiser?<Link to="/login"> Login</Link></Typography>
                </Grid>
            </Grid>
        </Container>
        <Footer/>
        </>
    );
};

export default RegisterPage;