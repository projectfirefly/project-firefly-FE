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
      fontSize: "1.6rem",
      fontWeight: "600",
    },
    h6: {
      fontSize: "1.4rem",
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
  }
}

export default useTheme;