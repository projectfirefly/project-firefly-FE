import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../../styles/MyAccountPage.scss";
import { Link } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import Icon from "../../assets/icons";
import { FaPen, FaPlus } from "react-icons/fa";
import { PrimaryButton } from "../../utils/buttons/PrimaryButton";
import { SecondaryButton } from "../../utils/buttons/SecondaryButton";

//context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_USER } from "../../context/ChildProfiles/ChildProfileStore";
import { updateUser } from "../../utils/firebaseInteractions";
import { flexbox } from "@material-ui/system";

export default function ProfileView(props) {
  const [editing, setEditing] = useState(false);

  const [finishedLoading, setFinishedLoading] = useState(false);

  const [childProfileState, dispatch] = useContext(childContext);

  const [updatedInfo, setUpdatedInfo] = useState({
    email: "",
    first_name: "",
    last_name: "",
    information: {
      address: "",
    },
  });

  console.log("myaccountpage state", childProfileState);

  useEffect(() => {
    if (
      childProfileState.loaded &&
      childProfileState.hasProfiles &&
      !finishedLoading
    ) {
      setUpdatedInfo({
        ...childProfileState.user,
      });
      setFinishedLoading(true);
    }
  }, [childProfileState]);

  const toggleEditing = () => {
    setEditing(!editing);
    setUpdatedInfo({
      ...childProfileState.user,
    });
    console.log(process.env.REACT_APP_SOMETHING);
  };

  const classes = makeStyles(theme => ({
    paper: {
      padding: "20px 20px",
      textAlign: "left",
      color: theme.palette.text.secondary,
      borderRadius: " 20px",
      // marginBottom: "32px",
    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    editButtons: {
      display: "flex",
      marginTop: "40px",
      justifyContent: "space-between",
    },
    button: {
      width: "40%",
      marginTop: "40px",
    },
  }))();

  const handleChanges = e => {
    setUpdatedInfo({
      ...updatedInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleInformationChanges = e => {
    setUpdatedInfo({
      ...updatedInfo,
      information: {
        ...updatedInfo.information,
        [e.target.name]: e.target.value,
      },
    });
  };

  const submit = () => {
    setEditing(false);
    updateUser(UPDATE_USER, updatedInfo, dispatch);
  };

  if (
    childProfileState.loaded &&
    childProfileState.hasProfiles &&
    finishedLoading
  ) {
    return (
      <Container className="root" maxWidth="lg">
        <h1 className="header">My Account</h1>

        <div className="container">
          <div className="left">
            {/* Account Info */}
            <div className="leftContainerOne">
              <Paper className={classes.paper}>
                <div className={classes.headerContainer}>
                  <h2 className="sectionHeader">Account Information</h2>
                  <div className="iconButton" onClick={toggleEditing}>
                    <FaPen />
                  </div>
                </div>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <div className="infoLabel">Email</div>
                  </Grid>
                  <Grid item xs={6}>
                    {!editing ? (
                      <div className="userInfo">
                        {childProfileState.user.email}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={updatedInfo.email}
                        name="email"
                        onChange={handleChanges}
                      />
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <div className="infoLabel">Name</div>
                  </Grid>
                  <Grid item xs={6}>
                    {!editing ? (
                      <div className="userInfo">
                        {childProfileState.user.first_name}{" "}
                        {childProfileState.user.last_name}
                      </div>
                    ) : (
                      <div>
                        <input
                          type="text"
                          value={updatedInfo.first_name}
                          name="first_name"
                          onChange={handleChanges}
                        />
                        <input
                          type="text"
                          value={updatedInfo.last_name}
                          name="last_name"
                          onChange={handleChanges}
                        />
                      </div>
                    )}
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <div className="infoLabel">Address</div>
                  </Grid>
                  <Grid item xs={6}>
                    {!editing ? (
                      <div className="userInfo">
                        {childProfileState.user.information.address}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={updatedInfo.information.address}
                        name="address"
                        onChange={handleInformationChanges}
                      />
                    )}
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
                  <p>New Profile</p>
                  <Link to="/addprofile" className="iconButton">
                    <FaPlus />
                  </Link>
                </div>

                {/* New Profile card. Later make into a component */}
                <div className="fireflyIcon">
                  <Icon
                    name="Firefly"
                    style={{
                      width: "40%",
                    }}
                  />
                </div>

                <hr className="style1" />
                {childProfileState.user.profiles.map(profile => {
                  return (
                    <ProfileCard
                      name={profile.first_name + " " + profile.last_name}
                      history={props.history}
                      key={profile.id}
                      id={profile.id}
                    />
                  );
                })}
              </div>
            </Paper>

            {!editing ? (
              <Link to="/startgame" className="button">
                <PrimaryButton text={"BACK TO GAME"} />
              </Link>
            ) : (
              <div className={classes.editButtons}>
                <div className={classes.button} onClick={toggleEditing}>
                  <SecondaryButton text="Cancel" />
                </div>
                <div className={classes.button} onClick={submit}>
                  <PrimaryButton text="Save" />
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    );
  } else {
    return <>Loading...</>;
  }
}
