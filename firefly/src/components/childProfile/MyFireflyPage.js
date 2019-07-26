import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import image1 from "../../assets/icons/Firefly.svg";
import { makeStyles } from "@material-ui/core/styles";
import { FaPen } from "react-icons/fa";
import Book from "../../images/BookTemp.png";
import Stars from "../../images/StarsTemp.png";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "98%",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh"
  },
  header: {
    height: '5%',
    textAlign: "center",
    color: "#5B4EFF",
    fontSize: "28px",
    letterSpacing: "7px",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "nunito",
  },
  mainBody:{
    display: "flex",
    width: "100%",
    height: "60%",
    padding: "4%",
  },
  leftParent:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "50%",
  },
  leftContainer: {
    width: "55%",
    height: '80%',
    background: "white",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px #000000"
  },
  fireflyContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  firefly: {
    width: "200px",
  },
  rightContainer: {
    width: '50%',
  },
  rightCards: {
    width: '80%',
    height: "150px",
    border: "solid #ABB0BA 2px",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 3px #8F96A3",
    marginBottom: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightCardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rightCardsText: {
    color: "#5B4EFF",
    fontSize: "24px",
    fontWeight: '700'
  },
  rightCardsImg: { 
    width: '15%'
  },
  bottomCard: {
  },
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
  pushRight: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  edit: {
    color: "#4AA810",
    marginLeft: '3px'
  },
  editContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "34px",
    height: "30px",
    border: "solid #ABB0BA 2px",
    borderRadius: "10px",
    boxShadow: "0px 3px #8F96A3",
    margin: '10px'
  },
  username: {
    textAlign: "center",
    color: "#152F04",
    fontWeight: "bold",
    fontSize: "18px"
  },

}));

export default function MyFireflyPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root} component="div">

        <h1 className={classes.header}>My Firefly</h1>

        <div className={classes.mainBody} >

            <div className={classes.leftParent}> 
            {/* this div has invisible margins to keep container center */}

              <div className={classes.leftContainer}>
                <div className={classes.pushRight}>
                  <div className={classes.editContainer}>
                    <Link to="/createprofile">
                      <div className={classes.edit}>
                        <FaPen style={{ marginRight: "5px" }} />
                      </div>
                    </Link>
                  </div>
                </div>
                <h3 className={classes.username}>Username</h3>
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
            </div>
          

          <div className={classes.rightContainer} >
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
          </div>

        </div>

      </Container>
    </React.Fragment>
  );
}
