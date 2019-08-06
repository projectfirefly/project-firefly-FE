import React, { useState, useReducer } from "react";
import firebase from 'firebase';

export const childContext = React.createContext();

const initialState = {
  selected: {
    id: "0",
  },
  loaded: false,
  hasProfiles: false,
};

export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const REMOVE_PROFILE = "REMOVE_PROFILE";
export const ADD_PROFILE = "ADD_PROFILE";
export const GET_PROFILES_AND_AVATARS = "GET_PROFILES_AND_AVATARS";
export const GET_USER_INFO = "GET_USER_INFO"
export const UPDATE_USER = "UPDATE_USER";
export const SET_LOADED = "SET_LOADED";
export const GET_USER = "GET_USER";
export const SET_HAS_PROFILES = "SET_HAS_PROFILES";

function reducer(state, action) {
  const db = firebase.firestore();
  const uid = firebase.auth().currentUser.uid;
  switch (action.type) {
    case GET_USER:
      return { ...state, user: action.payload }
    case SET_HAS_PROFILES:
      return { ...state, hasProfiles: true };
    case GET_USER_INFO:
      return {
        ...state,
        user: {
          ...state.user,
          information: action.payload
        }
      }
    case GET_PROFILES_AND_AVATARS:
      var newProfiles;
      if (state.user.profiles) {
        newProfiles = [...state.user.profiles, action.payload]
      } else {
        newProfiles = [action.payload];
      }
      const newUser = { ...state.user, profiles: newProfiles }
      return { ...state, user: newUser }
    case SET_LOADED: {
      return { ...state, loaded: true }
    }
    case UPDATE_USER: {
      return { ...state, user: action.payload }
    }
    case UPDATE_SELECTED:
      return { ...state, selected: { id: action.payload } };
    case UPDATE_PROFILE: {
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
    case REMOVE_PROFILE:
      const newArr = state.user.profiles.filter(profile => {
        if (profile.id === action.payload.id) {
          return false;
        } else {
          return true;
        }
      });
      if (newArr[0]) {
        return {
          ...state,
          user: {
            ...state.user,
            profiles: newArr
          },
          selected: { id: newArr[0].id },
        };
      } else {
        return {
          ...state,
          user: {
            ...state.user,
            profiles: newArr
          },
          selected: {
            id: 0
          },
          hasProfiles: false
        }
      }
    case ADD_PROFILE: {
      if (state.user.profiles) {
        return {
          ...state,
          user: {
            ...state.user,
            profiles: [
              ...state.user.profiles,
              action.payload
            ]
          },
          selected: {
            id: action.payload.id
          }
        }
      } else {
        console.log(action.payload)
        return {
          ...state,
          user: {
            ...state.user,
            profiles: [action.payload]
          },
          selected: {
            id: action.payload.id
          }
        }
      }
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
