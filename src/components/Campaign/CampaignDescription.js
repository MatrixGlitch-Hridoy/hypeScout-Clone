import { Box, Button, Chip, Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
  }));
const CampaignDescription = (props) => {
    const classes = useStyles();
    return (
        <Container container>
            <Box><Typography variant="h5">Matrix wants to promote their campaign ""</Typography></Box>
            <Box bgcolor="#efefef" sx={{p:3}}>
                <Paper>
                    <Grid container justifyContent="center">
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Typography>Last date of participation</Typography>
                            <Typography>November 30th 2021</Typography>
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem/>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Typography>Last date of participation</Typography>
                            <Typography>November 30th 2021</Typography>
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={2}>
                            <Typography>Campaign Posted At</Typography>
                            <Typography>November 22nd 2021</Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={2}>
                            <Typography>Required Influencer</Typography>
                            <Typography>2</Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent="center" style={{marginTop:'2rem'}}>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Typography>Last date of participation</Typography>
                            <Typography>November 30th 2021</Typography>
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem/>
                    <Grid item xs={12} md={3}>
                        <Box>
                            <Typography>Last date of participation</Typography>
                            <Typography>November 30th 2021</Typography>
                        </Box>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={2}>
                            <Typography>Campaign Posted At</Typography>
                            <Typography>November 22nd 2021</Typography>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid item xs={12} md={2}>
                            <Typography>Required Influencer</Typography>
                            <Typography>2</Typography>
                    </Grid>
                </Grid>
                </Paper>
            </Box>
        </Container>
    );
};

export default CampaignDescription;