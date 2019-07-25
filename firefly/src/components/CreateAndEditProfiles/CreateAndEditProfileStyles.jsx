import { makeStyles } from '@material-ui/core';

const createProfileStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        fontFamily: "'Nunito', sans-serif",
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
        width: "60%",
        maxHeight: "40%",
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
        width: "68%",
        justifyContent: "space-between",
        alignItems: "center",
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
            }
        }
    },
    delete: {
        position: "fixed",
        marginTop: "-3rem",
        marginLeft: "-1.2rem",
        fontWeight: '600',
        fontFamily: "'Nunito', sans-serif",
        borderRadius: "7px",
        border: "none",
        boxShadow: "0px 2px #A30F2D",
        padding: ".6rem 1rem",
        letterSpacing: "1px",
        fontSize: "1.4rem",
        background: "#dc143c",
        color: "#FFF",
        "&:active": {
            boxShadow: "none",
            marginTop: "-2.8rem",
        },
    },
});

export default createProfileStyles;