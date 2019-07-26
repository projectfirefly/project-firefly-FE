import React, { useState, useReducer } from "react";

export const childContext = React.createContext();

const initialState = {
    profiles: [
        {
            id: 0,
            name: "George",
            color: 120,
            accessory: 1
        },
        {
            id: 1,
            name: "Jorge",
            color: 0,
            accessory: 2
        },
        {
            id: 2,
            name: "Gyorg",
            color: 320,
            accessory: 3
        },
        {
            id: 3,
            name: "John",
            color: 60,
            accessory: 4
        },
        {
            id: 4,
            name: "Jacob",
            color: 250,
            accessory: 1
        },
        {
            id: 5,
            name: "Georgina",
            color: 170,
            accessory: 2
        }
    ],
    selected: {
        id: 2
    }
};

export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

function reducer(state, action) {
    switch (action.type) {
        case UPDATE_SELECTED:
            return { ...state, selected: { id: action.payload } };
        case UPDATE_PROFILE:
            const newArr = state.profiles.map(profile => {
                if (profile.id === action.payload.id) {
                    return action.payload;
                } else {
                    return profile;
                }
            });
            return { ...state, profiles: newArr };
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
