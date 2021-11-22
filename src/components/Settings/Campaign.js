import { Box, Button, FormControl, FormControlLabel, InputLabel, MenuItem, Select, Switch, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    
    button:{
      backgroundColor:"black"
    }
}));
const Campaign = () => {
    const classes = useStyles();
    const [influenceState, setInfluenceState] = useState({
        checkedA: true,
        checkedB: true,
      });
      const handleInfluenceChange = (event) => {
        setInfluenceState({ ...influenceState, [event.target.name]: event.target.checked });
      };
      const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return (
        <div>
            <h1>Campaign Settings</h1>
            <Box style={{border:'1px solid black',padding:'1rem',backgroundColor:'#f8f8f9'}} sx={{my:2}}>
                <Typography variant="h6">Enable influencer exclusivity for your campaigns</Typography>
                <Typography style={{fontSize:'1rem'}}>Influencers who sign up for your campaigns will not be able to work with your competitors for the duration of your choice.</Typography>
            </Box>
            <Box sx={{my:3}}>
        <FormControlLabel
          control={
            <Switch
              checked={influenceState.checkedA}
              onChange={handleInfluenceChange}
              name="checkedA"
            />
          }
          label="Influencer Exclusivity"
        />
        </Box>
        <Box>
        {
            influenceState.checkedA===true && 
            <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Add Competitors</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={age}
              onChange={handleChange}
              label="Add Competitors"
              placeholder="search here.."
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
        }
      </Box>
      <Box sx={{my:3}}>
            <Button variant="contained" color="primary" className={classes.button}>
            Save
            </Button>
        </Box>
        </div>
    );
};

export default Campaign;