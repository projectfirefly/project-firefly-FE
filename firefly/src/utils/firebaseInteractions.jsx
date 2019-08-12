import firebase from 'firebase';

import {
  GET_USER_INFO,
  GET_PROFILES_AND_AVATARS,
  SET_LOADED,
  UPDATE_SELECTED,
  GET_USER,
  SET_HAS_PROFILES,
  GET_AND_LOAD
}
  from "../context/ChildProfiles/ChildProfileStore"

export const addProfile = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  var uploadProfile = { ...payload };
  if (payload.avatar) {
    delete uploadProfile["avatar"];
  }
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .add(uploadProfile)
    .then((profileDoc) => {
      db.collection("users")
        .doc(uid)
        .collection("profiles")
        .doc(profileDoc.id)
        .collection("avatar")
        .add({
          color: 53,
          accessory: 0,
          nickname: ""
        }).then((avatarDoc) => {
          const newPayload = {
            ...payload,
            id: profileDoc.id,
            avatar: {
              color: 53,
              accessory: 0,
              nickname: "",
              id: avatarDoc.id
            }
          }
          dispatch({ type: type, payload: newPayload })
        })
    })
  dispatch({ type: SET_HAS_PROFILES });
};

export const updateProfile = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  var uploadProfile = { ...payload };
  delete uploadProfile["id"];
  delete uploadProfile["avatar"];
  var uploadAvatar = { ...payload.avatar };
  delete uploadAvatar["id"];
  await db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(payload.id)
    .set({
      ...uploadProfile
    }, { merge: true })
    .then(() => {
      db.collection("users")
        .doc(uid)
        .collection("profiles")
        .doc(payload.id)
        .collection("avatar")
        .doc(payload.avatar.id)
        .set({
          ...uploadAvatar
        }, { merge: true })
    });
  dispatch({ type: type, payload: payload });
}

export const removeProfile = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  await db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(payload.id)
    .collection("avatar")
    .doc(payload.avatar.id)
    .delete()
  await db.collection("users")
    .doc(uid)
    .collection("profiles")
    .doc(payload.id)
    .delete()
  dispatch({ type: type, payload: payload });
}

export const updateUser = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  var uploadUser = { ...payload };
  if (uploadUser.profiles) {
    delete uploadUser["profiles"];
  }
  delete uploadUser["id"];
  delete uploadUser["information"];
  var uploadInformation = { ...payload.information };
  delete uploadInformation["id"];
  await db.collection("users")
    .doc(uid)
    .set({
      ...uploadUser
    }, { merge: true })
  await db.collection("users")
    .doc(uid)
    .collection("information")
    .doc(payload.information.id)
    .set({
      ...uploadInformation
    }, { merge: true })
  dispatch({ type: type, payload: payload });
}

export const getUser = async (dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  //get user
  var dispatchUser = {};

  await db.collection("users")
    .doc(uid)
    .get()
    .then((snapshot) => {
      const userInfo = snapshot.data()
      dispatchUser = { ...dispatchUser, ...userInfo, id: snapshot.id };
    })
  //get information
  await db.collection("users")
    .doc(uid)
    .collection("information")
    .get()
    .then(snapshot => {
      const docList = snapshot.docs.map(doc => {
        const document = doc.data();
        return { ...document, id: doc.id };
      });
      dispatchUser = { ...dispatchUser, information: docList[0] };
    })
  //get profiles and avatars
  await db.collection("users")
    .doc(uid)
    .collection("profiles")
    .get()
    .then(snapshot => {
      const childList = snapshot.docs.map(doc => {
        const child = doc.data();
        return { ...child, id: doc.id };
      });
      return childList;
    })
    .then(childList => {
      if (childList[0]) {
        const childAndAvatar = childList.map(child => {
          const avatar = db
            .collection("users")
            .doc(uid)
            .collection("profiles")
            .doc(child.id)
            .collection("avatar")
            .get()
            .then(snapshot => {
              const document = snapshot.docs.map(doc => {
                const avatarDoc = doc.data();
                return {
                  ...avatarDoc,
                  id: doc.id,
                };
              });
              return document[0];
            })
            .then(avatar => {
              if (dispatchUser.profiles) {
                dispatchUser = {
                  ...dispatchUser,
                  profiles: [
                    ...dispatchUser.profiles,
                    {
                      ...child,
                      avatar: {
                        ...avatar
                      }
                    }
                  ]
                }
              } else {
                dispatchUser = {
                  ...dispatchUser,
                  profiles: [
                    {
                      ...child,
                      avatar: {
                        ...avatar
                      }
                    }
                  ]
                }
              }
            }).then(() => {
              dispatch({type: GET_AND_LOAD, payload: dispatchUser});
            });
        });
      }
    })
}