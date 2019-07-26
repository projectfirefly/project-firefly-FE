import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import ApolloClient from "apollo-boost";

import Firefly from "./../images/Logo.png"

import "./../styles/RegistrationStepTwo.scss";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes} from '@fortawesome/free-solid-svg-icons'

library.add(faTimes)

const { gql } = require("apollo-boost");

const ADD_KID = gql`
  mutation addKid($input: KidInput!) {
    addKid(input: $input) {
      id
      first_name
    }
  }
`;



const AddChildAccount = ({ values, errors, touched, clickedClose, idx, profile, profiles, handleChanges }) => {

    // const handleChange = async (e, idx) => {
    //     const newProfiles = await profiles.map((profile, i) => {
    //         if(i === idx) {
    //             return {
    //                 ...profile,
    //                 [e.target.name]: e.target.value
    //             }
    //         }
    //         return profile
    //     })
    //     setProfiles(newProfiles)
    // }
    // console.log(profiles)

    const handleChange = (e) => {
        handleChanges(e, idx);
    }

return(
    <div className="registration-forms-box">
        <FontAwesomeIcon icon="times" className={profiles.length===1? 'none' : 'close-icon' } onClick={() => clickedClose(idx)}/>
          <Form className="registration-forms-box__formik">
          <div className='registration-forms-field-container'>
            <div className='registration-firefly-container'>
                <img className='registration-firefly-container__image' src={Firefly} alt='firefly'/>
            </div>
            <div className="registration-forms-field-two">
              <div className='registration-forms-field-two__field'>
              <h2 className="registration-forms-field-title-two">First Name</h2>
              <Field
                type="text"
                name="firstName"
                className="registration-forms-box__field"
                value={profile.firstName}
                onChange={(e)=>handleChange(e)}
              />
              {touched.firstName && errors.firstName && (
                <p className="error-step2">*Required</p>
              )}
              </div>
              <div className='registration-forms-field-two__field'>
              <h2 className="registration-forms-field-title-two">Last Name</h2>
              <Field
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={(e)=>handleChange(e)}
                className="registration-forms-box__field"
              />
              {touched.lastName && errors.lastName && (
                <p className="error-step2">*Required</p>
              )}
                </div>
              </div>
            </div>
          </Form>
        </div>   
    )
}

const AddChildProfile = withFormik({
    mapPropsToValues({ firstName, lastName }) {
      return {
        firstName: firstName || "",
        lastName: lastName || ""
      };
    },
  
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required(),
      lastName: Yup.string().required()
    }),
  
    handleSubmit(values) {
      const client = new ApolloClient({
        uri: "http://localhost:3300"
      });
      client
        .mutate({
          mutation: ADD_KID,
          variables: {
            input: {
              first_name: values.firstName,
              last_name: values.lastName
            }
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  })(AddChildAccount);

export default AddChildProfile;