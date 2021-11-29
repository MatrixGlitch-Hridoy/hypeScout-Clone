import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import CampaignOption from './CampaignOption';
import ContentForm from './ContentForm';
import Deadline from './Deadline';
import DescriptionForm from './DescriptionForm';
import GeneralForm from './GeneralForm';
import Targeting from './Targeting';
const useStyles = makeStyles((theme) => ({
    link: {
      '& *': {
        cursor:'pointer',
        textDecoration:'none',
        [theme.breakpoints.down('sm')]: {
            textAlign:'center',
            padding:'1rem',
            
        },
      },
    },
    disableLink:{
        pointerEvents: 'none',
        color:'#939aa3'
    }
  }));
const Campaigns = () => {
    let {path,url} = useRouteMatch();
    const classes = useStyles();
    const [click,setClick] = useState(false);
    const handleClick = () => {
        setClick(true);
    }
    return (
        <>
        <Container>
                <Grid container justifyContent="center">
                        <Grid item xs={12} md={10} >
                            <Paper style={{padding:'2rem 2rem .5rem 2rem'}}>
                            {/* <Box>
                                Paid Campaign
                            </Box> */}
                            <Box style={{marginTop:'2rem'}}>
                                <Grid container  className={classes.link} justifyContent="space-around">
                                    <Grid item xs={12} md={2}>
                                        <Link to={`${url}/general`}>General</Link>
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Link to={`${url}/content`} className={click===false && classes.disableLink}>Content Types</Link>
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Link to={`${url}/description`} className={classes.disableLink}>Description</Link>
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Link to={`${url}/targeting`} className={classes.disableLink}>Targeting</Link>
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                        <Link to={`${url}/deadline`} className={classes.disableLink}>Deadline</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                        </Grid>
                </Grid>
            </Container>
                {/* Nested Route Here */}
                <Switch>
                       <Route exact path={path}>
                            <CampaignOption />
                       </Route>
                       <Route exact path={`${path}/general`} >
                            <GeneralForm test={handleClick}/>
                       </Route>

                        <PrivateRoute exact path={`${path}/content`} click={click}>
                            <ContentForm/>
                        </PrivateRoute>
                       <Route exact path={`${path}/description`}>
                            <DescriptionForm/>
                       </Route>
                       <Route exact path={`${path}/targeting`}>
                            <Targeting/>
                       </Route>
                       <Route exact path={`${path}/deadline`}>
                            <Deadline/>
                       </Route>
                   </Switch>

        </>
    );
};

export default Campaigns;