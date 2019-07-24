import React, { useState } from "react";

import { makeStyles } from '@material-ui/core/styles';

import RegistrationStepOne from "./RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree";
import CustomStepper from "./Steppers/CustomStepper";

const MultiStepRegistration = () => {

    const classes = makeStyles(theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
        },
        wrapper: {
            width:'100%'
        }
    }))();

    const [step, setStep] = useState(0);
  
    const updateStep = (operation) => {
        operation==='add' ? setStep(step+1) : setStep(step-1);
    }

    return (
    step === 0 ?
    <div className={classes.root}>
        <h1 className="registration-header"> Step 1: Account Information</h1>
        <CustomStepper activeStep={step}/>
        <div className={classes.wrapper}><RegistrationStepOne step={step} updateStep={updateStep}/></div>
    </div> : step === 1 ?
        <div className={classes.root}>
        <h1 className='registration-header'>Step 2: Add a Child Account</h1>
        <CustomStepper activeStep={step}/>
        <div className={classes.wrapper}><RegistrationStepTwo step={step} updateStep={updateStep}/></div>
      </div> :  <div className={classes.root}>
      <h1 className='registration-header'>Step 3: How it Works</h1>
      <CustomStepper activeStep={step}/>
      <div className={classes.wrapper}><RegistrationStepThree step={step} updateStep={updateStep}/></div>
    </div>
    );
  };
  
  export default MultiStepRegistration;