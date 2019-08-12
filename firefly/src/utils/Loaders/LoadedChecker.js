import React, { useState, useEffect, useContext } from 'react'

import { childContext, SET_LOADED } from '../../context/ChildProfiles/ChildProfileStore';

import { getUser } from "../firebaseInteractions";

import Welcome from '../../images/WelcomeToFirefly.png';

import { makeStyles } from '@material-ui/core';

import Icon from '../../assets/icons';

export default function LoadedChecker(props) {
  const [context, dispatch] = useContext(childContext);
  const [atLeast, setAtLeast] = useState(false);

  useEffect(() => {
    if (!atLeast) {
      setTimeout(() => {
        setAtLeast(true);
        if (!props.logged) {
          dispatch({type: SET_LOADED, payload: true});
        }
      }, 2000);
    }
  }, []);

  useEffect(() => {
    
  }, [props.logged])

  useEffect(() => {
    if (props.logged && !context.loaded) {
      getUser(dispatch)
        .then(() => {
          if (atLeast && context.loaded) {
            console.log("context", context);
            console.log("HUGE PROBLEM INCOMING")
            props.setIsLoading(false);
          }
        })
    } else if (atLeast && context.loaded) {
      console.log("LOADED AND ATLEAST", context)
      props.setIsLoading(false);
    }
  }, [props.logged, atLeast, context.loaded])

  return (<></>);
}