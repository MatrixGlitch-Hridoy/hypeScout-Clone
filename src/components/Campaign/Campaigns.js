import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import CampaignOption from './CampaignOption';
import GeneralForm from './GeneralForm';
const Campaigns = () => {
    let {path,url} = useRouteMatch();
    return (
        <Container container>
            <Grid container>
                <Grid item xs={12}>
                {/* Nested Route Here */}
                <Switch>
                       <Route exact path={path}>
                            <CampaignOption/>
                       </Route>
                       <Route exact path={`${path}/general`}>
                            <GeneralForm/>
                       </Route>
                       
                   </Switch>
                   </Grid>
            </Grid>
        </Container>
    );
};

export default Campaigns;