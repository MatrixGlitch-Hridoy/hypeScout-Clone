import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  display: {
    display: "none",
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
const ContentForm = () => {
  const classes = useStyles();
  const history = useHistory();
  //form hook
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let test = {
      facebook: {
        contentType: [fbContentOption.video, fbContentOption.static],
        contentPlacement: {
          post: data.fbPost,
          story: data.fbStory,
        },
      },
      instagram: {
        contentType: [
          instagramContentOption.video,
          instagramContentOption.static,
        ],
        contentPlacement: {
          post: data.instagramPost,
          story: data.instagramStory,
        },
      },
      youtube: {
        contentType: [youtubeContentOption.video, youtubeContentOption.shorts],
        contentPlacement: {
          video: data.ytVideo,
          videoDuration: data.ytVideoDuration,
          shortsCount: data.ytShorts,
        },
      },
      tiktok: {
        contentPlacement: {
          video: data.tiktokVideo,
        },
      },
    };
    console.log(test);
    history.push("/new/description");
  };

  const [count, setCount] = useState(1);
  const [fbContentOption, setFbContentOption] = useState({
    video: "",
    static: "",
  });
  const [fbContentPlacement, setFbContentPlacement] = useState({
    post: "",
    story: "",
  });
  const [instagramContentOption, setInstagramContentOption] = useState({
    video: "",
    static: "",
  });
  const [instagramContentPlacement, setInstagramContentPlacement] = useState({
    post: "",
    story: "",
  });
  const [youtubeContentOption, setYoutubeContentOption] = useState({
    video: "",
    shorts: "",
  });

  return (
    <>
      <Container>
        <Grid container justifyContent="center" style={{ margin: "2rem 0" }}>
          <Grid item xs={12} md={10}>
            <Paper style={{ padding: "2rem" }}>
              <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container alignItems="center">
                    {count === 1 && (
                      <>
                        <Grid item md={12}>
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}
                          >
                            Facebook
                          </Typography>
                          <Divider />
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Typography
                            variant="h6"
                            style={{ fontWeight: "900" }}
                          >
                            Content Type
                          </Typography>
                          <Typography style={{ fontSize: "13px" }}>
                            Type of the content
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box sx={{ my: 2 }}>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setFbContentOption(
                                  fbContentOption.video === ""
                                    ? { ...fbContentOption, video: "video" }
                                    : { ...fbContentOption, video: "" }
                                )
                              }
                              className={
                                fbContentOption.video === "video" &&
                                classes.button
                              }
                            >
                              Video
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setFbContentOption(
                                  fbContentOption.static === ""
                                    ? { ...fbContentOption, static: "static" }
                                    : { ...fbContentOption, static: "" }
                                )
                              }
                              className={
                                fbContentOption.static === "static" &&
                                classes.button
                              }
                              style={{ marginLeft: "1rem" }}
                            >
                              Static Photo
                            </Button>
                          </Box>
                        </Grid>
                      </>
                    )}
                    {count === 2 && (
                      <>
                        <Grid item md={12}>
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}
                          >
                            Facebook
                          </Typography>
                          <Divider />
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Typography
                            variant="h6"
                            style={{ fontWeight: "900" }}
                          >
                            Content Placement
                          </Typography>
                          <Typography style={{ fontSize: "13px" }}>
                            Where influencer will put the content
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box sx={{ my: 2 }}>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setFbContentPlacement(
                                  fbContentPlacement.post === ""
                                    ? { ...fbContentPlacement, post: "post" }
                                    : { ...fbContentPlacement, post: "" }
                                )
                              }
                              className={
                                fbContentPlacement.post === "post" &&
                                classes.button
                              }
                            >
                              Post
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setFbContentPlacement(
                                  fbContentPlacement.story === ""
                                    ? { ...fbContentPlacement, story: "story" }
                                    : { ...fbContentPlacement, story: "" }
                                )
                              }
                              className={
                                fbContentPlacement.story === "story" &&
                                classes.button
                              }
                              style={{ marginLeft: "1rem" }}
                            >
                              Story
                            </Button>
                            {fbContentPlacement.post === "post" && (
                              <Box sx={{ mt: 2 }}>
                                <Typography>
                                  How many posts will they make?
                                </Typography>
                                <TextField
                                  id="outlined-full-width"
                                  placeholder="How many posts will they make?"
                                  fullWidth
                                  variant="outlined"
                                  {...register("fbPost")}
                                />
                              </Box>
                            )}
                            {fbContentPlacement.story === "story" && (
                              <Box sx={{ mt: 2 }}>
                                <Typography>
                                  How many stories will they make?
                                </Typography>
                                <TextField
                                  id="outlined-full-width"
                                  placeholder="How many stories will they make??"
                                  fullWidth
                                  variant="outlined"
                                  {...register("fbStory")}
                                />
                              </Box>
                            )}
                          </Box>
                        </Grid>
                      </>
                    )}
                    {count === 3 && (
                      <>
                        <Grid item md={12}>
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}
                          >
                            Instagram
                          </Typography>
                          <Divider />
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Typography
                            variant="h6"
                            style={{ fontWeight: "900" }}
                          >
                            Content Type
                          </Typography>
                          <Typography style={{ fontSize: "13px" }}>
                            Type of the content
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box sx={{ my: 2 }}>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setInstagramContentOption(
                                  instagramContentOption.video === ""
                                    ? {
                                        ...instagramContentOption,
                                        video: "video",
                                      }
                                    : { ...instagramContentOption, video: "" }
                                )
                              }
                              className={
                                instagramContentOption.video === "video" &&
                                classes.button
                              }
                            >
                              Video
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setInstagramContentOption(
                                  instagramContentOption.static === ""
                                    ? {
                                        ...instagramContentOption,
                                        static: "static",
                                      }
                                    : { ...instagramContentOption, static: "" }
                                )
                              }
                              className={
                                instagramContentOption.static === "static" &&
                                classes.button
                              }
                              style={{ marginLeft: "1rem" }}
                            >
                              Static Photo
                            </Button>
                          </Box>
                        </Grid>
                      </>
                    )}
                    {count === 4 && (
                      <>
                        <Grid item md={12}>
                          <Typography
                            variant="h4"
                            style={{ fontWeight: "900" }}
                          >
                            Instagram
                          </Typography>
                          <Divider />
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Typography
                            variant="h6"
                            style={{ fontWeight: "900" }}
                          >
                            Content Placement
                          </Typography>
                          <Typography style={{ fontSize: "13px" }}>
                            Where influencer will put the content
                          </Typography>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box sx={{ my: 2 }}>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setInstagramContentPlacement(
                                  instagramContentPlacement.post === ""
                                    ? {
                                        ...instagramContentPlacement,
                                        post: "post",
                                      }
                                    : { ...instagramContentPlacement, post: "" }
                                )
                              }
                              className={
                                instagramContentPlacement.post === "post" &&
                                classes.button
                              }
                            >
                              Post
                            </Button>
                            <Button
                              variant="contained"
                              onClick={() =>
                                setInstagramContentPlacement(
                                  instagramContentPlacement.story === ""
                                    ? {
                                        ...instagramContentPlacement,
                                        story: "story",
                                      }
                                    : {
                                        ...instagramContentPlacement,
                                        story: "",
                                      }
                                )
                              }
                              className={
                                instagramContentPlacement.story === "story" &&
                                classes.button
                              }
                              style={{ marginLeft: "1rem" }}
                            >
                              Story
                            </Button>
                            {instagramContentPlacement.post === "post" && (
                              <Box sx={{ mt: 2 }}>
                                <Typography>
                                  How many posts will they make?
                                </Typography>
                                <TextField
                                  id="outlined-full-width"
                                  placeholder="How many posts will they make?"
                                  fullWidth
                                  variant="outlined"
                                  {...register("instagramPost")}
                                />
                              </Box>
                            )}
                            {instagramContentPlacement.story === "story" && (
                              <Box sx={{ mt: 2 }}>
                                <Typography>
                                  How many stories will they make?
                                </Typography>
                                <TextField
                                  id="outlined-full-width"
                                  placeholder="How many stories will they make??"
                                  fullWidth
                                  variant="outlined"
                                  {...register("instagramStory")}
                                />
                              </Box>
                            )}
                          </Box>
                        </Grid>
                      </>
                    )}
                    {count === 5 && (
                      <>
                        <>
                          <Grid item md={12}>
                            <Typography
                              variant="h4"
                              style={{ fontWeight: "900" }}
                            >
                              Youtube
                            </Typography>
                            <Divider />
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <Typography
                              variant="h6"
                              style={{ fontWeight: "900" }}
                            >
                              Content Type
                            </Typography>
                            <Typography style={{ fontSize: "13px" }}>
                              Type of the content
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={7}>
                            <Box sx={{ my: 2 }}>
                              <Button
                                variant="contained"
                                onClick={() =>
                                  setYoutubeContentOption(
                                    youtubeContentOption.video === ""
                                      ? {
                                          ...youtubeContentOption,
                                          video: "video",
                                        }
                                      : { ...youtubeContentOption, video: "" }
                                  )
                                }
                                className={
                                  youtubeContentOption.video === "video" &&
                                  classes.button
                                }
                              >
                                Video
                              </Button>
                              <Button
                                variant="contained"
                                onClick={() =>
                                  setYoutubeContentOption(
                                    youtubeContentOption.shorts === ""
                                      ? {
                                          ...youtubeContentOption,
                                          shorts: "shorts",
                                        }
                                      : { ...youtubeContentOption, shorts: "" }
                                  )
                                }
                                className={
                                  youtubeContentOption.shorts === "shorts" &&
                                  classes.button
                                }
                                style={{ marginLeft: "1rem" }}
                              >
                                Shorts
                              </Button>
                            </Box>
                            {youtubeContentOption.video === "video" && (
                              <>
                                <Box sx={{ mt: 2 }}>
                                  <Typography>Video Count</Typography>
                                  <TextField
                                    id="outlined-full-width"
                                    placeholder="Video Count"
                                    fullWidth
                                    variant="outlined"
                                    {...register("ytVideo")}
                                  />
                                </Box>
                                <Box sx={{ mt: 2 }}>
                                  <Typography>Video Duration</Typography>
                                  <TextField
                                    id="outlined-full-width"
                                    placeholder="Video Duration"
                                    fullWidth
                                    variant="outlined"
                                    {...register("ytVideoDuration")}
                                  />
                                </Box>
                              </>
                            )}
                            {youtubeContentOption.shorts === "shorts" && (
                              <Box sx={{ mt: 2 }}>
                                <Typography>Shorts Count</Typography>
                                <TextField
                                  id="outlined-full-width"
                                  placeholder="Shorts Count"
                                  fullWidth
                                  variant="outlined"
                                  {...register("ytShorts")}
                                />
                              </Box>
                            )}
                          </Grid>
                        </>
                      </>
                    )}
                    {count === 6 && (
                      <>
                        <>
                          <Grid item md={12}>
                            <Typography
                              variant="h4"
                              style={{ fontWeight: "900" }}
                            >
                              TikTok
                            </Typography>
                            <Divider />
                          </Grid>
                          <Grid item xs={12} md={5}>
                            <Typography
                              variant="h6"
                              style={{ fontWeight: "900" }}
                            >
                              Video Count
                            </Typography>
                            <Typography style={{ fontSize: "13px" }}>
                              How many videos to be uploaded
                            </Typography>
                          </Grid>
                          <Grid item xs={12} md={7}>
                            <Typography>Video Count</Typography>
                            <TextField
                              id="outlined-full-width"
                              placeholder="Video Count"
                              fullWidth
                              variant="outlined"
                              name="monetaryValue"
                              {...register("tiktokVideo")}
                            />
                          </Grid>
                        </>
                      </>
                    )}
                  </Grid>
                  <Box sx={{ mt: 3 }}>
                    {count === 6 && (
                      <Button
                        variant="contained"
                        className="btn btn-primary"
                        type="submit"
                      >
                        save & continue
                      </Button>
                    )}
                  </Box>
                </form>
              </Box>
              <Box sx={{ mt: 3 }}>
                <Button
                  variant="contained"
                  className={
                    count === 1 ? clsx(classes.display) : clsx(classes.button)
                  }
                  type="submit"
                  onClick={() => setCount(count - 1)}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  type="submit"
                  onClick={() => setCount(count + 1)}
                  className={
                    count === 6 ? clsx(classes.display) : clsx(classes.button)
                  }
                  style={{ marginLeft: "1rem" }}
                >
                  Next
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContentForm;
