import { makeStyles } from '@material-ui/core';

const createProfileStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        fontFamily: "'Nunito', sans-serif",
    },
    sizingContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "60%",
        // height: "100vh",
    },
    header: {
        color: "#5b4eff",
        fontWeight: "900",
        letterSpacing: "5px",
        fontSize: "1.6rem",
        marginBottom: "7%",
    },
    card: {
        display: "flex",
        width: "100%",
        background: "white",
        borderRadius: "20px",
        boxShadow: "0px 2px 4px rgba(0,0,0,.5)",
        // boxShadow: "0px 2px 4px rgba(0,0,0,.5)",
        padding: "7% 4%",
    },
    firefly: {
        width: "50%",
        margin: "2%",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "50%",
        alignItems: "center",
        justifyContent: "center",
    },
    firstName: {
        marginBottom: "15%",
        width: "100%",
    },
    lastName: {
        width: "100%",
    },
    h2: {
        margin: 0,
        padding: 0,
        textTransform: "uppercase",
        fontSize: "1rem",
        fontWeight: "600",
        letterSpacing: "2px",
        marginBottom: "3px",
        color: "#4AA810",
        marginLeft: "1%",
    },
    field: {
        display: "flex",
        background: "#E2F5D6",
        border: "none",
        borderRadius: "10px",
        width: "90%",
        padding: "4%",
        marginTop: "2%",
        color: "#152F04",
        fontFamily: "'Nunito', sans-serif",
        fontSize: "1.2rem",
        fontWeight: "900",
        letterSpacing: "2px",
    },
    buttonContainer: {
        display: "flex",
        marginTop: "7%",
        height: "5%",
        width: "108%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "3px",
    },
    button: {
        fontWeight: '600',
        fontFamily: "'Nunito', sans-serif",
        borderRadius: "7px",
        border: "2px solid #ABB0BA",
        boxShadow: "0px 2px #8F96A3",
        width: "25%",
        padding: "8px 0",
        letterSpacing: "1px",
        "&.cancel": {
            background: "#fff",
            color: "#4aa810",
            "&:active": {
                boxShadow: "none",
                marginTop: "3px",
                marginBottom: "-3px",
            }
        },
        "&.save": {
            background: "#4aa810",
            color: "#fff",
            border: "none",
            boxShadow: "0px 3px #3E8C0D",
            "&:active": {
                boxShadow: "none",
                marginTop: "3px",
                marginBottom: "-3px",
            }
        }
    },
    delete: {
        position: "absolute",
        marginTop: "-2%",
        fontWeight: '600',
        fontFamily: "'Nunito', sans-serif",
        borderRadius: "7px",
        border: "2px solid #ABB0BA",
        boxShadow: "0px 2px #8F96A3",
        padding: ".2rem .5rem",
        letterSpacing: "1px",
        fontSize: "calc(1.2rem + .5vw)",
        background: "#fff",
        color: "#ABB0BA",
        "&:active": {
            boxShadow: "none",
            marginTop: "-1.7%",
        },
    },
    dialogPaper: {
        maxWidth: "80%",
        borderRadius: "20px",
        padding: "2% 1%",
        
    },
    dialogTitle: {
        color: "#5b4eff",
        fontFamily: "'Nunito', sans-serif",
        fontWeight: "700",
        fontSize: "28px",
    },
    dialogAction: {
        justifyContent: "space-between"
    },
    dialogButtonContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
    },
    dialogButtons: {
        fontWeight: '700',
        fontFamily: "'Nunito', sans-serif",
        borderRadius: "7px",
        border: "2px solid #ABB0BA",
        boxShadow: "0px 2px #8F96A3",
        width: "25%",
        padding: "8px 0",
        letterSpacing: "1px",
        fontSize: "16px",
        "&.cancel": {
            background: "#fff",
            color: "#4aa810",
            "&:active": {
                boxShadow: "none",
                marginTop: "3px",
                marginBottom: "-3px",
            }
        },
        "&.remove": {
            background: "#dc143c",
            color: "#fff",
            border: "none",
            boxShadow: "0px 3px #A30F2D",
            "&:active": {
                boxShadow: "none",
                marginTop: "3px",
                marginBottom: "-3px",
            }
        }
    }
}));

export default createProfileStyles;