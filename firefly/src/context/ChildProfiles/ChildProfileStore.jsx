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
                    uploadProfile
                }, { merge: true })
                .then(() => {
                    db.collection("users")
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
            const nextId = state.profiles[state.profiles.length - 1].id + 1;
            const newProfile = { ...action.payload, id: nextId };
            return { ...state, profiles: [...state.profiles, newProfile] };
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
