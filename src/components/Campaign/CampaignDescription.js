import { Box, Chip, Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    divider:{
        [theme.breakpoints.up('md')]: {
            display:'none',
          },
        
        
    }
  }));
const CampaignDescription = (props) => {
    const classes = useStyles();
    return (
        <Container container>
            <Box><Typography variant="h4" style={{fontWeight:900}}>Matrix wants to promote their campaign ""</Typography></Box>
            <Box sx={{my:3}}>
                <Alert severity="error" style={{border:'1px solid red'}}>
                    <Typography style={{fontWeight:900}}>Your campaign was declined</Typography>
                    <Typography>Possible Reasons: Description was not appropriate. Please contact support if you would like further clarifications</Typography>
                </Alert>
            </Box>
            <Box bgcolor="#efefef" sx={{p:3}}>
                <Paper style={{padding:'2rem 0'}}>
                    <Grid container>
                    <Grid item xs={12} md={3}>
                        <Box sx={{textAlign:'center'}}>
                            <Typography>Last date of participation</Typography>
                            <Typography>November 30th 2021</Typography>
                        </Box>
                        <Divider variant="middle" orientation="horizontal" className={classes.divider} style={{margin:'1rem 0'}}/>
                    </Grid>
                    <Divider orientation="vertical" flexItem style={{display:{md:'none'}}}/>
                    
                    <Grid item xs={12} md={3}>
                        <Box sx={{textAlign:'center'}}>
                            <Typography>Last date of participation</Typography>
                            <Typography>November 30th 2021</Typography>
                        </Box>
                        <Divider variant="middle" orientation="horizontal" className={classes.divider} style={{margin:'1rem 0'}}/>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={3}>
                        <Box sx={{textAlign:'center'}}>
                            <Typography>Campaign Posted At</Typography>
                            <Typography>November 22nd 2021</Typography>
                        </Box>
                        <Divider variant="middle" orientation="horizontal" className={classes.divider} style={{margin:'1rem 0'}}/>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={2}>
                        <Box sx={{textAlign:'center'}}>
                            <Typography>Required Influencer</Typography>
                            <Typography>2</Typography>
                        </Box>
                        <Divider variant="middle" orientation="horizontal" className={classes.divider} style={{margin:'1rem 0'}}/>
                    </Grid>
                </Grid>

                <Grid container style={{marginTop:'2rem'}}>
                    <Grid item xs={12} md={3}>
                        <Box sx={{textAlign:'center'}}>
                            <Typography>Target Industries</Typography>
                            <Box className={classes.root}>
                                <Chip label="Art & Design" />
                                <Chip label="Bibliophile" />
                                <Chip label="Cooking" />
                                <Chip label="Education" />
                            </Box>
                        </Box>
                        <Divider variant="middle" orientation="horizontal" className={classes.divider} style={{margin:'1rem 0'}}/>
                    </Grid>
                    <Divider orientation="vertical" flexItem/>
                    <Grid item xs={12} md={3}>
                        <Box sx={{textAlign:'center'}}>
                            <Typography>Target Cities</Typography>
                            <Box className={classes.root}>
                                <Chip label="Chattogram" />
                                <Chip label="Mymensingh" />
                                <Chip label="Rangpur" />
                            </Box>
                        </Box>
                        <Divider variant="middle" orientation="horizontal" className={classes.divider} style={{margin:'1rem 0'}}/>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={3}>
                    <Box sx={{textAlign:'center'}}>
                            <Typography>This Campaign Requires</Typography>
                            <Typography>Both Male and Female</Typography>
                        </Box>
                        <Divider variant="middle" orientation="horizontal" className={classes.divider} style={{margin:'1rem 0'}}/>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={2}>
                        <Box sx={{textAlign:'center'}}>
                            <Typography>Content Provider</Typography>
                            <Typography>Influencer</Typography>
                        </Box>
                        <Divider variant="middle"  style={{margin:'1rem 0'}} className={classes.divider}/>
                    </Grid>
                </Grid>
                <Grid container style={{marginTop:'2rem'}}>
                    <Grid item xs={12}>
                        <Box component="div" display="inline" style={{border:'1px solid black'}}>
                            Combined Followers Req.850 - 1000
                        </Box>
                    </Grid>
                </Grid>
                </Paper>
                <Paper style={{margin:'2rem 0',padding:'1rem'}}>
                    <Grid container>
                        <Grid xs={12}>
                            <Typography variant="h5">Description</Typography>
                            <Typography>something</Typography>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper style={{padding:'1rem'}}>
                    <Grid container>
                        <Grid xs={12}>
                            <Typography variant="h5">Caption Reference</Typography>
                            <Typography>something</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
};

export default CampaignDescription;