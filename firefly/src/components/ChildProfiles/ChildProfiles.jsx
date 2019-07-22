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
import logo from '../../assets/icons/Firefly.svg';
import { Toolbar } from '@material-ui/core';
import ColorSlider from '../ColorSlider/ColorSlider';

const ChildProfiles = () => {

    const [childProfileState, dispatch] = useContext(childContext);

    const useStyles = makeStyles({
        header: {
            fontSize: '34px',
            letterSpacing: '7',
            fontWeight: '900',
            color: '#5B4EFF',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        },
        root: {
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            maxWidth: '100%',
            padding: '60px',
        },
        cardContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
        },
        cardDashed: {
            display: 'flex',
            width: '18%',
            margin: '4%',
            height: '365px',
            flexShrink: 0,
            border: '2px solid #ABB0BA',
            borderRadius: '10px',
            boxShadow: '0px 3px #8F96A3',
        },
        card: {
            display: 'flex',
            width: '18%',
            margin: '4%',
            flexShrink: 0,
            border: '2px solid #ABB0BA',
            borderRadius: '10px',
            boxShadow: '0px 3px #8F96A3',
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
            width: '4rem',
            height: '4rem',
            padding: '1.5rem',
            borderRadius: '50%',
            backgroundColor: '#1AAE9F',
            color: 'white',
            fontSize: '6rem',
        },
        text: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        name: {
            fontSize: '3rem',
            color: '#1AAE9F',
        },
        level: {
            fontSize: '2rem',
            paddingBottom: '2rem',
        },
        avatar: {
            width: '100%',
            height: '100%',
        },
        slider: {
            width: '100%',
        },
    });

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <AppBar className={classes.appBar} position="static">
                <Toolbar>
                    Hi, {childProfileState.profiles.find((profile) => {
                        return childProfileState.selected.id === profile.id;
                    }).name}
                </Toolbar>
            </AppBar> */}
            <div className={classes.header}> CHOOSE YOUR FIREFLY </div>
            <div className={classes.cardContainer}>

                {childProfileState.profiles.map((profile) => (
                    <Card className={classes.card}>
                        <CardActionArea className={classes.cardActionArea} onClick={() => dispatch({ type: 'UPDATE_SELECTED', payload: profile.id })}>
                            <CardContent className={classes.cardContent}>
                                <img src={logo} className={classes.avatar} />
                                <div className={classes.text}>
                                    <h2 className={classes.name}>{profile.name}</h2>
                                </div>
                                {/* <ColorSlider className={classes.slider} value={profile.color} updateColor={(val) => {
                                    dispatch({
                                        type: 'UPDATE_COLOR', payload: {
                                            ...profile,
                                            color: val,
                                        }
                                    })
                                }} /> */}
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
                    <Card className={classes.cardDashed}>
                        <CardActionArea className={classes.cardActionArea}>
                            <CardContent className={classes.cardContentPlus}>
                                <h3 className={classes.plus}>+</h3>
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </div>
        </div>
    );
}

export default ChildProfiles
