import { Box, Button, Container, Grid, TextField, Typography } from '@material-ui/core';
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
const LoginPage = () => {
    const classes = useStyles();
    return (
        <>
        <Header/>
        <Container container>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Box><Typography variant="h4">Welcome Back</Typography></Box>
                    <Box><Typography>Login to start creating campaigns</Typography></Box>
                    <Box sx={{mt:3}}>
                    <TextField
                        id="outlined-full-width"
                        placeholder="Email or phone no."
                        fullWidth
                        variant="outlined"

                    />
                    </Box>
                    <Box sx={{mt:3}}>
                    <TextField
                        id="outlined-full-width"
                        placeholder="Password"
                        fullWidth
                        variant="outlined"

                    />
                    </Box>
                    <Typography style={{fontSize:'13px',textAlign:'center',margin:'1rem 0'}}>By logging in you agree to our Terms of Use and have read and understood our Privacy Policy.</Typography>
                    <Button className={classes.button}>Agree & Login</Button>
                    <Grid container style={{marginTop:'1rem'}}>
                        <Grid item xs={12} md={6}>
                            Don't have an account? <Link to="/register">Sign Up</Link>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            Forgot Password?
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
        </Container>
        <Footer/>
        </>
    );
};

export default LoginPage;