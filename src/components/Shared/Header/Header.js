import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MenuIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
  },
  flex:{
      justifyContent:'center',
      marginBottom:30
  },
  
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.flex}>
      <Grid item md={8}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h5" className={classes.title}>
              <Link to="/" style={{textDecoration:'none'}}>
                <Box fontWeight={900} style={{color:'black'}}>hype scout</Box>
              </Link>
            </Typography>
            <Button color="inherit" >Login</Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default Header;
