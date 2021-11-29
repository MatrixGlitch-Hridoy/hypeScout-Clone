import { Box, Button, Container, Grid, ListItem, makeStyles, Paper, Radio, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const useStyles = makeStyles((theme)=>({
    typography:{
        [theme.breakpoints.down('sm')]: {
            fontSize:'1.5rem'
        },
    },
    paid:{
        border:'1px solid black',
        borderRadius:'.7rem',
        padding:'1rem',
    },
    innerGrid:{
        alignItems:'center'
    },
    button:{
        backgroundColor:"black",
    },
    campaignDescription:{
        marginTop:'2rem',
    }
}));
const CampaignOption = () => {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    console.log(selectedValue);
    return (
        <>
        <Container container>
            <Box sx={{my:3}}>
                <Typography variant="h4" style={{textAlign:'center'}} className={classes.typography}>What type of campaign do you want to run?</Typography>
            </Box>
            <Grid container spacing={3} alignItems='center' justifyContent='center'>
                <Grid item xs={12} md={4} >
                    <Paper className={classes.paid}>
                    <Grid container  alignItems='center' justifyContent='center'>
                        <Grid item xs={2}>
                            <img src="https://business.hypescout.co/static/media/paid.ebaf7306.svg" style={{width:'75%'}}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6" style={{fontWeight:'bold'}}>Paid Promotion</Typography>
                            <Typography style={{fontSize:'1rem'}}>Create paid collaboration with influencers</Typography>
                        
                        </Grid>
                        <Grid item xs={1}>
                        <Radio
                            checked={selectedValue === 'paid'}
                            onChange={handleChange}
                            value="paid"
                            color="default"
                            name="paid"
                        />
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                <Paper className={classes.paid}>
                <Grid container alignItems='center' justifyContent='center'>
                        <Grid item xs={2}>
                            <img src="https://business.hypescout.co/static/media/gift-box.7b860d0f.svg" style={{width:'75%'}}/>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="h6" style={{fontWeight:'bold'}}>Free Giveaway</Typography>
                            <Typography style={{fontSize:'1rem'}}>Run a free promotional giveaway campaign</Typography>
                        
                        </Grid>
                        <Grid item xs={1}>
                        <Radio
                            checked={selectedValue === 'free'}
                            onChange={handleChange}
                            value="free"
                            color="default"
                            name="free"
                        />
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>

            {selectedValue && <>
                <Grid container justifyContent='center' style={{marginTop:'2rem'}}>
                <Grid item xs={12} md={8} style={{backgroundColor:'#f7f7f8',padding:'1rem',borderRadius:'10px'}}>
                    {
                        selectedValue==='paid' ?  
                        <Box>
                            <Typography variant="h5">For Paid Promotions</Typography>
                            <ListItem>You will have to pay the influencer based on our standard pricing model and also bear the product/service cost</ListItem>
                            <ListItem>Influencers will endorse your product/brand/campaign in their Instagram Post, Instagram Story, or Both (based on your budget)</ListItem>
                            <ListItem>You can target the influencers by their industry, follower range, gender, age, location, etc.</ListItem>
                        </Box> :
                        <Box>
                            <Typography variant="h5">For Free Giveaways</Typography>
                            <ListItem>You won't have to pay the influencers but will have to bear the cost of the product or service.</ListItem>
                            <ListItem>Influencers will give a shoutout on their Instagram Stories only</ListItem>
                            <ListItem>YAnyone having more than 1000 followers on Instagram is eligible to participate in your campaign. But you can always choose who you want to work with after the influencers request to participate in your campaign.</ListItem>
                        </Box>
                    }
                </Grid>
                
            </Grid>
            <Box sx={{my:3}} style={{textAlign:'center'}}>
                <Link to="new/general" style={{textDecoration:'none'}}>
        <Button variant="contained" color="primary" className={classes.button} >
          Next
        </Button>
        </Link>
        </Box>
            </>
            
            }
        </Container>
        </>
    );
};

export default CampaignOption;