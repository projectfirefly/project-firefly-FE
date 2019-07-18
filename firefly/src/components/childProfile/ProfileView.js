import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import image1 from "../../assets/icons/firefly.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function ProfileView() {
  const classes = useStyles();
  const [name, setName] = useState({ value: "" });

  const handleChange = event =>
    setName({ [event.target.placeholder]: event.target.value });

  // const changeName = event => setName(name = input )

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        className={classes.root}
        maxWidth="sm"
        component="div"
        style={{ backgroundColor: "#dfe7ed", height: "90vh" }}
      >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper className={classes.paper} style={{ height: "500px" }}>
              <a href="/createprofile">
                <img src={image1} alt="users profile image" />
              </a>
              <br />
              <Link to="/createprofile">Change Characters</Link>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} style={{ height: "500px" }}>
              <div style={{ paddingTop: "60px" }}>
                <input
                  placeholder="character name"
                  type="text"
                  value={value}
                  onChange={handleChange}
                />
                <button type="submit" onClick={handleChange}>
                  {" "}
                  change name{" "}
                </button>
                <p>Level: </p>
                <p>Blocks Unlocked: </p>
                <p>Models Unlocked: </p>
              </div>
              <Link to="#">Change Profile</Link>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
