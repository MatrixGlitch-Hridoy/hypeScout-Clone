import {
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Image } from "@material-ui/icons";
import React from "react";
import image from "../../../images/banner.png";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom:10,
    marginTop:30,
  },
  details: {
    display: "flex",
    padding:10,
  },
  content: {
    flex: "1 0 auto",
  },
  image:{
    width:'100%',
    height:'100%',
    backgroundPosition:'center',
    backgroundSize:'cover',
    
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  message:{
    fontSize:30,
    fontWeight:900,
    textAlign:'center',
    marginTop:30
  },
  title:{
    [theme.breakpoints.down('sm')]: {
      fontSize:15
    },
  }
}));
const Cards = ({ data }) => {
  // console.log(data, "Here");
  const classes = useStyles();

  return (
    <>
      {data.length !== 0 ? (
        data.map((d) => (

              // <Card className={classes.root} key={d.id}>
              //   <div className={classes.details}>
              //     <Grid item md={4}>
              //       <CardMedia
              //         className={classes.cover}
              //         image={image}
              //         title="Live from space album cover"
              //       />
              //       {/* <Image src={image}/> */}
              //       {/* <img src={image} className={classes.cover}/> */}
              //     </Grid>
              //     <Grid item md={8}>
              //       <CardContent className={classes.content}>
              //         <Typography component="h5" variant="h5">
              //           {d.title}
              //         </Typography>
              //         <Typography variant="subtitle1" color="textSecondary">
              //           Mac Miller
              //         </Typography>
              //       </CardContent>
              //     </Grid>
              //   </div>
              // </Card>

              <Grid item sm={12} md={6} className={classes.root} key={d.id}>
                <Grid container>
                  <Paper className={classes.details}>
                   <Grid item xs={3} md={4}>
                      <img src={image} alt="image" className={classes.image}/>
                  </Grid>
                  <Grid item xs={9} md={8}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5" className={classes.title}>
                        {d.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                      </Typography>
                    </CardContent>
                  </Grid>
                </Paper>
                </Grid>
              </Grid>

        ))
      ) : (
        <Typography className={classes.message}>You do not have any campaigns yet</Typography>
      )}
    </>
  );
};

export default Cards;
