import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
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
    width:'50%',
  },
  details: {
    display: "flex",
    padding:10,
    // flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    // width: '100%',
    height:0,
    paddingTop:'100%',
    borderRadius:10
    // marginTop:'5'
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
  }
}));
const Cards = ({ data }) => {
  // console.log(data, "Here");
  const classes = useStyles();

  return (
    <>
      {data.length !== 0 ? (
        data.map((d) => (
            <Grid container key={d.id}>
              <Card className={classes.root}>
                <div className={classes.details}>
                  <Grid item md={4}>
                    <CardMedia
                      className={classes.cover}
                      image={image}
                      title="Live from space album cover"
                    />
                    {/* <Image src={image}/> */}
                    {/* <img src={image} className={classes.cover}/> */}
                  </Grid>
                  <Grid item md={8}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        {d.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                      </Typography>
                    </CardContent>
                  </Grid>
                </div>
              </Card>
            </Grid>

        ))
      ) : (
        <Typography className={classes.message}>You do not have any campaigns yet</Typography>
      )}
    </>
  );
};

export default Cards;
