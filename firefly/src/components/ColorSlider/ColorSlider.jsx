import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { loadPartialConfig } from "@babel/core";

export default function ColorSlider(props) {

    const [sliderValue, setSliderValue] = useState();

    useEffect(() => {
        setSliderValue(props.value);
    }, [props])

    const useStyles = makeStyles({
        root: {
            color: `hsl(${sliderValue},100%,50%)`,
            width: '100%',
        },
        track: {
            height: 11,
            borderRadius: 5,
            background: 'rgb(255,255,255)',
            opacity: 0,
        },
        rail: {
            height: 11,
            borderRadius: 5,
            background: `linear-gradient(to right, hsl(0,70%,50%),
            hsl(${(360) / 5},70%,50%),
            hsl(${(360 * 2) / 5},70%,50%),
            hsl(${(360 * 3) / 5},70%,50%),
            hsl(${(360 * 4) / 5},70%,50%),
            hsl(${360},70%,50%))`,
            opacity: '.7',
        },
        thumb: {
            height: 27,
            width: 27,
            backgroundColor: '#EEE',
            border: '4px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus,&:hover,&:active': {
                boxShadow: 'inherit',
            },
        },
        active: {
            height: 48,
            width: 48,
            marginTop: -18,
            marginLeft: -24,
            border: '8px solid currentColor',
        },
    })

    const classes = useStyles();

    const commitChange = (event, newValue) => {
        props.updateColor(newValue);
        setSliderValue(newValue);
    }

    return (
        <div style={{ width: '100%' }}>
            <div>
                    <Slider classes={classes} value={sliderValue} max={360} onChange={commitChange} onChangeCommitted={commitChange} aria-label="Color slider" />
            </div>
        </div>
    );
}
