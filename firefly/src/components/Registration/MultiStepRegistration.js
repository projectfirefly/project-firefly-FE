import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import RegistrationStepOne from "./RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree";
import CustomStepper from "../Steppers/CustomStepper";
import { Typography } from "@material-ui/core";

const MultiStepRegistration = () => {
  const classes = makeStyles(theme => ({
    app: {},
    header: {
      ...theme.headerMargin,
      marginBottom: "2rem"
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f6f5ff",
      height: "100vh"
    },
    second: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f6f5ff",
      height: "100vh"
    },
    third: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f6f5ff",
      height: "100vh"
    },
    wrapper: {
      width: "100%"
    }
  }))();

  const [step, setStep] = useState(0);
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zipCode: ""
  });
  const [profiles, setProfiles] = useState([
    {
      first_name: "",
      last_name: ""
    }
  ]);

  const updateStep = operation => {
    operation === "add" ? setStep(step + 1) : setStep(step - 1);
  };

  const handleStepOneChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleChanges = (e, i) => {
    setProfiles(
      profiles.map((profile, idx) => {
        if (idx === i) {
          return { ...profile, [e.target.name]: e.target.value };
        } else {
          return profile;
        }
      })
    );
  };

  return step === 0 ? (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1"> Step 1: Account Information</Typography>
      </div>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <RegistrationStepOne
          step={step}
          updateStep={updateStep}
          info={info}
          handleStepOneChange={handleStepOneChange}
        />
      </div>
    </div>
  ) : step === 1 ? (
    <div className={classes.second}>
      <Typography variant="h1" className={classes.header}>
        Step 2: Add a Child Profile
      </Typography>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <RegistrationStepTwo
          step={step}
          updateStep={updateStep}
          profiles={profiles}
          setProfiles={setProfiles}
          handleChanges={handleChanges}
        />
      </div>
    </div>
  ) : (
    <div className={classes.third}>
      <Typography variant="h1" className={classes.header}>
        Step 3: How it Works
      </Typography>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <RegistrationStepThree
          step={step}
          updateStep={updateStep}
          profiles={profiles}
          info={info}
        />
      </div>
    </div>
  );
};

export default MultiStepRegistration;
