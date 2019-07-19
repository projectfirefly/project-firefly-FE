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

function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = x => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
