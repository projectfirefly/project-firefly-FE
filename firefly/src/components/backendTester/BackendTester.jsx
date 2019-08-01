import React, { useState } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import firebase from 'firebase';

const BackendTester = () => {

    const [child, setChild] = useState({});

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
            console.log(docList);
            return snapshot.docs.map(doc => doc.data());
        }).then((children) => {
            const [currentChild] = children;
            setChild(currentChild);
        })
        .then(() => {
            console.log(child);
        });
    }

    const send = async () => {
        const uid = await firebase.auth().currentUser.uid;
        console.log(uid);
        axiosWithAuth(uid)
            .post('http://localhost:5000/firefly-firebase-test/us-central1/addChild', testChild)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            <button onClick={get}>GET HERE</button>
            <button onClick={send}>TEST HERE</button>
        </div>
    )
}

export default BackendTester
