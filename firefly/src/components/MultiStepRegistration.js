import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import RegistrationStepOne from "./RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree";
import CustomStepper from "./Steppers/CustomStepper";

const MultiStepRegistration = () => {

    const classes = makeStyles(theme => ({
        root: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        second: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        third:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        wrapper: {
            width:'100%'
        }
    }))();

    const [step, setStep] = useState(0);
    const [info, setInfo] = useState({firstName: "", lastName: "", address: "", city: "", state: "", zipCode: ""})
    const [profiles, setProfiles] = useState([
        {
          firstName: "",
          lastName: ""
        }
      ]);

      const updateStep = (operation) => {
        operation==='add' ? setStep(step+1) : setStep(step-1);
    }

    const handleInfoChanges = (e) => {
        setInfo({...info, [e.target.name]: e.target.value});
      }

  const handleChanges = (e, i) => {
    setProfiles(profiles.map((profile, idx) => {
      if(idx===i){
        return {...profile, [e.target.name]: e.target.value};
      } else {
        return profile;
      }
    }))
  }



    return (
    step === 0 ?
    <div className={classes.root}>
        <h1 className="registration-header"> Step 1: Account Information</h1>
        <CustomStepper activeStep={step}/>
        <div className={classes.wrapper}><RegistrationStepOne step={step} updateStep={updateStep} info={info} setInfo={setInfo} handleInfoChanges={handleInfoChanges}/></div>
    </div> : step === 1 ?
        <div className={classes.second}>
        <h1 className='registration-header'>Step 2: Add a Child Profile</h1>
        <CustomStepper activeStep={step}/>
        <div className={classes.wrapper}><RegistrationStepTwo step={step} updateStep={updateStep} profiles={profiles} setProfiles={setProfiles} handleChanges={handleChanges}/></div>
      </div> :  <div className={classes.third}>
      <h1 className='registration-header'>Step 3: How it Works</h1>
      <CustomStepper activeStep={step}/>
      <div className={classes.wrapper}><RegistrationStepThree step={step} updateStep={updateStep}/></div>
    </div>
    );
  };
  
  export default MultiStepRegistration;