import React, { useState, useContext } from 'react'
import firebase from 'firebase';
import { addProfile, addWorld, getWorld, addFirefly, updateBlocks} from "../../utils/firebaseInteractions";

import { gameContext, ADD_WORLD, GET_WORLDS, UPDATE_BLOCK, ADD_FIREFLY} from '../../context/Game/GameStore';
import { childContext, ADD_PROFILE } from '../../context/ChildProfiles/ChildProfileStore'

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

  const newBlock = {
    firefly_id: "dxK5y56lH4rItuXZ6SeI",
    x: null,
    y: null,
    codeBlocks: ["timer", "flash"]
  }

  const requiredIds = {
    firefly_id: "dxK5y56lH4rItuXZ6SeI",
    world_id: "wMtPwo2JajHYAF9lGiCg"
  }

  const addNewFirefly = () => {
    addFirefly(context.selected.id, "wMtPwo2JajHYAF9lGiCg",worldDispatch)
  }
  const updateBlock = () => {
    updateBlocks(context.selected.id, requiredIds, newBlock, worldDispatch)
  }

  const getWorlds = () => {
    getWorld(context.selected.id, worldDispatch);
  }

  const addNewWorld = () => {
    console.log(worldContext)
    addWorld(context.selected.id, worldTest, worldDispatch)
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
    console.log("test"),
    <div>
      <button onClick={get}>GET HERE</button>
      <button onClick={create}>Create Child</button>
      <button onClick={update}>Update Child</button>
      <button onClick={logContext}>Log Context</button>
      <button onClick={addNewWorld}>Add World</button>
      <button onClick={getWorlds}>Get Worlds</button>
      <button onClick={addNewFirefly}>Add New Firefly</button>
      <button onClick={updateBlock}>Add Block to Firefly</button>
    </div>
  )
}

export default BackendTester
