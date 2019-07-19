import React from "react";
import Icon from "../../assets/icons";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const Chooser = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  max-width: 300px;
`;

export default function ChooseAvatar() {
  const [value, setValue] = React.useState(150);

  const useStyles = makeStyles({
    root: {
      color: `hsl(${value},100%,50%)`
    },
    track: {
      height: 8,
      borderRadius: 5,
      display: "none"
    },
    rail: {
      height: 8,
      borderRadius: 5,
      background: `linear-gradient(to right, hsl(0,70%,50%),
            hsl(${360 / 5},70%,50%),
            hsl(${(360 * 2) / 5},70%,50%),
            hsl(${(360 * 3) / 5},70%,50%),
            hsl(${(360 * 4) / 5},70%,50%),
            hsl(${360},70%,50%))`,
      opacity: ".7"
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "currentColor",
      border: "5px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&:active": {
        boxShadow: "inherit"
      }
    },
    active: {
      height: 48,
      width: 48,
      marginTop: -18,
      marginLeft: -24
    },
    containerDiv: {
      padding: "30px",
      backgroundColor: "#454a54"
    }
  });

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Chooser>
      <Icon
        name="Firefly"
        width={300}
        viewBox={"0 0 1250 1224"}
        lighttopFill={`hsl(${value},100%,35%)`}
        lightmidFill={`hsl(${value},100%,45%)`}
        lightbottomFill={`hsl(${value},100%,55%)`}
        shineStroke={`hsl(${value},100%,55%)`}
      />
      <Slider
        classes={classes}
        value={value}
        max="360"
        onChange={handleChange}
        aria-label="Pretto slider"
      />
    </Chooser>
  );
}
