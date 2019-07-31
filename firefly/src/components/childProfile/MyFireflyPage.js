import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import image1 from "../../assets/icons/Firefly.svg";
import { makeStyles } from "@material-ui/core/styles";
import { FaPen } from "react-icons/fa";
import Book from "../../images/BookTemp.png";
import Stars from "../../images/StarsTemp.png";
import Icon from "../../assets/icons";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "98vw",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    color: "#5B4EFF",
    fontSize: "34px",
    letterSpacing: "7px",
    fontWeight: "900",
    textTransform: "uppercase",
    fontFamily: "nunito"
  },
  mainBody: {
    display: "flex",
    width: "100%",
    height: "60%",
    marginTop: "5.25%"
  },
  leftParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
    height: "460px"
  },
  leftContainer: {
    width: "70%",
    height: "80%",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px #000000"
  },
  fireflyContainer: {
    width: "98%",
    height: "80%",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  firefly: {
    width: "62%"
  },
  rightContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "47%"
  },
  rightCards: {
    width: "80%",
    height: "150px",
    border: "solid #ABB0BA 2px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px #8F96A3",
    marginBottom: "55px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  rightCardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  rightCardsText: {
    color: "#5B4EFF",
    fontSize: "24px",
    fontWeight: "700"
  },
  rightCardsImg: {
    width: "15%"
  },
  bottomCard: {},

  chooseFirefly: {
    width: "70%",
    textAlign: "center",
    border: "solid #ABB0BA 2px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px #8F96A3",
    marginTop: "40px",
    fontSize: "16px",
    fontWeight: "bold",
    height: "10%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase"
  },
  pushRight: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end"
  },
  edit: {
    color: "#4AA810",
    marginLeft: "3px"
  },
  editContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "34px",
    height: "30px",
    border: "solid #ABB0BA 2px",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    margin: "10px"
  },
  username: {
    textAlign: "center",
    color: "#152F04",
    fontWeight: "bold",
    fontSize: "18px"
  }
}));

export default function MyFireflyPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root} component="div">
        <h1 className={classes.header}>My Firefly</h1>

        <div className={classes.mainBody}>
          <div className={classes.leftParent}>
            {/* this div has invisible margins to keep container center */}

            <div className={classes.leftContainer}>
              <div className={classes.pushRight}>
                <div className={classes.editContainer}>
                  <Link to="/customize">
                    <div className={classes.edit}>
                      <FaPen style={{ marginRight: "5px" }} />
                    </div>
                  </Link>
                </div>
              </div>
              <h3 className={classes.username}>Username</h3>
              <div className={classes.fireflyContainer}>
                {/* <img
                  className={classes.firefly}
                  src={image1}
                  alt="users profile"
                /> */}
                <Icon name="Firefly" className={classes.firefly} />
              </div>
            </div>

            
              <Link 
                className={classes.chooseFirefly}
                style={{ color: "#4AA810", textDecoration: "none" }}
                to="/choose-profile"
              >
                <div>
                  Choose Firefly
                </div>
              </Link>
            
          </div>

          <div className={classes.rightContainer}>
            <div className={classes.rightCards}>
              <div className={classes.rightCardContent}>
                <img
                  className={classes.rightCardsImg}
                  src={Book}
                  alt={"A book"}
                />
                <h4 className={classes.rightCardsText}>Learn How to Play</h4>
              </div>
            </div>

            
            <Link className={`${classes.rightCards} ${classes.bottomCard}`}
              style={{ textDecoration: "none" }} 
              to="/startgame"
            >
              <div >
                <div className={classes.rightCardContent}>
                  <img
                    className={classes.rightCardsImg}
                    src={Stars}
                    alt={"three stars"}
                  />
                  <h4 className={classes.rightCardsText}>Start Playing</h4>{" "}
                </div>
              </div>
            </Link>
          
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
