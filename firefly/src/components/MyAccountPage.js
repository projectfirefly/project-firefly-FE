import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../styles/MyAccountPage.scss";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Icon from "../assets/icons";
import { FaPen, FaPlus } from "react-icons/fa";
import { PrimaryButton } from "../components/PrimaryButton";

//context
import { childContext } from "../context/ChildProfiles/ChildProfileStore";
import { UPDATE_USER } from "../context/ChildProfiles/ChildProfileStore";
import { updateUser } from '../utils/firebaseInteractions';


const useStyles = makeStyles(theme => ({
  paper: {
    padding: "20px 20px",
    textAlign: "left",
    color: theme.palette.text.secondary,
    borderRadius: " 20px",
    // marginBottom: "32px",
  }
}));

export default function ProfileView() {

  const [editing, setEditing] = useState(false);

  const classes = useStyles();

  return (
    <Container className="root" maxWidth="lg">
      <h1 className="header">My Account</h1>

      <div className="container">
        <div className="left">
          {/* Account Info */}
          <div className="leftContainerOne">
            <Paper className={classes.paper}>
              <h2 className="sectionHeader">Account Information</h2>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <div className="infoLabel">Email</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="userInfo">Users Email</div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <div className="infoLabel">Name</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="userInfo">Users Name</div>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <div className="infoLabel">Address</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="userInfo">Users Address</div>
                </Grid>
              </Grid>
              <br />
            </Paper>
          </div>
          {/* Payment Info */}
          <div className="leftContainerTwo">
            <Paper className={classes.paper}>
              <h2 className="sectionHeader"> Payment Information</h2>
              <br />
              <br />
              <br />
            </Paper>
          </div>
          {/* Educational Research */}
          <div className="leftContainer">
            <Paper className={classes.paper}>
              <h2 className="sectionHeader">
                Educational Research Participation
              </h2>
              <div className="research-section">
                <div className="checkbox-container">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span className="checkbox-custom"> {""}</span>
                  </label>
                </div>
                <p>I would like to participate in the Educational Research</p>
              </div>
              <br />
            </Paper>
          </div>
        </div>

        <div className="rightCards">
          <Paper className={classes.paper}>
            <h2 className="sectionHeaderRight">Manage Profile</h2>
            <div className="fireflyContainer">
              <div className="edit">
                <Link to="/addprofile" className="iconButton">
                  <FaPlus />
                </Link>
              </div>
              <p>New Profile</p>
              {/* New Profile card. Later make into a component */}
              <div className="fireflyIcon">
                <Icon
                  name="Firefly"
                  style={{
                    width: "40%"
                  }}
                />
              </div>

              <hr class="style1" />
              <ProfileCard />
            </div>
          </Paper>

          <div className="button">
            <PrimaryButton text={"BACK TO GAME"} onclick={"/startgame"} />
          </div>
        </div>
      </div>
    </Container>
  );
}
