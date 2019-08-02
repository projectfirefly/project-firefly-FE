import firebase from 'firebase';

export const addProfile = async (type, payload, dispatch) => {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  db.collection("users")
    .doc(uid)
    .collection("profiles")
    .add(payload)
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