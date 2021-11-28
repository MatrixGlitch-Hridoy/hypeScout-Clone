import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
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
const Deadline = () => {
    const [value, onChange] = useState(new Date());
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
                        <Typography variant="h6" style={{fontWeight:'900'}}>Campaign Deadline</Typography>
                        <Typography style={{fontSize:'13px'}}>
                            Last date of participation request
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                      <Calendar
                            onChange={onChange}
                            value={value}
                        />
                        <Typography style={{fontWeight:'900', marginTop:'1rem'}}>Campaign will end on, {value.toDateString()}</Typography>
                      </Grid>
                    </>
                  )}
                  {count === 2 && (
                    <>
                      <Grid item xs={12} md={5}>
                        <Typography variant="h6" style={{fontWeight:'900'}}>
                            Campaign Budget
                        </Typography>
                        <Typography style={{fontSize:'13px'}}>
                            Estimated budget of your campaign
                        </Typography>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField
                            id="outlined-full-width"
                            placeholder="Enter campaign budget"
                            fullWidth
                            variant="outlined"
                            style={{marginTop:"1rem"}}
                            />
                      </Grid>
                    </>
                  )}
                  
                </Grid>
                <Box sx={{mt:3}}>
                {count === 2 && (
                    <Button
                      variant="contained"
                      className="btn btn-primary"
                      type="submit"
                    >
                      save & Finish
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
                  className={count===2 ? clsx(classes.display):clsx(classes.button)}
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

export default Deadline;