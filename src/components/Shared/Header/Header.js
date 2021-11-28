import React from "react";
import {
  AppBar,

  Box,
  Button,
  Container,

  IconButton,
  Menu,
  MenuItem,
  Toolbar,

  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
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
    marginTop:'1rem',
    marginBottom:'2rem'
  },
  flex:{
      justifyContent:'center',
      marginBottom:30
  },
  button:{
    backgroundColor:'black',
    color:'white',
  }
}));
const pages = ['Campaigns', 'Profile', 'Setting'];
const Header = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = (route) => {
    setAnchorElNav(null);
    history.push('')
  };
  const history = useHistory();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Container container>
      <Toolbar disableGutters>
          <Box sx={{flexGrow: 1, mr: 2, display: { xs: 'none', md: 'flex' } }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={()=>history.push('/')}
            style={{cursor:'pointer'}}
          >
            hype scout
          </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={()=>history.push('/')}
            style={{cursor:'pointer'}}
          >
            hype scout
          </Typography>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:'space-around' }}>
            {/* {pages.map((page) => ( */}
              <Button
                onClick={()=>handleCloseNavMenu()}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Campaigns
              </Button>
              <Button
                onClick={()=>{handleCloseNavMenu()}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Profile
              </Button>
              <Button
                onClick={()=>{history.push('/setting/personal');handleCloseNavMenu()}}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Settings
              </Button>
            {/* // ))} */}
          </Box>
            <Box sx={{ flexGrow: 1 ,justifyContent:'flex-end' }}>
              <Button onClick={()=>history.push('/login')}>Login</Button>
              <Button className={classes.button} onClick={()=>history.push('/register')}>Get Started</Button>
            </Box>
            </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
