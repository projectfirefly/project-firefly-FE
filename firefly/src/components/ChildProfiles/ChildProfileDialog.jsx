import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

import { context } from '../../context/ChildProfiles/ChildProfileStore'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
});

// function SimpleDialog(props) {
//     const classes = useStyles();
//     const { onClose, selectedValue, ...other } = props;

//     return (
//         <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" {...other}>
//             <DialogTitle id="simple-dialog-title">Choose Child Profile</DialogTitle>
//         </Dialog>
//     );
// }

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func,
//     open: PropTypes.bool,
//     selectedValue: PropTypes.string,
// };

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [childProfileState, dispatch] = useContext(context);

    function handleClickOpen() {
        setOpen(true);
        console.log(childProfileState);
    }

    const handleClose = value => {
        setOpen(false);
        // setSelectedProfile(value);
    }

    return (
        <div>
            {/* <Typography variant="subtitle1">Selected: {selectedValue.name}</Typography> */}
            <h1> Selected Kid: {childProfileState.profiles.find((profile) => {
                console.log(childProfileState.selected.id === profile.id);
                return childProfileState.selected.id === profile.id;
            }).name}</h1>
            {childProfileState.profiles.map((kiddo) => {
                return (
                    <>
                        <h1 style={{ color: kiddo.color }}>{kiddo.name}</h1>
                        <Button variant="contained" color="secondary" onClick={() => {
                            dispatch({ type: 'UPDATE_COLOR', payload: {
                                ...kiddo,
                                color: 'blue',
                            } })
                        }
                        }>
                            UPDATE COLOR
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => {
                            dispatch({ type: 'UPDATE_SELECTED', payload: kiddo.id })
                        }
                        }>
                            UPDATE SELECTED
                        </Button>
                    </>
                )
            })}
            <br />
            <Button variant="outlined" color="primary" onClick={(handleClickOpen)}>
                Console Log Test State
            </Button>
            {/* <SimpleDialog children={children} selectedValue={selectedValue} open={open} onClose={handleClose} /> */}
        </div>
    );
}