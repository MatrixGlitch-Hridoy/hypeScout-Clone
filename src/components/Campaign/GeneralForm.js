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
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
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

const GeneralForm = () => {
  const classes = useStyles();
  const [form, setForm] = useState({
    platform: "",
    AdditionalPlatform: "",
    promotionType: "",
    promotionName:"",
    place:{
        division:"abc",
        address:""
    }
    
  });
  const [count, setCount] = useState(1);
  const [contentOption, setContentOption] = useState("");
  const [locationOption, setLocationOption] = useState("");
  const [sendOption, setSendOption] = useState("");
  const updateForm = (e) => {
   
    // (e.target.name==='division'||e.target.name==='address')?(
      
        
    //     setForm({
       
    //     ...form,
     
    //     place: placechange,
        
        
        
    //   })):( setForm({
       
    //     ...form,
       
    //     [e.target.name]: e.target.value,
        
    //   }))

      if(e.target.name==='division'||e.target.name==='address'){
        var placechange={
            ...form.place,
         
            [e.target.name]: e.target.value,
    
        }

        setForm({
       
            ...form,
         
            place: placechange,
            
            
            
          })

      }else{
        setForm({
       
            ...form,
           
            [e.target.name]: e.target.value,
            
          })
      }

    
    
    // setForm({
    //     ...form.place,
     
    //     [e.target.name]: e.target.value,
      
    // });
  };
  const handlePlaceOption = (value) => {
    setLocationOption(value);
  };
  console.log('set value',form);
  return (
    <Container>
      <Grid container justifyContent="center" style={{ margin: "2rem 0" }}>
        <Grid item xs={12} md={10}>
          <Paper style={{ padding: "2rem" }}>
            <Box>
              <form>
                <Grid container alignItems="center">
                  {count === 1 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6">Primary Platform</Typography>
                        <Typography>
                          Primary platform where you want to run this campaign
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel id="demo-simple-select-outlined-label">
                            Select Primary Platform
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Age"
                            name="platform"
                            onChange={updateForm}
    //           value={form.password}
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
                        <Typography variant="h6">
                          Additional Platforms (Optional)
                        </Typography>
                        <Typography>
                          Additional platforms to boost your campaign
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel id="demo-simple-select-outlined-label">
                            City
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Age"
                            name="AdditionalPlatform"
                            onChange={updateForm}
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
                        <Typography variant="h6">Promotion Type</Typography>
                        <Typography>What do you wish to promote</Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel id="demo-simple-select-outlined-label">
                            Campaign Promotion
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Age"
                            name="promotionType"
                            onChange={updateForm}
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
                        <Typography variant="h6">"{form.promotionType!=='' ? form.promotionType : 'Campaign'}" Name</Typography>
                        <Typography>
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
                        />
                      </Grid>
                    </>
                  )}
                  {count === 5 && (
                    <>
                      <>
                        <Grid item xs={12} md={5}>
                          <Typography variant="h6">
                            Who'll create the content?
                          </Typography>
                          <Typography>
                            Choose "Yourself" if you'll provide the content
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Button
                            variant="contained"
                            onClick={() => setContentOption("influencer")}
                          >
                            influencer
                          </Button>
                          <Button
                            variant="contained"
                            onClick={() => setContentOption("yourself")}
                          >
                            Yourself
                          </Button>
                        </Grid>
                      </>
                      {contentOption === "influencer" && (
                        <>
                          <Grid item xs={12} md={5}>
                            <Typography variant="h6">
                              Will have to come to a place?
                            </Typography>
                            <Typography>
                              If the influencer has to come to a place for the
                              product/content
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={7}>
                            <Button
                              variant="contained"
                              onClick={() => handlePlaceOption("yes")}
                            >
                              Yes
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() => setLocationOption("")}
                            >
                              No
                            </Button>
                            {locationOption === "yes" && (
                              <Box>
                                <FormControl variant="outlined" fullWidth>
                                  <InputLabel id="demo-simple-select-outlined-label">
                                    Campaign Promotion
                                  </InputLabel>
                                  <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    name="division"
                                    onChange={updateForm}
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
                                onChange={updateForm}
                                />
                              </Box>
                            )}
                          </Grid>
                        </>
                      )}

                      {contentOption === "yourself" && (
                        <>
                          <Grid item xs={12} md={5}>
                            <Typography variant="h6">Upload Content</Typography>
                            <Typography>
                              Upload content for the influencer
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={7}>
                            upload file
                          </Grid>
                        </>
                      )}
                    </>
                  )}
                  {count === 6 && (
                    <>
                      <>
                        <Grid item xs={12} md={5}>
                          <Typography variant="h6">
                            Will you be sending a product to the influencer?
                          </Typography>
                          <Typography>
                            The monetary value of the product (BDT)
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Button
                            variant="contained"
                            onClick={() => setSendOption("yes")}
                          >
                            Yes
                          </Button>
                          <Button
                            variant="contained"
                            onClick={() => setSendOption("")}
                          >
                            No
                          </Button>
                          {sendOption === "yes" && (
                            <TextField
                              id="outlined-full-width"
                              label="Contact No."
                              placeholder="Enter null name"
                              fullWidth
                              variant="outlined"
                            />
                          )}
                        </Grid>
                      </>
                    </>
                  )}
                </Grid>
                {count === 6 && (
                  <Link to="/new/content">
                    <Button
                      variant="contained"
                      className="btn btn-primary"
                      type="submit"
                    >
                      save & continue
                    </Button>
                  </Link>
                )}
              </form>
            </Box>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
              onClick={() => setCount(count - 1)}
              disabled={count === 1}
            >
              Back
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              type="submit"
              onClick={() => setCount(count + 1)}
              disabled={count === 6}
            >
              Next
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
    
  );
};

export default GeneralForm;
