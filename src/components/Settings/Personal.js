import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: theme.spacing(2),
    },
  },
      button:{
        backgroundColor:"black"
      }
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
  }));
const Personal = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <h1>Personal</h1>
      <h2>Basic Settings</h2>
      <form className={classes.root}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-full-width"
          label="Email"
          placeholder="Enter your email"
          fullWidth
          variant="outlined"
          
        />
        <TextField
          id="outlined-full-width"
          label="Contact No."
          placeholder="Enter your contact no."
          fullWidth
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Company"
          placeholder="Enter your company name"
          fullWidth
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Website"
          placeholder="Enter your website link"
          fullWidth
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Social Link"
          placeholder="Enter your social link"
          fullWidth
          variant="outlined"
        />
        <Box sx={{my:2}}>
          <Button variant="contained" color="primary" className={classes.button}>
            Save
          </Button>
        </Box>
      </form>

      <h1>Security setting</h1>
      <form className={classes.root}>
        <TextField
          id="outlined-full-width"
          label="Old Password"
          placeholder="old password"
          fullWidth
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="New Password"
          placeholder="new password"
          fullWidth
          variant="outlined"
        />
        <TextField
          id="outlined-full-width"
          label="Re-type Password"
          placeholder="re-type password"
          fullWidth
          variant="outlined"
        />
        <Box sx={{my:2}}>
          <Button variant="contained" color="primary" className={classes.button}>
            Change password
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Personal;
