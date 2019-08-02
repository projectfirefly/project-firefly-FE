import React, { useContext } from 'react'
import { childContext } from '../context/ChildProfiles/ChildProfileStore';

const IfLoaded = (props) => {

  const [context, dispatch] = useContext(childContext);

  if (context.loaded) {
    return (
      <>
        {props.children}
      </>
    )
  } else {
    return (
      <>
        Loading...
      </>
    )
  }
}

const IfHasProfiles = (props) => {

  const [context, dispatch] = useContext(childContext);

  if (context.loaded && context.hasProfiles) {
    return (
      <>
        {props.children}
      </>
    )
  } else {
    return (
      <>
        Loading...
      </>
    )
  }
