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
    h2: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#52AB1A",
      letterSpacing: ".2rem",
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
      textDecoration: "none",
    }
  },
  paper: {
    backgroundColor: "#FFF",
    border: "0",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.5)"
  },
  input: {
    fontFamily: "'Nunito', sans-serif",
    fontWeight: "900",
    fontSize: "1.6rem",
    border: "none",
    background: "#E2F5D6",
    padding: "2%",
    borderRadius: ".5rem",
    "&:focus": {
      outline: "none",
    }
  },
  headerMargin: {
    marginTop: "5rem",
    marginBottom: "4rem",
  },
  primaryButton: {
    backgroundColor: "#4AA810",
    color: "#E2F5D6",
    textTransform: "uppercase",
    fontSize: "1.6rem",
    textDecoration: "none",
    border: "none",
    borderRadius: "1rem",
    boxShadow: "0px 3px #3E8C0D",
    cursor: "pointer",
    transition: "all 25ms ease-in-out",
    letterSpacing: "1px",
    display: "flex",
    justifyContent: "center",
    "&:active": {
      boxShadow: "none",
      margin: "3px 0px -3px 0px",
    },
    "&:focus": {
      outline: "none",
    }
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
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    "&:active": {
      boxShadow: "none",
      margin: "3px 0px -3px 0px"
    },
    "&:focus": {
      outline: "none",
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