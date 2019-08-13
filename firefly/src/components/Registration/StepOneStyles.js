import { makeStyles } from "@material-ui/core/styles";

const stepOneStyles = makeStyles({
  registrationHeader: {
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "34px",
    letterSpacing: "7px",
    fontWeight: "900",
    color: "#5b4eff",
    marginBottom: "10px"
  },
  registrationFormsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  registrationFormsField: {
    marginTop: "30px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  registrationFormsFieldSmall: {
    marginTop: "30px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  registrationFormsTwoField: {
    display: "flex",
    justifyContent: " space-between",
    width: "100%"
  },
  registrationFormsBox: {
    width: " 714px !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    backgroundColor: "white",

    "&.fieldSmall": {
      display: "flex",
      justifyContent: "center",
      width: "80%",
      height: " 44px !important",
      color: " #152f04",
      fontSize: "1.2rem",
      fontWeight: "900",
      letterSpacing: "2px",
      paddingLeft: "4%",
      borderRadius: "10px",
      outline: "none",
      backgroundColor: "#e2f5d6",
      border: "none"
    },

    "&.formik": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },

    // "&.formik"
    "&.field ": {
      display: "flex",
      justifyContent: "center",
      width: "89%",
      height: " 44px !important",
      color: "#152f04",
      fontSize: "1.2rem",
      fontWeight: "900",
      letterSpacing: "2px",
      paddingLeft: "2%",
      borderRadius: "10px",
      outline: "none",
      backgroundColor: "#e2f5d6",
      border: "none"
    },

    " &.formikButton": {
      backgroundColor: "#4aa810",
      color: "#e2f5d6",
      padding: "0.8rem",
      textTransform: "uppercase",
      fontSize: "1.3rem",
      borderRadius: "10px",
      boxShadow: "0px 3px #3e8c0d",
      cursor: "pointer",
      opacity: "0.92",
      transition: "opacity 0.25s ease-in-out",
      letterSpacing: "1px",
      marginBottom: "20px",
      width: "80.5%",
      justifyContent: "center",

      "&:active": {
        opacity: "1",
        boxShadow: "none",
        margin: "3px 0px 17px 0px"
      },

      " &:focus": {
        outline: "none"
      }
    }
  },
  error: {
    color: " #f44336",
    fontSize: "0.75rem",
    minHeight: "1em",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: " 1em",
    letterSpacing: "0.03333em",
    marginLeft: "12%",
    alignSelf: " flex-start",
    marginBottom: "0px"
  },

  errorBig: {
    color: " #f44336",
    fontSize: "0.75rem",
    minHeight: "1em",
    textAlign: "left",
    fontWeight: "400",
    lineHeight: "1em",
    letterSpacing: " 0.03333em",
    marginLeft: "6%",
    alignSelf: "flex-start",
    marginBottom: "0px"
  },
  registrationFormsFieldTitle: {
    margin: "0px",
    textTransform: "uppercase",
    alignSelf: "flex-start",
    marginLeft: "10%",
    fontSize: "1rem",
    fontWeight: "600",
    letterSpacing: "2px",
    marginBottom: "3px",
    color: "#4aa810"
  },
  registrationFormsFieldTitleBig: {
    margin: "0px",
    textTransform: "uppercase",
    alignSelf: "flex-start",
    marginLeft: "5%",
    fontSize: "16px",
    fontWeight: "600",
    letterSpacing: "2px",
    marginBottom: "3px",
    color: " #4aa810"
  },
  bottomButtons: {
    marginBottom: "50px"
  },
  topButtons: {
    marginTop: "15px"
  },
  none: {
    visibility: "hidden"
  },
  registrationButtons: {
    width: "714px !important",
    display: "flex",
    justifyContent: "space-between",
    marginTop: " 23px !important",

    "&.back": {
      backgroundColor: " #fff",
      border: "2px solid #abb0ba",
      color: "#4aa810",
      padding: "0.8rem",
      textTransform: "uppercase",
      fontSize: "1.3rem",
      borderRadius: "10px",
      boxShadow: "0px 3px #8f96a3",
      cursor: "pointer",
      opacity: "0.92",
      transition: "opacity 0.25s ease-in-out",
      letterSpacing: "1px",
      width: "25%",
      justifyContent: "center",
      "&:active ": {
        opacity: "1",
        boxShadow: "none",
        margin: "3px 0px -3px 0px"
      },

      "&:focus ": {
        outline: "none"
      }
    },

    "&.next": {
      backgroundColor: "#4aa810",
      color: "#e2f5d6",
      padding: "0.8rem",
      textTransform: "uppercase",
      fontSize: "1.3rem",
      border: "none",
      borderRadius: "10px",
      boxShadow: "0px 3px #3e8c0d",
      cursor: "pointer",
      opacity: " 0.92",
      transition: " opacity 0.25s ease-in-out",
      letterSpacing: "1px",
      width: "25%",
      justifyContent: "center",
      "&:active ": {
        opacity: "1",
        boxShadow: "none",
        margin: "3px 0px -3px 0px"
      },

      "&:focus": {
        outline: "none"
      }
    },
    "&.next-disabled ": {
      backgroundColor: "#e3e5e8",
      color: " #ffffff",
      padding: " 0.8rem",
      textTransform: "uppercase",
      fontSize: "1.3rem",
      border: "none",
      borderRadius: "10px",
      boxShadow: "0px 3px #c7cbd1",
      cursor: "pointer",
      opacity: "0.92",
      transition: "opacity 0.25s ease-in-out",
      letterSpacing: "1px",
      width: "25%",
      justifyContent: "center",
      "&:focus": {
        outline: "none"
      }
    }
  }
});

export default stepOneStyles;
