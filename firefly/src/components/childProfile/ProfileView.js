import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import image1 from "../../assets/icons/firefly.svg";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { FaPencilAlt } from "react-icons/fa";

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
  const [name, setName] = useState("");
  const [newName, setNewName] = useState();
  const [open, setOpen] = useState(false);

  const nameInState = { name };

  const handleChange = event => {
    event.preventDefault();
    setNewName(event.target.value);
  };
  const changeName = event => {
    event.preventDefault();
    if (!newName) {
      alert("Please add a new name");
    } else {
      setName(newName);
      setNewName("");
    }
  };

  console.log(name);

  return (
    <React.Fragment>
      <CssBaseline />

      <Container
        className={classes.root}
        maxWidth="sm"
        component="div"
        style={{ backgroundColor: "transparent" }}
      >
        <Paper
          style={{
            height: "400px",
            marginTop: "80px"
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <div style={{ height: "300px" }}>
                <a href="/createprofile">
                  <img src={image1} alt="users profile image" />
                </a>
                <br />
                <div
                  style={{
                    textAlign: "center"
                  }}
                >
                  <Link to="/createprofile">Change Characters</Link>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div
                style={{
                  paddingTop: "60px",
                  height: "300px",
                  textAlign: "center"
                }}
              >
                {name ? (
                  <div style={{ display: "flex" }}>
                    <h2
                      style={{
                        color: "#3E8C0C",
                        fontSize: "28px",
                        marginRight: "15px"
                      }}
                    >
                      {name}
                    </h2>
                    <button
                      type="submit"
                      // onClick={() => {
                      //   setOpen(!open);
                      //   changeName();
                      // }}
                      onClick={changeName}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        cursor: "pointer"
                      }}
                    >
                      <FaPencilAlt
                        style={{ color: "#3E8C0C", fontSize: "15px" }}
                      />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={changeName}>
                    <input
                      placeholder="character name"
                      type="text"
                      value={newName}
                      onChange={handleChange}
                      style={{
                        border: "none",
                        fontSize: "14px"
                      }}
                    />

                    <button
                      type="submit"
                      // onClick={() => {
                      //   setOpen(!open);
                      //   changeName();
                      // }}
                      onClick={changeName}
                      style={{
                        border: "none",
                        backgroundColor: "transparent",
                        cursor: "pointer"
                      }}
                    >
                      <FaPencilAlt
                        style={{ color: "#3E8C0C", fontSize: "15px" }}
                      />
                    </button>
                  </form>
                )}

                <br />
                <div style={{ paddingTop: "100px" }}>
                  <p>Level: </p>
                  <p>Blocks Unlocked: </p>
                  <p>Models Unlocked: </p>
                </div>
                <Link to="#">Change Profile</Link>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
