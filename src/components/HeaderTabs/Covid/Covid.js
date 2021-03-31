import React, { useState, useEffect } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Chip from "@material-ui/core/Chip";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Covid() {
  const classes = useStyles();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    console.log("Use Effect Covid Component");
    countriesList();
  }, []);

  const countriesList = async () => {
    console.log("Get all countries");

    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      //console.log("Response-countries", JSON.stringify(response.data));
      setCountries(response.data);
    });
  };

  const handleDelete = () => {};

  const handleClick = (name) => {
    console.log("object", name);
  };

  const countriesCodes = countries.map((item, key) => {
    return (
      <div className={classes.root}>
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              console.log("clicked", item.name);
            }}
          >
            {item.name}
          </Button>
        </ButtonGroup>
      </div>
    );
  });

  return <div>{countriesCodes}</div>;
}
