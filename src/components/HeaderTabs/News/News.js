import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function News() {
  const classes = useStyles();
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    console.log("Use Effect News Component");
    //NewsApi();
  }, []);

  const NewsApi = async () => {
    console.log("APi Call");
    axios
      .get(
        "https://newsapi.org/v2/everything?q=ai&apiKey=4c1a495d256242bbbaabb3bb3dcc2d34"
      )
      .then((response) => {
        console.log("Response", JSON.stringify(response.data.articles));
        setNewsArray(response.data.articles);
      });
  };

  const newsList = newsArray.map((item, key) => {
    return (
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.urlToImage}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  });

  return <div>{newsList}</div>;
}
