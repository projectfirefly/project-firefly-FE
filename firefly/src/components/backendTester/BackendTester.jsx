import React, { useState, useContext } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import firebase from 'firebase';
import { addProfile, addWorld, getWorld} from "../../utils/firebaseInteractions";

import { childContext, UPDATE_COLOR, UPDATE_SELECTED, ADD_PROFILE } from '../../context/ChildProfiles/ChildProfileStore';
import { gameContext, ADD_WORLD } from '../../context/Game/GameStore';

const BackendTester = () => {

  const [profiles, setProfiles] = useState({});
  const [context, dispatch] = useContext(childContext);
  const [worldContext, worldDispatch] = useContext(gameContext)

  const db = firebase.firestore();

  const testChild = {
    first_name: "asdf",
    last_name: "fdsa"
  };

  const worldTest = {
    worldName: "test2"
  }

  const getWorlds = () => {
    getWorld(context.selected.id)
  }

  const addNewWorld = () => {
    console.log(worldContext)
    addWorld(ADD_WORLD, context.selected.id, worldTest, worldDispatch)
  }

  const get = async () => {
    const uid = await firebase.auth().currentUser.uid;
    const profiles = db.collection("users").doc(uid).collection("profiles").get().then((snapshot) => {
      const docList = snapshot.docs.map(doc => {
        const document = doc.data();
        return { ...document, id: doc.id }
      });
      setProfiles(docList);
      console.log(profiles);
      return snapshot.docs.map(doc => doc.data());
    })
  }

  const create = () => {
    addProfile(ADD_PROFILE, testChild, dispatch);
  }

  const logContext = () => {
    console.log(context);
  }

  const update = () => {
    db.collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("profiles")
      .doc(profiles[0].id)
      .set({
        first_name: "ASDFASDHFIPASDHFI"
      }, { merge: true })
  }

  return (
    <div>
      <button onClick={get}>GET HERE</button>
      <button onClick={create}>Create Child</button>
      <button onClick={update}>Update Child</button>
      <button onClick={logContext}>Log Context</button>
      <button onClick={addNewWorld}>Add World</button>
      <button onClick={getWorlds}>Get Worlds</button>
    </div>
  )
}

export default BackendTester
