import React, { useContext } from "react";
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";

//Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import ProfileFly from "../../assets/icons/ProfileFly";

const ChooseProfilePage = () => {
  const [childProfileState, dispatch] = useContext(childContext);

  const useStyles = makeStyles({
    header: {
      fontSize: "34px",
      letterSpacing: "10px",
      fontWeight: "900",
      color: "#5B4EFF",
      display: "flex",
      marginBottom: "4.5%"
    },
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    cardContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    single: {
      width: "33%",
      display: "flex",
      justifyContent: "center",
      marginBottom: "50px"
    },
    card: {
      border: "2px solid #ABB0BA",
      borderRadius: "10px",
      boxShadow: "0px 3px #8F96A3",
      width: "200px"
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

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}> CHOOSE YOUR FIREFLY </div>
      <div className={classes.cardContainer}>
        {childProfileState.profiles.map(profile => (
          <div className={classes.single}>
            <Card className={classes.card}>
              <CardActionArea
                onClick={() =>
                  dispatch({ type: "UPDATE_SELECTED", payload: profile.id })
                }
              >
                <CardContent className={classes.cardContent}>
                  <div className={classes.text}>
                    <h2 className={classes.name}>{profile.name}</h2>
                  </div>
                  <div className={classes.flysize}>
                    <ProfileFly
                      color={profile.color}
                      accessory={profile.accessory}
                    />
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseProfilePage;
