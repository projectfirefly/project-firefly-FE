import React, { useReducer} from "react";

export const gameContext = React.createContext();

const initialState = {
    codeBlock: [],
    loaded: false,
};

export const ADD_BLOCK = "ADD_BLOCK";
export const SAVE_BLOCKS = "SAVE_BLOCKS";
export const GET_PROFILE_AND_AVATAR = "GET_PROFILE_AND_AVATAR"
export const DELETE_BLOCK = "DELETE_BLOCK"
export const RESET_BLOCKS = "RESET_BLOCKS"

function reducer(state, action){
    switch(action.type){
        case ADD_BLOCK:
            return {...state, codeBlock: action.payload};
        case SAVE_BLOCKS:
            return {...state, codeBlock: action.payload}
        case GET_PROFILE_AND_AVATAR:
            let profile = [...state.user.profiles, action.payload]
            const newUser = {...state.user, profile: profile}
            return {...state, user: newUser }
        case DELETE_BLOCK:
            return {...state, codeBlock: action.payload}
        case RESET_BLOCKS:
            return {...state, codeBlock: action.payload}
        default:
            throw Error("reducer error");
    }
}

export default function GameContextStore(props){
    const stateHook = useReducer(reducer, initialState);

    return (
        <gameContext.Provider value={stateHook}>
            {props.children}
        </gameContext.Provider>
    )
}