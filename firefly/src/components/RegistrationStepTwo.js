import React from "react";
import "./../styles/RegistrationStepTwo.scss";
import RegistrationAddChild from "./RegistrationAddChild";

const AddChild = ({
  step,
  updateStep,
  handleChanges,
  profiles,
  setProfiles
}) => {
  const clickedClose = idx => {
    const current = profiles.filter((_, index) =>
      index === idx ? false : true
    );
    setProfiles(current);
  };

  return (
    <div className="registration-container">
      <div className="registration-forms-container">
        {profiles.map((profile, idx) => {
          return (
            <RegistrationAddChild
              clickedClose={clickedClose}
              idx={idx}
              profile={profile}
              profiles={profiles}
              setProfiles={setProfiles}
              handleChanges={handleChanges}
            />
          );
        })}

        <div
          className="registration-forms-box-2 registration-add-child-profile"
          onClick={() =>
            setProfiles([...profiles, { first_name: "", last_name: "" }])
          }
        >
          <h2 className="registration-add-child-profile__text">
            + Add another child profile
          </h2>
        </div>

        <div className="registration-buttons">
          <button
            className={step === 0 ? "none" : "registration-buttons__back"}
            onClick={() => updateStep("subtract")}
          >
            Back
          </button>
          <button
            className={
              profiles
                .map(
                  profile =>
                    profile.first_name !== "" && profile.last_name !== ""
                )
                .includes(false)
                ? "registration-buttons__next-disabled"
                : "registration-buttons__next"
            }
            onClick={
              profiles[0].first_name === "" || profiles[0].last_name === ""
                ? null
                : () => updateStep("add")
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddChild;
