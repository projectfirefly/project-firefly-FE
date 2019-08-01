import React, { useState, useReducer } from "react";
import firebase from 'firebase';

export const childContext = React.createContext();

const initialState = {
    selected: {
        id: "0",
    }
};

export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const ADD_PROFILE = "ADD_PROFILE";
export const GET_PROFILES_AND_AVATARS = "GET_PROFILES_AND_AVATARS";
export const GET_USER_INFO = "GET_USER_INFO"
export const UPDATE_USER = "UPDATE_USER";

function reducer(state, action) {
    const db = firebase.firestore();
    const uid = firebase.auth().currentUser.uid;
    switch (action.type) {
        case GET_USER_INFO:
            return { ...state, user: action.payload }
        case GET_PROFILES_AND_AVATARS:
            var newProfiles;
            if (state.user.profiles) {
                newProfiles = [...state.user.profiles, action.payload]
            } else {
                newProfiles = [action.payload];
            }
            const newUser = { ...state.user, profiles: newProfiles }
            return { ...state, user: newUser }
        case UPDATE_USER: {
            var uploadUser = action.payload;
            if (uploadUser.profiles) {
                delete uploadUser["profiles"];
            }
            delete uploadUser["id"];
            delete uploadUser["information"];
            var uploadInformation = action.payload.information;
            delete uploadInformation["id"];
            db.collection("users")
                .doc(uid)
                .set({
                    ...uploadUser
                }, { merge: true })
            db.collection("users")
                .doc(uid)
                .collection("information")
                .doc(action.payload.information.id)
                .set({
                    ...uploadInformation
                }, { merge: true })
        }
        case UPDATE_SELECTED:
            return { ...state, selected: { id: action.payload } };
        case UPDATE_PROFILE: {
            var uploadProfile = action.payload;
            delete uploadProfile["id"];
            delete uploadProfile["avatar"];
            var uploadAvatar = action.payload.avatar;
            delete uploadAvatar["id"];
            db.collection("users")
                .doc(uid)
                .collection("profiles")
                .doc(action.payload.id)
                .set({
                    ...uploadProfile
                }, { merge: true })
                .then(() => {
                    db.collection("users")
                        .doc(uid)
                        .collection("profiles")
                        .doc(action.payload.id)
                        .collection("avatar")
                        .doc(action.payload.avatar.id)
                        .set({
                            ...uploadAvatar
                        }, { merge: true })
                })
            const newArr = state.user.profiles.map(profile => {
                if (profile.id === action.payload.id) {
                    return action.payload;
                } else {
                    return profile;
                }
            });
            const newUser = { ...state.user, profiles: newArr }
            return { ...state, user: newUser };
        }
        case REMOVE_PROFILE: {
            db.collection("users")
                .doc(uid)
                .collection("profiles")
                .doc(action.payload.id)
                .collection("avatar")
                .doc(action.payload.avatar.id)
                .delete()
                .then(() => {
                    db.collection("users")
                        .doc(uid)
                        .collection("profiles")
                        .doc(action.profile.id)
                        .delete()
                })
            const newArr = state.profiles.filter(profile => {
                if (profile.id === action.payload.id) {
                    return false;
                } else {
                    return true;
                }
            });
            return { ...state, profiles: newArr, selected: { id: 0 } };
        }
        case ADD_PROFILE: {
            const addProfile = () => {
                var profileId;
                Promise.resolve(
                    db.collection("users")
                        .doc(firebase.auth().currentUser.uid)
                        .collection("profiles")
                        .add(action.payload)
                        .then((docRef) => {
                            db.collection("users")
                                .doc(firebase.auth().currentUser.uid)
                                .collection("profiles")
                                .doc(docRef.id)
                                .collection("avatar")
                                .add({
                                    color: 53,
                                    accessory: 0,
                                    nickname: ""
                                })
                            profileId = docRef.id;
                        }))
                const newProfile = { ...action.payload, id: profileId };
                if (state.user.profiles) {
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            profiles: [
                                ...state.user.profiles,
                                newProfile
                            ]
                        }
                    }
                } else {
                    return {
                        ...state,
                        user: {
                            ...state.user,
                            profiles: [newProfile]
                        }
                    }
                }
            }
            return addProfile();
        }
        default:
            throw Error("reducer error");
    }
}

export default function ChildProfileStore(props) {
    const stateHook = useReducer(reducer, initialState);

    return (
        <childContext.Provider value={stateHook}>
            {props.children}
        </childContext.Provider>
    );
}
