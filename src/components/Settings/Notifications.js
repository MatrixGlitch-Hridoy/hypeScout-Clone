import { Box, Button, FormControlLabel, Switch, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    button:{
      backgroundColor:"black"
    }
}));
const Notifications = () => {
  const classes = useStyles();
  const [smsState, setSmsState] = useState({
    checkedA: true,
    checkedB: true,
  });
  const [emailState, setEmailState] = useState({
    checkedC: true,
    checkedD: true,
  });
  const handleSmsChange = (event) => {
    setSmsState({ ...smsState, [event.target.name]: event.target.checked });
  };
  const handleEmailChange = (event) => {
    setEmailState({ ...smsState, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <h1>Notifications</h1>
      <Box sx={{my:3}}>
        <FormControlLabel
          control={
            <Switch
              checked={smsState.checkedA}
              onChange={handleSmsChange}
              name="checkedA"
            />
          }
          label="SMS Notifications"
        />
        <Typography variant="h6">I would like to receive occasional SMS notifications</Typography>
      </Box>
      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={emailState.checkedC}
              onChange={handleEmailChange}
              name="checkedC"
            />
          }
          label="Email Notifications"
        />
        <Typography variant="h6">I would like to receive occasional email notifications</Typography>
      </Box>
      <Box sx={{my:3}}>
        <Button variant="contained" color="primary" className={classes.button}>
          Save
        </Button>
        </Box>
    </div>
  );
};

export default Notifications;
