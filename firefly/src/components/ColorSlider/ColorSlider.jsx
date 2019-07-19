import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export default function ColorSlider(props) {

    const [value, setValue] = React.useState(props.value);

    const useStyles = makeStyles({
        root: {
            color: `hsl(${value},100%,50%)`,
            width: '100%',
        },
        track: {
            height: 8,
            borderRadius: 5,
            background: 'rgb(255,255,255)',
            opacity: 0,
        },
        rail: {
            height: 8,
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
            height: 24,
            width: 24,
            backgroundColor: 'currentColor',
            border: '5px solid currentColor',
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
        },
    })

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const commitChange = (event, newValue) => {
        props.updateColor(newValue);
    }

    return (
        <div style={{width: '100%'}}>
            <Typography id="continuous-slider" gutterBottom>
                Color
            </Typography>
            <div>
                <Slider classes={classes} value={value} max={360} onChange={handleChange} onChangeCommitted={commitChange} aria-label="Pretto slider" />
            </div>
        </div>
    );
}