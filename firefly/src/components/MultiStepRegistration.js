import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";

import RegistrationStepOne from "./RegistrationStepOne";

const MultiStepRegistration = ({ values, errors, touched }) => {

    const [step, setStep] = useState(1);
  
    return (
    step === 1?
      <RegistrationStepOne step={step}/> : 
      <div>
      <h1>Create a profile page</h1>
      <div className='registration-buttons'>
            <button className={step===1? 'none' : 'registration-buttons__back'} onClick={()=>setStep(step-1)}>
                Back
            </button>
 
            <button className='registration-buttons__next' onClick={()=>setStep(step+1)}>
                Next
            </button>
          </div>
      </div>
    );
  };
  
  export default MultiStepRegistration;