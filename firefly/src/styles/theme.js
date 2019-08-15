const useTheme = {
  typography: {
    fontFamily: "'Nunito', sans-serif",
    htmlFontSize: 10,
    h1: {
      fontWeight: 900,
      fontSize: 34,
      letterSpacing: "7px",
      color: "#5B4Eff",
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "1.6rem",
      fontWeight: "700",
      color: "#52AB1A",
    },
    h4: {
      fontSize: "1.8rem",
      fontWeight: "600",
    },
    h6: {
      fontSize: "1.4rem",
    },
    button: {
      fontSize: "1.6rem",
      letterSpacing: ".1rem",
      fontWeight: "600",
    }
  },
  paper: {
    backgroundColor: "#FFF",
    border: "0",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.5)"
  },
  input: {
    border: "none",
    background: "#E2F5D6",
    padding: "2%",
    borderRadius: ".5rem",
    "&:focus": {
      outline: "none",
    }
  },
  headerMargin: {
    marginTop: "6%",
    marginBottom: "5.5%",
  },
  primaryButton: {

  },
  secondaryButton: {
    backgroundColor: "#FFF",
    border: "2px solid #ABB0BA",
    color: "#4AA810",
    textTransform: "uppercase",
    borderRadius: "1rem",
    boxShadow: "0px 3px #8F96A3",
    cursor: "pointer",
    transition: "all 25ms ease-in-out",
    "&:active": {
      boxShadow: "none",
      margin: "3px 0px -3px 0px"
    }
  },
  clickable: {
    cursor: "pointer",
    transition: "all 25ms ease-in-out",
    "&:active": {
      boxShadow: "none",
      marginTop: "3px",
      marginBottom: "-3px",
    },
  },
}

export default useTheme;