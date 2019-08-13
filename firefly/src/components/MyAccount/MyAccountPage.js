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
import accountStyles from "./MyAccountStyles";

//context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_USER } from "../../context/ChildProfiles/ChildProfileStore";
import { updateUser } from "../../utils/firebaseInteractions";
import { flexbox } from "@material-ui/system";

export default function ProfileView(props) {
  const classes = accountStyles();

  const [editing, setEditing] = useState(false);

  const [finishedLoading, setFinishedLoading] = useState(false);

  const [childProfileState, dispatch] = useContext(childContext);

  const [updatedInfo, setUpdatedInfo] = useState({
    email: "",
    first_name: "",
    last_name: "",
    information: {
      address: ""
    }
  });

  useEffect(() => {
    if (
      childProfileState.loaded &&
      childProfileState.hasProfiles &&
      !finishedLoading
    ) {
      setUpdatedInfo({
        ...childProfileState.user
      });
      setFinishedLoading(true);
    }
  }, [childProfileState]);

  const toggleEditing = () => {
    setEditing(!editing);
    setUpdatedInfo({
      ...childProfileState.user
    });
    console.log(process.env.REACT_APP_SOMETHING);
  };

  const handleChanges = e => {
    setUpdatedInfo({
      ...updatedInfo,
      [e.target.name]: e.target.value
    });
  };

  const handleInformationChanges = e => {
    setUpdatedInfo({
      ...updatedInfo,
      information: {
        ...updatedInfo.information,
        [e.target.name]: e.target.value
      }
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
      <Container className={classes.root} maxWidth="lg">
        <h1 className={classes.header}>My Account</h1>

        <div className={classes.container}>
          <div className={classes.left}>
            {/* Account Info */}
            <div className={classes.leftContainerOne}>
              <Paper className={classes.paper}>
                <div className={classes.headerContainer}>
                  <h2 className={classes.sectionHeader}>Account Information</h2>
                  <div className={classes.iconButton} onClick={toggleEditing}>
                    <FaPen />
                  </div>
                </div>
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <div className={classes.infoLabel}>Email</div>
                  </Grid>
                  <Grid item xs={6}>
                    {!editing ? (
                      <div className={classes.userInfo}>
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
                    <div className={classes.infoLabel}>Name</div>
                  </Grid>
                  <Grid item xs={6}>
                    {!editing ? (
                      <div className={classes.userInfo}>
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
                    <div className={classes.infoLabel}>Address</div>
                  </Grid>
                  <Grid item xs={6}>
                    {!editing ? (
                      <div className={classes.userInfo}>
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
            <div className={classes.leftContainerTwo}>
              <Paper className={classes.paper}>
                <h2 className={classes.sectionHeader}> Payment Information</h2>
                <br />
                <br />
                <br />
              </Paper>
            </div>
            {/* Educational Research */}
            <div className={classes.leftContainer}>
              <Paper className={classes.paper}>
                <h2 className={classes.sectionHeader}>
                  Educational Research Participation
                </h2>
                <div className={classes.researchSection}>
                  <div className={classes.checkboxContainer}>
                    <label className={classes.checkboxLabel}>
                      <input type={classes.checkbox} />
                      <span className={classes.checkboxCustom}> {""}</span>
                    </label>
                  </div>
                  <p>I would like to participate in the Educational Research</p>
                </div>
                <br />
              </Paper>
            </div>
          </div>

          <div className={classes.rightCards}>
            <Paper className={classes.paper}>
              <h2 className={classes.sectionHeaderRight}>Manage Profile</h2>
              <div className={classes.fireflyContainer}>
                <div className={classes.edit}>
                  <p>New Profile</p>
                  <Link to="/addprofile" className={classes.iconButton}>
                    <FaPlus />
                  </Link>
                </div>

                <div className={classes.fireflyIcon}>
                  <Icon
                    name="Firefly"
                    style={{
                      width: "40%"
                    }}
                  />
                </div>

                <hr className={classes.style1} />
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
              <Link to="/startgame" className={classes.button}>
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
