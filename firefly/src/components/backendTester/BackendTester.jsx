import React, { useState, useContext } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import firebase from 'firebase';

import { childContext, UPDATE_COLOR, UPDATE_SELECTED, ADD_PROFILE } from '../../context/ChildProfiles/ChildProfileStore'

const BackendTester = () => {

    const [profiles, setProfiles] = useState({});

    const [context, dispatch] = useContext(childContext);

    const db = firebase.firestore();

    const testChild = {
        first_name: "asdf",
        last_name: "fdsa"
    };

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
        dispatch({type: ADD_PROFILE, payload: testChild});
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
            }, {merge: true})
    }

    return (
        <div>
            <button onClick={get}>GET HERE</button>
            <button onClick={create}>Create Child</button>
            <button onClick={update}>Update Child</button>
            <button onClick={logContext}>Log Context</button>
        </div>
    )
}

export default BackendTester
