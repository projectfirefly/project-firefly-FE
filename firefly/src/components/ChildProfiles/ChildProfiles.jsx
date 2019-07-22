import React, { useState, useEffect, useContext } from 'react';
import { childContext } from '../../context/ChildProfiles/ChildProfileStore'

//Material-UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

import ChildProfileDialog from './ChildProfileDialog';
import logo from '../../logo.svg';
import { Toolbar } from '@material-ui/core';
import ColorSlider from '../ColorSlider/ColorSlider';

const ChildProfiles = () => {

    const [childProfileState, dispatch] = useContext(childContext);

    const useStyles = makeStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '80vw',
            overflowX: 'scroll',
            backgroundColor: '#DFE7ED',
        },
        cardContainer: {
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            height: '100%',
        },
        cardDashed: {
            display: 'flex',
            width: '360px',
            margin: '20px',
            height: '70%',
            flexShrink: 0,
            border: '2px dashed #C4D0DA'
        },
        card: {
            display: 'flex',
            width: '360px',
            margin: '20px',
            height: '70%',
            flexShrink: 0,
            border: '2px solid #C4D0DA'
        },
        media: {
            height: '50%',
        },
        cardActionArea: {
            display: 'flex',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardContentPlus: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        plus: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '1.5rem',
            height: '1.5rem',
            padding: '1.5rem',
            borderRadius: '50%',
            backgroundColor: '#1AAE9F',
            color: 'white',
            fontSize: '4rem',
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        name: {
            fontSize: '3rem',
            color: '#1AAE9F',
            marginBottom: '1rem',
            marginTop: '2rem',
        },
        level: {
            fontSize: '2rem',
            paddingBottom: '2rem',
        },
        avatar: {
            paddingTop: '3rem',
        },
        slider: {
            width: '100%',
        },
        appBar: {
            backgroundColor: `hsl(${childProfileState.profiles.find((profile) => {
                return childProfileState.selected.id === profile.id;
            }).color},100%,50%)`,
        }
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    Hi, {childProfileState.profiles.find((profile) => {
                        return childProfileState.selected.id === profile.id;
                    }).name}
                </Toolbar>
            </AppBar>
            <div className={classes.cardContainer}>
                <Card className={classes.cardDashed}>
                    <CardActionArea className={classes.cardActionArea}>
                        <CardContent className={classes.cardContentPlus}>
                            <h3 className={classes.plus}>+</h3>
                        </CardContent>
                    </CardActionArea>
                </Card>
                {childProfileState.profiles.map((profile) => (
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardActionArea} onClick={() => dispatch({ type: 'UPDATE_SELECTED', payload: profile.id })}>
                            <CardContent className={classes.cardContent}>
                                <img src={logo} className={classes.avatar} />
                                <div className={classes.text}>
                                    <h2 className={classes.name}>{profile.name}</h2>
                                    <h2 className={classes.level}>{profile.color}</h2>
                                </div>
                                <ColorSlider className={classes.slider} value={profile.color} updateColor={(val) => {
                                    dispatch({
                                        type: 'UPDATE_COLOR', payload: {
                                            ...profile,
                                            color: val,
                                        }
                                    })
                                }} />
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default ChildProfiles
