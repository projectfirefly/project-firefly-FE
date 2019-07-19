import React from "react";
import Icon from "../../assets/icons";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const Chooser = styled.div`
  margin: 0 auto;
  margin-top: 50px;
`;

export default function ChooseAvatar() {
  const [value, setValue] = React.useState(150);

  const useStyles = makeStyles({
    root: {
      color: `hsl(${value},100%,50%)`
    },
    track: {
      height: 8,
      borderRadius: 5
    },
    rail: {
      height: 8,
      borderRadius: 5
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      marginTop: -8,
      marginLeft: -12,
      "&:focus,&:hover,&:active": {
        boxShadow: "inherit"
      }
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
        width={200}
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
