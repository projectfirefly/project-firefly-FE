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
import ChildProfilesContext from '../../context/ChildProfiles/ChildProfilesContext';

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
    const selectedProfile = useContext(ChildProfilesContext).selected;

    function handleClickOpen() {
        setOpen(true);
        console.log(selectedProfile);
    }

    const handleClose = value => {
        setOpen(false);
        // setSelectedProfile(value);
    }

    return (
        <div>
            {/* <Typography variant="subtitle1">Selected: {selectedValue.name}</Typography> */}
            <br />
            <Button variant="outlined" color="primary" onClick={(handleClickOpen)}>
                SELECT PROFILE
            </Button>
            {/* <SimpleDialog children={children} selectedValue={selectedValue} open={open} onClose={handleClose} /> */}
        </div>
    );
}