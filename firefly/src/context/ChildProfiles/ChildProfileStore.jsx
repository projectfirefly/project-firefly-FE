import React, { useState, useReducer } from 'react'

export const childContext = React.createContext();

const initialState = {
    profiles: [
    {
        id: 0,
        name: 'George',
        avatar: "G",
        color: "120",
    },
    {
        id: 1,
        name: 'Jorge',
        avatar: "J",
        color: "0",
    },
    {
        id: 2,
        name: "Gyorg",
        avatar: "Gy",
        color: "320",
    },
    {
        id: 3,
        name: "John",
        avatar: "Jo",
        color: "60",
    },
    {
        id: 4,
        name: "Jacob",
        avatar: "Ja",
        color: "250",
    }],
    selected: {
        id: 2,
    }
}

export const UPDATE_COLOR = 'UPDATE_COLOR';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';

function reducer(state, action) {
    switch(action.type) {
        case UPDATE_COLOR:
            const newArr = state.profiles.map((profile) => {
                if (profile.id === action.payload.id) {
                    return action.payload
                } else {
                    return profile
                }
            })
            return {...state, profiles: newArr};
        case UPDATE_SELECTED:
            return {...state, selected: { id: action.payload }}
        default:
            throw Error('reducer error');
    }
}

export default function ChildProfileStore(props) {

    const stateHook = useReducer(reducer, initialState)

    return (
        <childContext.Provider value={stateHook}>
            {props.children}
        </childContext.Provider>
    )
}
