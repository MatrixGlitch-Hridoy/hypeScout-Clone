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
    TextareaAutosize,
    TextField,
    Typography,
  } from "@material-ui/core";
  import ChipInput from 'material-ui-chip-input';
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
const DescriptionForm = () => {
    const classes = useStyles();
  const history = useHistory();
  //form hook 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    let test={
      campaignDescription: data.campaignDescription,
      captionSample: data.captionSample,
      accountNames: [data.accountNames],
      hashtags:[data.hashtags]
    }
    
    console.log(test);
    // history.push('/new/content');
  };
  const [count, setCount] = useState(1);
  const [tags,setTags] = useState([]);
  const handleTag = (chips) => {
    setTags([...tags,chips])
  }
  const handleDelete = (chip,index) => {
    let a = tags.filter(y=>y!==chip);
    setTags(a)
  }
  console.log(tags)
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
                        <Typography variant="h6" style={{fontWeight:'900'}}>Tell us about your campaign</Typography>
                        <Typography style={{fontSize:'13px'}}>
                            Describe your campaign and provide any additional instructions
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField variant="outlined" placeholder="write description" multiline minRows={8} maxRows={10} fullWidth style={{marginTop:'1rem'}}/>
                        
                      </Grid>
                    </>
                  )}
                  {count === 2 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6" style={{fontWeight:'900'}}>
                            Caption Sample (Optional)
                        </Typography>
                        <Typography style={{fontSize:'13px'}}>
                            Provide a caption reference so that the influencer can do the task properly
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                      <TextField variant="outlined" placeholder="write caption reference" multiline minRows={8} maxRows={10} fullWidth style={{marginTop:'1rem'}}/>
                        
                      </Grid>
                    </>
                  )}
                  {count === 3 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6" style={{fontWeight:'900'}}>Who should influencers tag? (Optional)</Typography>
                        <Typography style={{fontSize:'13px'}}>Write the name of the accounts that'll be tagged with the content (ex: @hypescout)</Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                      <ChipInput
                            fullWidth
                            placeholder='Write account names'
                            // onBlur={(e) => setTags([...tags, e.target.value])}
                            onChange={chips=>handleTag(chips)}
                            onDelete={(chip,index)=>handleDelete(chip,index)}
                            newChipKeys={['Enter']}
                            />
                      </Grid>
                    </>
                  )}
                  {count === 4 && (
                    <>
                    <Grid item xs={12} md={5}>
                      <Typography variant="h6" style={{fontWeight:'900'}}>What hashtags should influencers use? (Optional)</Typography>
                      <Typography style={{fontSize:'13px'}}>Write the name of the hashtags that'll go with the caption</Typography>
                    </Grid>
                    <Grid item xs={12} md={7}>
                    <ChipInput
                          fullWidth
                          placeholder='Write hashtags'
                          
                          />
                    </Grid>
                  </>
                  )}
                </Grid>
                <Box sx={{mt:3}}>
                {count === 4 && (
                    <Button
                      variant="contained"
                      className="btn btn-primary"
                      type="submit"
                      onClick={()=>history.push('/new/targeting')}
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
                  className={count===4 ? clsx(classes.display):clsx(classes.button)}
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

export default DescriptionForm;