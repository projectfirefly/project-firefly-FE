import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

export default function ColorSlider() {

    const [value, setValue] = React.useState(80);
    const [color, setColor] = React.useState(80);

    const PrettoSlider = withStyles({
        root: {
            color: `hsl(${color*3.6},100%,50%)`,
            height: 8,
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
        active: {},
        track: {
            height: 8,
            borderRadius: 4,
        },
        rail: {
            height: 8,
            borderRadius: 4,
        },
    })(Slider);

    // const classes = useStyles();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleDrop = (event, newColor) => {
        setColor(newColor);
    }

    return (
        <div >
            <Typography id="continuous-slider" gutterBottom>
                Color
            </Typography>
            <PrettoSlider value={color} onChangeCommitted={handleDrop} aria-label="Pretto slider" />
        </div>
    );
}