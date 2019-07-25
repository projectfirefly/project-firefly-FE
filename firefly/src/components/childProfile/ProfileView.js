import React, { useState } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import image1 from "../../assets/icons/Firefly.svg";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { FaPen } from "react-icons/fa";
import Book from "../../images/BookTemp.png";
import Stars from "../../images/StarsTemp.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: "3%",
    fontFamily: "nunito"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  header: {
    fontSize: "20px",
    textAlign: "center",
    color: "#5B4EFF",
    fontSize: "50px",
    letterSpacing: "7px",
    fontWeight: "900",
    textTransform: "uppercase",
    fontFamily: "nunito",
    marginBottom: "10px"
  },
  leftContainer: {
    background: "white",
    borderRadius: " 20px",
    boxShadow: "0px 2px 4px #000000"
  },
  firefly: {
    width: "70%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  fireflyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  rightCards: {
    textAlign: "center",
    border: "solid #ABB0BA 2px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px #8F96A3",
    height: "37%",
    color: "#5B4EFF",
    fontWeight: "bold",
    marginLeft: "10%"
  },
  rightCardContent: {
    display: "flex",
    paddingTop: "10%",
    width: "100%",
    margin: "0 15%"
  },

  rightCardsText: {
    fontSize: "30px",
    paddingTop: "5%",
    marginLeft: "8%"
  },
  bottomCard: { marginTop: "13%" },
  rightCardsImg: { width: "10%" },
  chooseFirefly: {
    textAlign: "center",
    border: "solid #ABB0BA 2px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px #8F96A3",
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "bold",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  edit: {
    width: "100%",
    textAlign: "right",
    color: "#4AA810",
    fontWeight: "bold",
    fontSize: "20px"
  },
  username: {
    textAlign: "center",
    color: "#152F04",
    fontWeight: "bold",
    fontSize: "22px"
  },
  editContainer: {
    marginBottom: " 5%",
    marginRight: "5%",
    paddingTop: "3%"
  }
}));

export default function ProfileView() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="lg" component="div">
        <h1 className={classes.header}>My Firefly</h1>

        <Grid style={{ marginTop: "20px" }} container spacing={3}>
          <Grid item xs={6}>
            <div className={classes.leftContainer}>
              <div className={classes.editContainer}>
                <Link style={{ textDecoration: "none" }} to="/createprofile">
                  <div className={classes.edit}>
                    <FaPen style={{ marginRight: "5px" }} />
                    Edit
                  </div>
                </Link>
              </div>
              <h3 className={classes.username}>Users name</h3>

              <div className={classes.fireflyContainer}>
                <img
                  className={classes.firefly}
                  src={image1}
                  alt="users profile"
                />
              </div>
            </div>
            <div className={classes.chooseFirefly}>
              <Link
                style={{ color: "#4AA810", textDecoration: "none" }}
                to="/child-profiles-main"
              >
                Choose Firefly
              </Link>
            </div>
          </Grid>

          <Grid className={classes.right} item xs={6}>
            <div className={classes.rightCards}>
              <div className={classes.rightCardContent}>
                <img className={classes.rightCardsImg} src={Book} alt={'A book'} />
                <h4 className={classes.rightCardsText}>Learn How to Play</h4>
              </div>
            </div>

            <div className={`${classes.rightCards} ${classes.bottomCard}`}>
              <div className={classes.rightCardContent}>
                <img className={classes.rightCardsImg} src={Stars} alt={'three stars'} />
                <h4 className={classes.rightCardsText}>Start Playing</h4>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
