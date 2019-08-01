import React, { useState, useContext } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import firebase from 'firebase';

import { childContext, UPDATE_COLOR, UPDATE_SELECTED } from '../../context/ChildProfiles/ChildProfileStore'

const BackendTester = () => {

    const [children, setChildren] = useState({});

    const [context, dispatch] = useContext(childContext);

    const db = firebase.firestore();

    const testChild = {
        first_name: "asdf",
        last_name: "fdsa"
    };

    const get = async () => {
        const uid = await firebase.auth().currentUser.uid;
        const children = db.collection("users").doc(uid).collection("children").get().then((snapshot) => {
            const docList = snapshot.docs.map(doc => {
                const document = doc.data();
                return { ...document, id: doc.id }
            });
            setChildren(docList);
            console.log(children);
            return snapshot.docs.map(doc => doc.data());
        })
    }

    const create = () => {
        db.collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("children")
            .add(testChild)
            .then((docRef) => {
                db.collection("users")
                .doc(firebase.auth().currentUser.uid)
                .collection("children")
                .doc(docRef.id)
                .collection("avatar")
                .add({
                    color: 53,
                    accessory: 0,
                    nickname: ""
                })
            })
    }

    const logContext = () => {
        console.log(context);
    }

    const update = () => {
        db.collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("children")
            .doc(children[0].id)
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
