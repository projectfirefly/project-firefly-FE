import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export default function ColorSlider() {

    const [value, setValue] = React.useState(150);

    const useStyles = makeStyles({
        root: {
            color: `hsl(${value},100%,50%)`,
        },
        track: {
            height: 8,
            borderRadius: 5,
        },
        rail: {
            height: 8,
            borderRadius: 5,
        },
        thumb: {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            marginTop: -8,
            marginLeft: -12,
            '&:focus,&:hover,&$active': {
                boxShadow: 'inherit',
            },
        },
    })

    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div >
            <Typography id="continuous-slider" gutterBottom>
                Color
            </Typography>
            <Slider classes={classes} value={value} max="360" onChange={handleChange} aria-label="Pretto slider" />
        </div>
    );
}