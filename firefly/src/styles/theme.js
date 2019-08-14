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
}

export default useTheme;