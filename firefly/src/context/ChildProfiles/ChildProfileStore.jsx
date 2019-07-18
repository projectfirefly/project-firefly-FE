import React, { useState, useReducer } from 'react'

export const childContext = React.createContext();

const initialState = {
    profiles: [
    {
        id: 0,
        name: 'George',
        avatar: "G",
        color: "red",
    },
    {
        id: 1,
        name: 'Jorge',
        avatar: "J",
        color: "green",
    },
    {
        id: 2,
        name: "Gyorg",
        avatar: "Gy",
        color: "gold",
    },
    {
        id: 3,
        name: "John",
        avatar: "Jo",
        color: "brown",
    },
    {
        id: 4,
        name: "Jacob",
        avatar: "Ja",
        color: "cyan",
    }],
    selected: {
        id: 2,
    }
}

function reducer(state, action) {
    switch(action.type) {
        case 'UPDATE_COLOR':
            const newArr = state.profiles.map((profile) => {
                if (profile.id === action.payload.id) {
                    return action.payload
                } else {
                    return profile
                }
            })
            return {...state, profiles: newArr};
        case 'UPDATE_SELECTED':
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
