import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
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

const GeneralForm = ({test}) => {
  const classes = useStyles();
  const history = useHistory();
  //form hook 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    let test={
      platform: data.platform,
      AdditionalPlatform: data.AdditionalPlatform,
      promotionType: data.promotionType,
      promotionName:data.promotionName,
      place:{
          division:data.division,
          address:data.address
      },
      contentOwner:contentOption,
      contentOwnerImage:data.contentOwnerImage,
      monetaryValue:data.monetaryValue,
      
    }
    
    // console.log('submit test data',test);
    history.push('/new/content');
  };
  //
  // const [form, setForm] = useState({
  //   platform: "",
  //   AdditionalPlatform: "",
  //   promotionType: "",
  //   promotionName:"",
  //   place:{
  //       division:"",
  //       address:""
  //   },
  //   contentOwner:"",
  //   contentOwnerPlace:{
  //     city:"",
  //     address:""
  //   },
  //   contentOwnerImage:"",
  //   monetaryValue:""
    
  // });
  const [count, setCount] = useState(1);
  const [contentOption, setContentOption] = useState("");
  const [locationOption, setLocationOption] = useState("");
  const [sendOption, setSendOption] = useState("");
  // const updateForm = (e) => {
  //     if(e.target.name==='division'||e.target.name==='address'){
  //       var placechange={
  //           ...form.place,
  //           [e.target.name]: e.target.value,
  //       }
  //       setForm({
  //           ...form,
  //           place: placechange,
  //         })
  //     }else{
  //       setForm({
  //           ...form,         
  //           [e.target.name]: e.target.value,
 
  //         })
  //     }
  //   // setForm({
  //   //     ...form.place,
     
  //   //     [e.target.name]: e.target.value,
      
  //   // });
  // };
  const handlePlaceOption = (value) => {
    setLocationOption(value);
  };
  // console.log('set value',form);
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
                        <Typography variant="h6" style={{fontWeight:'900'}}>Primary Platform</Typography>
                        <Typography style={{fontSize:'13px'}}>
                          Primary platform where you want to run this campaign
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <FormControl variant="outlined" fullWidth style={{marginTop:"1rem"}}>
                          <InputLabel id="demo-simple-select-outlined-label">
                            Select Primary Platform
                          </InputLabel>
                          <Select
                            id="demo-simple-select-outlined"
                            name="platform"
                            label="Select Primary Platform"
                            // onChange={updateForm}
                            {...register("platform")}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={'facebook'}>Facebook</MenuItem>
                            <MenuItem value={'instagram'}>Instagram</MenuItem>
                            <MenuItem value={'youtube'}>YouTube</MenuItem>
                            <MenuItem value={'tiktok'}>TikTok</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </>
                  )}
                  {count === 2 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6" style={{fontWeight:'900'}}>
                          Additional Platforms (Optional)
                        </Typography>
                        <Typography style={{fontSize:'13px'}}>
                          Additional platforms to boost your campaign
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <FormControl variant="outlined" fullWidth style={{marginTop:"1rem"}}>
                          <InputLabel id="demo-simple-select-outlined-label">
                            Select Additional Platform
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Select Additional Platform"
                            name="AdditionalPlatform"
                            // onChange={updateForm}
                            {...register("AdditionalPlatform")}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={'facebook'}>Facebook</MenuItem>
                            <MenuItem value={'instagram'}>Instagram</MenuItem>
                            <MenuItem value={'youtube'}>YouTube</MenuItem>
                            <MenuItem value={'tiktok'}>TikTok</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </>
                  )}
                  {count === 3 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6" style={{fontWeight:'900'}}>Promotion Type</Typography>
                        <Typography style={{fontSize:'13px'}}>What do you wish to promote</Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <FormControl variant="outlined" fullWidth style={{marginTop:"1rem"}}>
                          <InputLabel id="demo-simple-select-outlined-label">
                            Campaign Promotion
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Campaign Promotion"
                            name="promotionType"
                            // onChange={updateForm}
                            {...register("promotionType")}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={'Brand Promotion'}>Brand Promotion</MenuItem>
                            <MenuItem value={'Campaign Promotion'}>Campaign Promotion</MenuItem>
                            <MenuItem value={'Event Promotion'}>Event Promotion</MenuItem>
                            <MenuItem value={'Hotel Promotion'}>Hotel Promotion</MenuItem>
                            <MenuItem value={'Movie Promotion'}>Movie Promotion</MenuItem>
                            <MenuItem value={'Product Promotion'}>Product Promotion</MenuItem>
                            <MenuItem value={'Restaurant Promotion'}>Restaurant Promotion</MenuItem>
                            <MenuItem value={'Service Promotion'}>Service Promotion</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                    </>
                  )}
                  {count === 4 && (
                    <>
                      <Grid item xs={12} md={5}>
                        {/* <Typography variant="h6" style={{fontWeight:'900'}}>"{form.promotionType!=='' ? form.promotionType : 'Campaign'}" Name</Typography> */}
                        <Typography variant="h6" style={{fontWeight:'900'}}>"Campaign" Name</Typography> 
                        <Typography style={{fontSize:'13px'}}>
                          Name of the type you want to promote
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField
                          id="outlined-full-width"
                          label="Campaign Name"
                          placeholder="Enter campaign name"
                          fullWidth
                          variant="outlined"
                          style={{marginTop:"1rem"}}
                          name="promotionName"
                          // onChange={updateForm}
                          {...register("promotionName")}
                        />
                      </Grid>
                    </>
                  )}
                  {count === 5 && (
                    <>
                      <>
                        <Grid item xs={12} md={5}>
                          <Typography variant="h6" style={{fontWeight:'900'}}>
                            Who'll create the content?
                          </Typography>
                          <Typography style={{fontSize:'13px'}}>
                            Choose "Yourself" if you'll provide the content
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box sx={{my:2}}>
                            <Button
                              variant="contained"
                              onClick={() => setContentOption("influencer")}
                              className={contentOption==='influencer' && classes.button}
                              // type="input"
                              // value="influencer"
                              {...register("contentOwner")}
                            >
                              Inlfuencer
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() => setContentOption("yourself")}
                              className={contentOption==='yourself' && classes.button}
                              style={{marginLeft:'1rem'}}
                              // type="input"
                              // value="myself"
                              {...register("contentOwner")}
                            >
                              Yourself
                            </Button>
                          </Box>
                        </Grid>
                      </>
                      {contentOption === "influencer" && (
                        <>
                          <Grid item xs={12} md={5}>
                            <Typography variant="h6" style={{fontWeight:'900'}}>
                              Will have to come to a place?
                            </Typography>
                            <Typography style={{fontSize:'13px'}}>
                              If the influencer has to come to a place for the
                              product/content
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={7}>
                            <Box sx={{mt:'1rem'}}>
                              <Button
                                variant="contained"
                                onClick={() => handlePlaceOption("yes")}
                                className={locationOption && classes.button}
                              >
                                Yes
                              </Button>
                              <Button
                                variant="contained"
                                onClick={() => setLocationOption("")}
                                style={{marginLeft:'1rem'}}
                              >
                                No
                              </Button>
                            </Box>
                            {locationOption === "yes" && (
                              <Box>
                                <FormControl variant="outlined" fullWidth style={{margin:"1rem 0"}}>
                                  <InputLabel id="demo-simple-select-outlined-label">
                                    Campaign Promotion
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="division"
                                    label="Campaign Promotion"
                                    // onChange={updateForm}
                                    {...register("division")}
                                  >
                                    <MenuItem value="">
                                      <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={'Dhaka'}>Dhaka</MenuItem>
                                    <MenuItem value={'Chattogram'}>Chattogram</MenuItem>
                                    <MenuItem value={'Mymensingh'}>Mymensingh</MenuItem>
                                    <MenuItem value={'Rajshahi'}>Rajshahi</MenuItem>
                                    <MenuItem value={'Rangpur'}>Rangpur</MenuItem>
                                    <MenuItem value={'Sylhet'}>Sylhet</MenuItem>
                                    <MenuItem value={'Barishal'}>Barisal</MenuItem>
                                  </Select>
                                </FormControl>
                                <TextField
                                  id="outlined-full-width"
                                  label="Enter Address"
                                  placeholder="Enter address"
                                  fullWidth
                                  variant="outlined"
                                  name="address"
                                  {...register("address")}
                                  // onChange={updateForm}
                                />
                              </Box>
                            )}
                          </Grid>
                        </>
                      )}

                      {contentOption === "yourself" && (
                        <>
                          <Grid item xs={12} md={5}>
                            <Typography variant="h6" style={{fontWeight:'900'}}>Upload Content</Typography>
                            <Typography style={{fontSize:'13px'}}>
                              Upload content for the influencer
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={7}>
                            <Box sx={{mt:"1rem"}}>
                              <Button
                                variant="contained"
                                component="label"
                              >
                                Choose File
                                <input
                                  type="file"
                                  hidden
                                />
                              </Button>
                            </Box>
                          </Grid>
                        </>
                      )}
                    </>
                  )}
                  {count === 6 && (
                    <>
                      <>
                        <Grid item xs={12} md={5}>
                          <Typography variant="h6" style={{fontWeight:'900'}}>
                            Will you be sending a product to the influencer?
                          </Typography>
                          <Typography style={{fontSize:'13px'}}>
                            The monetary value of the product (BDT)
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box sx={{my:"1rem"}}>
                            <Button
                              variant="contained"
                              onClick={() => setSendOption("yes")}
                              className={sendOption && classes.button}
                            >
                              Yes
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() => setSendOption("")}
                              style={{marginLeft:'1rem'}}
                            >
                              No
                            </Button>
                          </Box>
                          {sendOption === "yes" && (
                            <TextField
                              id="outlined-full-width"
                              label="Monetary"
                              placeholder="Enter amount"
                              fullWidth
                              variant="outlined"
                              name="monetaryValue"
                              {...register("monetaryValue")}
                            />
                          )}
                        </Grid>
                      </>
                    </>
                  )}
                </Grid>
                <Box sx={{mt:3}}>
                {count === 6 && (
                    <Button
                      variant="contained"
                      className="btn btn-primary"
                      type="submit"
                      onClick={() => test()}
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
                  className={count===6 ? clsx(classes.display):clsx(classes.button)}
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

export default GeneralForm;
