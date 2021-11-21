import React from "react";
import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Personal from "./Personal";
import Notifications from "./Notifications";
import Campaign from "./Campaign";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "40%",
    },
  },
  flex: {
    // justifyContent:'flex-start',
    marginTop: 20,
    textAlign: "center",
  },
  profileCard: {
    backgroundColor: "#efefef",
    borderRadius: "15px",
    padding: "1rem",
  },
  button: {
    backgroundColor: "#e0e2f5",
    borderRadius: "5px",
    width: "70%",
    fontWeight: 900,
    textDecoration: "none",
  },
  typography: {
    lineHeight: "2rem",
    color: "#939aa3",
  },
  code: {
    backgroundColor: "#f3f4fb",
    padding: "10px 15px",
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      fontSize: 15,
    },
  },
  iconAvatar: {
    width: "5%",
    [theme.breakpoints.down("sm")]: {
      width: "15%",
    },
  },
}));
const Settings = () => {
  const classes = useStyles();
  let { path, url } = useRouteMatch();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div>
      <Container container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box className={classes.avatar} sx={{ mt: 3 }}>
              <Avatar
                src="/broken-image.jpg"
                style={{
                  backgroundSize: "cover",
                  height: "7rem",
                  width: "100%",
                }}
              />
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h5">Username</Typography>
              <Typography>Rizvi Khalid Hridoy</Typography>
            </Box>
            <Box sx={{ my: 2 }}>
              <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                <Link style={{textDecoration:'none'}} to={`${url}/personal`}>
                  <ListItem
                    button
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemText primary="Personal" />
                  </ListItem>
                  </Link>
                  
                  <Link style={{textDecoration:'none'}} to={`${url}/notifications`}>
                  <ListItem
                    button
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemText primary="Notifications" />
                  </ListItem>
                  </Link>

                  <Link style={{textDecoration:'none'}} to={`${url}/campaign`}>
                  <ListItem
                    button
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <ListItemText primary="Campaign" />
                  </ListItem>
                  </Link>
                </List>
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* Nested Route Here */}
            <Switch>
              <Route exact path={`${path}/personal`}>
                    <Personal/>
                </Route>
                <Route exact path={`${path}/notifications`}>
                    <Notifications/>
                </Route>
                <Route exact path={`${path}/campaign`}>
                    <Campaign/>
                </Route>
            </Switch>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Settings;
