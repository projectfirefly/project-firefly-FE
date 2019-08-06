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

import { childContext, UPDATE_COLOR, UPDATE_SELECTED } from '../../context/ChildProfiles/ChildProfileStore'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    paper: {
        background: '#e2f5d6',
    }
});

export default function ChildProfileDialog() {

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [childProfileState, dispatch] = useContext(childContext);

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose(value) {
        setOpen(false);
        dispatch({type: UPDATE_SELECTED, payload: value});
    }

    return (
        <div>
            {console.log(childProfileState)}
            test
        </div>
    );
}