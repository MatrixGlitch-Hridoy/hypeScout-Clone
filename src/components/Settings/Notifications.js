import { Box, Button, FormControlLabel, Switch, Typography } from "@material-ui/core";
import React, { useState } from "react";

const Notifications = () => {
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
      <Box>
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
      <Button variant="contained" color="primary">
        Save
        </Button>
    </div>
  );
};

export default Notifications;
