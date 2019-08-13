import React, { useContext } from "react";
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { Link } from "react-router-dom";

//Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

//Components
import ProfileFly from "../../assets/icons/ProfileFly";

const ChooseProfilePage = props => {
  const [childProfileState, dispatch] = useContext(childContext);

  console.log("Choose Profile State", childProfileState);

  const useStyles = makeStyles({
    header: {
      fontSize: "34px",
      letterSpacing: "10px",
      fontWeight: "900",
      color: "#5B4EFF",
      display: "flex",
      marginBottom: "4.5%",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    },
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 4.7%"
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "center",
      margin: "0 10%"
    },
    backButtonContainer: {
      display: "flex",
      justifyContent: "flex-start",
      margin: "2% 10% 0",
      padding: "0 4%"
    },

    backButtonStyle: {
      textDecoration: "none",
      backgroundColor: "#FFF",
      border: "2px solid #ABB0BA",
      color: "#4aa810",
      padding: "0.8rem",
      textTransform: "uppercase",
      fontSize: "1.3rem",
      borderRadius: "10px",
      fontWeight: "700",
      boxShadow: "0px 3px #8f96a3",
      cursor: "pointer",
      opacity: "0.92",
      transition: "opacity .25s ease-in-out",
      letterSpacing: "1px",
      width: "21.1%",
      display: "flex",
      justifyContent: "center",

      "&:active": {
        opacity: "1",
        boxShadow: "none",
        margin: "3px 0px -3px 0px"
      },

      "&:focus": {
        outline: "none"
      }
    },
    single: {
      width: "33%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "6%"
    },
    card: {
      border: "2px solid #ABB0BA",
      borderRadius: "10px",
      boxShadow: "0px 3px #8F96A3",
      width: "68%"
    },
    cardContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 auto"
    },
    text: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "0",
      paddingTop: "10px"
    },
    name: {
      fontSize: "1.5rem",
      color: "#243d14"
    },
    flysize: {
      // width: "100%",
      // height: "100%"
    }
  });
  //
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}> CHOOSE YOUR FIREFLY </div>
      <div className={classes.cardContainer}>
        {childProfileState.user && childProfileState.user.profiles ? (
          childProfileState.user.profiles.map(profile => (
            <div className={classes.single}>
              <Card className={classes.card}>
                <CardActionArea
                  onClick={async () => {
                    await dispatch({
                      type: "UPDATE_SELECTED",
                      payload: profile.id
                    });
                    props.history.push("/myfirefly");
                  }}
                >
                  <CardContent className={classes.cardContent}>
                    <div className={classes.text}>
                      <h2 className={classes.name}>{profile.first_name}</h2>
                    </div>
                    <div className={classes.flysize}>
                      <ProfileFly
                        color={profile.avatar.color}
                        accessory={profile.avatar.accessory}
                      />
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className={classes.backButtonContainer}>
        <Link to="/startgame" className={classes.backButtonStyle}>
          Back
        </Link>
      </div>
    </div>
  );
};

export default ChooseProfilePage;
