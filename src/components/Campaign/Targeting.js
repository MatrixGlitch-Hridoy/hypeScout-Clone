import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
  } from "@material-ui/core";
  import Autocomplete from '@material-ui/lab/Autocomplete';
  import { makeStyles } from "@material-ui/core/styles";
  import React, { useState } from "react";
  import { useHistory} from "react-router-dom";
  import clsx from 'clsx';
  
  import { useForm } from "react-hook-form";
  const useStyles = makeStyles((theme) => ({
    display:{
      display:'none'
    },
    link: {
      "& *": {
        cursor: "pointer",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          padding: "1rem",
        },
      },
    },
    button: {
      backgroundColor: "black",
      color: "white",
    },
  }));
const Targeting = () => {
    const classes = useStyles();
  const history = useHistory();
  //form hook 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    // let test={
    //   platform: data.platform,
    //   AdditionalPlatform: data.AdditionalPlatform,
    //   promotionType: data.promotionType,
    //   promotionName:data.promotionName,
    //   place:{
    //       division:data.division,
    //       address:data.address
    //   },
    //   contentOwner:contentOption,
    //   contentOwnerImage:data.contentOwnerImage,
    //   monetaryValue:data.monetaryValue,
      
    // }
    
    console.log('submit test data',test);
    history.push('/new/content');
  };
 
  const [count, setCount] = useState(1);

  const topCity = [
    { city:'Dhaka' },
    { city:'Chattogram' },
    { city:'Mymensingh' },
    { city:'Rangpur' },
    { city:'Barisal' },
    { city:'Khulna' },
    { city:'Rajshahi' },
    { city:'Sylhet' },
  ];
  const industries=[
    {industry:'Art & Design'},
    {industry:'Bibliophile'},
    {industry:'Cooking'},
    {industry:'Education'},
    {industry:'Animals & Pets'},
    {industry:'Architecture'},
    {industry:'Beauty & Makeup'},
    {industry:'Cars & Motorcycles'},
    {industry:'DIY & Crafts'},
    {industry:'Entertainment'},
    {industry:'Fashion & Lifestyle'},
    {industry:'Food & Restaurants'},
    {industry:'Game & Sports'},
    {industry:'Health & Fitness'},
    {industry:'Photography'},
    {industry:'Streaming'},
    {industry:'Technology'},
    {industry:'Travel'},

  ];
  const totalRange=[
      {range:'1k-5k'},
      {range:'5k-10k'},
      {range:'10k-20k'},
      {range:'20k-30k'},
      {range:'30k-50k'},
      {range:'50k-100k'},
      {range:'100k+'},

  ];
  const [gender, setGender] = useState({
    male: "",
    female: "",
  });
  const [follower,setFollower] = useState({
      cumulative:false,
      platformIndividual:false
  });
    return (
        <Container>
      <Grid container justifyContent="center" style={{ margin: "2rem 0" }}>
        <Grid item xs={12} md={10}>
          <Paper style={{ padding: "2rem" }}>
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container alignItems="center">
                  {count === 1 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6" style={{fontWeight:'900'}}>Where are your audience?</Typography>
                        <Typography style={{fontSize:'13px'}}>
                            Select your target cities
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                      <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={topCity}
                            getOptionLabel={(option) => option.city}
                            filterSelectedOptions
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                placeholder="select cities"
                            />
                            )}
                        />
                      </Grid>
                    </>
                  )}
                  {count === 2 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6" style={{fontWeight:'900'}}>
                            Target Industries
                        </Typography>
                        <Typography style={{fontSize:'13px'}}>
                            Select your target industries
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                      <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={industries}
                            getOptionLabel={(option) => option.industry}
                            filterSelectedOptions
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="outlined"
                                placeholder="select industries"
                            />
                            )}
                        />
                      </Grid>
                    </>
                  )}
                  {count === 3 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6" style={{fontWeight:'900'}}>Influencer Gender</Typography>
                        <Typography style={{fontSize:'13px'}}>Select influencer gender (you can select both)</Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                      <Box sx={{ my: 2 }}>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setGender(
                                  gender.male === ""
                                    ? { ...gender, male: "male" }
                                    : { ...gender, male: "" }
                                )
                              }
                              className={
                                gender.male === "male" &&
                                classes.button
                              }
                            >
                              Male
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setGender(
                                  gender.female === ""
                                    ? { ...gender, female: "female" }
                                    : { ...gender, female: "" }
                                )
                              }
                              className={
                                gender.female === "female" &&
                                classes.button
                              }
                              style={{ marginLeft: "1rem" }}
                            >
                              Female
                            </Button>
                          </Box>
                      </Grid>
                    </>
                  )}
                  {count === 4 && (
                    <>
                      <Grid item xs={12} md={5}>
                        {/* <Typography variant="h6" style={{fontWeight:'900'}}>"{form.promotionType!=='' ? form.promotionType : 'Campaign'}" Name</Typography> */}
                        <Typography variant="h6" style={{fontWeight:'900'}}>Required No. Influencers</Typography> 
                        <Typography style={{fontSize:'13px'}}>
                            Enter the number of influencers you require
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField
                          id="outlined-full-width"
                          placeholder="write here..."
                          fullWidth
                          variant="outlined"
                          style={{marginTop:"1rem"}}
                        />
                      </Grid>
                    </>
                  )}
                  {count === 5 && (
                    <>
                      <>
                        <Grid item xs={12} md={5}>
                          <Typography variant="h6" style={{fontWeight:'900'}}>
                            Influencer Follower Range Type
                          </Typography>
                          <Typography style={{fontSize:'13px'}}>
                            Select follower range type of influencers
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box sx={{my:2}}>
                            <Button
                              variant="contained"
                              onClick={() => setFollower({...follower,cumulative:true,platformIndividual:false})}
                              className={follower.cumulative && classes.button}
                            >
                              Cumulative
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() => setFollower({...follower,platformIndividual:true,cumulative:false})}
                              className={follower.platformIndividual && classes.button}
                              style={{marginLeft:'1rem'}}
                            >
                              Platform Individual
                            </Button>
                          </Box>
                          {follower.cumulative && 
                          <Box sx={{my:2}}>
                            <Typography style={{fontSize:'13px'}}>How many combined followers do influencers need to have?</Typography>
                            <TextField
                            id="outlined-full-width"
                            placeholder="Enter the cumulative followers amount here..."
                            fullWidth
                            variant="outlined"
                            />
                          </Box>}
                          {
                              follower.platformIndividual && 
                              <Box sx={{my:2}}>
                                  <Grid container alignItems="center" style={{marginTop:'1rem'}}>
                                      <Grid item md={3}>
                                          facebook
                                      </Grid>
                                      <Grid item md={9}>
                                      <Autocomplete
                                        multiple
                                        id="tags-outlined"
                                        options={totalRange}
                                        getOptionLabel={(option) => option.range}
                                        filterSelectedOptions
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            placeholder="select range"
                                        />
                                        )}
                                    />
                                      </Grid>
                                  </Grid>
                                  <Grid container alignItems="center" style={{marginTop:'1rem'}}>
                                      <Grid item md={3}>
                                          instagram
                                      </Grid>
                                      <Grid item md={9}>
                                      <Autocomplete
                                        multiple
                                        id="tags-outlined"
                                        options={totalRange}
                                        getOptionLabel={(option) => option.range}
                                        filterSelectedOptions
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            placeholder="select range"
                                        />
                                        )}
                                    />
                                      </Grid>
                                  </Grid>
                                  <Grid container alignItems="center" style={{marginTop:'1rem'}}>
                                      <Grid item md={3}>
                                          youtube
                                      </Grid>
                                      <Grid item md={9}>
                                      <Autocomplete
                                        multiple
                                        id="tags-outlined"
                                        options={totalRange}
                                        getOptionLabel={(option) => option.range}
                                        filterSelectedOptions
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            placeholder="select range"
                                        />
                                        )}
                                    />
                                      </Grid>
                                  </Grid>
                                  <Grid container alignItems="center" style={{marginTop:'1rem'}}>
                                      <Grid item md={3}>
                                          tiktok
                                      </Grid>
                                      <Grid item md={9}>
                                      <Autocomplete
                                        multiple
                                        id="tags-outlined"
                                        options={totalRange}
                                        getOptionLabel={(option) => option.range}
                                        filterSelectedOptions
                                        renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            placeholder="select range"
                                        />
                                        )}
                                    />
                                      </Grid>
                                  </Grid>
                              </Box>
                          }
                        </Grid>
                      </>
                    </>
                  )}
                </Grid>
                <Box sx={{mt:3}}>
                {count === 5 && (
                    <Button
                      variant="contained"
                      className="btn btn-primary"
                      type="submit"
                      onClick={()=>history.push('/new/deadline')}
                    >
                      save & continue
                    </Button>
                )}
                </Box>
              </form>
            </Box>
              <Box sx={{mt:3}}>
                <Button
                  variant="contained"
                  className={count===1 ? clsx(classes.display):clsx(classes.button)}
                  type="submit"
                  onClick={() => setCount(count - 1)}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => setCount(count + 1)}
                  className={count===5 ? clsx(classes.display):clsx(classes.button)}
                  style={{marginLeft:'1rem'}}
                >
                  Next
                </Button>
              </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container> 
    );
};

export default Targeting;