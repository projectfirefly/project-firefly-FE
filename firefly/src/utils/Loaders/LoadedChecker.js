import React, { useState, useEffect, useContext } from 'react'

import { childContext } from '../../context/ChildProfiles/ChildProfileStore';

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
      }, 2000);
    }
  }, []);

  useEffect(() => {
    if (props.logged) {
      getUser(dispatch);
    }
  }, [props.logged])

  useEffect(() => {
    if (atLeast && context.loaded) {
      console.log("context", context);
      console.log("HUGE PROBLEM INCOMING")
      props.setIsLoading(false);
    }
  }, [atLeast, context.loaded])

  return (<></>);
}