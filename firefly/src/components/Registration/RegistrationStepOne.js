import React from "react";

import "../../styles/RegistrationStepOne.scss";
// import stepOneStyles from "./StepOneStyles";

const RegistrationStepOne = ({
  handleStepOneChange,
  step,
  updateStep,
  info
}) => {
  return (
    <div className="registration-container">
      <div className="registration-forms-container">
        <div className="registration-forms-box">
          <form className="registration-forms-box__formik">
            <div className="registration-forms-two-field top-buttons">
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">First Name</h2>
                <input
                  type="text"
                  name="first_name"
                  className="registration-forms-box__field-small"
                  onChange={handleStepOneChange}
                  value={info.first_name}
                />
                <p className={info.first_name === "" ? "error" : "none"}>
                  *Required
                </p>
              </div>
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">Last Name</h2>
                <input
                  name="last_name"
                  type="text"
                  className="registration-forms-box__field-small"
                  onChange={handleStepOneChange}
                  value={info.last_name}
                />
                <p className={info.last_name === "" ? "error" : "none"}>
                  *Required
                </p>
              </div>
            </div>
            <div className="registration-forms-field">
              <h2 className="registration-forms-field-title-big">Address</h2>
              <input
                name="address"
                className="registration-forms-box__field"
                type="text"
                value={info.address}
                onChange={handleStepOneChange}
              />
              <p className={info.address === "" ? "error-big" : "none"}>
                *Required
              </p>
            </div>
            <div className="registration-forms-field">
              <h2 className="registration-forms-field-title-big">City</h2>
              <input
                name="city"
                className="registration-forms-box__field"
                type="text"
                value={info.city}
                onChange={handleStepOneChange}
              />
              <p className={info.city === "" ? "error-big" : "none"}>
                *Required
              </p>
            </div>
            <div className="registration-forms-two-field bottom-buttons">
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">State</h2>
                <input
                  name="state"
                  className="registration-forms-box__field-small"
                  onChange={handleStepOneChange}
                  type="text"
                  value={info.state}
                />
                <p className={info.state === "" ? "error" : "none"}>
                  *Required
                </p>
              </div>
              <div className="registration-forms-field-small">
                <h2 className="registration-forms-field-title">Zip Code</h2>
                <input
                  name="zipCode"
                  className="registration-forms-box__field-small"
                  onChange={handleStepOneChange}
                  type="text"
                  value={info.zipCode}
                />
                <p className={info.zipCode === "" ? "error" : "none"}>
                  *Required
                </p>
              </div>
            </div>
          </form>
        </div>
        <div className="registration-buttons">
          <button
            className={step === 0 ? "none" : "registration-buttons__back"}
          >
            Back
          </button>

          <button
            className={
              info.first_name !== "" &&
              info.last_name !== "" &&
              info.address !== "" &&
              info.city !== "" &&
              info.state !== "" &&
              info.zipCode !== ""
                ? "registration-buttons__next"
                : "registration-buttons__next-disabled"
            }
            onClick={
              info.first_name !== "" &&
              info.last_name !== "" &&
              info.address !== "" &&
              info.city !== "" &&
              info.state !== "" &&
              info.zipCode !== ""
                ? () => {
                    updateStep("add");
                  }
                : null
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStepOne;
