import React, { useState, useReducer} from "react";

export const gameContext = React.createContext();

const initialState = {
    worlds: [
        {
            id: "",
            worldName: "",
            fireflies: [
                {
                    firefly_id: "",
                    x: null,
                    y: null,
                    codeBlocks: []
                }
            ]
        }
    ],
    loaded: false
};

export const UPDATE_BLOCK = "UPDATE_BLOCK";
export const GET_PROFILE_AND_AVATAR = "GET_PROFILE_AND_AVATAR";
export const RESET_BLOCKS = "RESET_BLOCKS";
export const GET_WORLDS = "GET_WORLDS";
export const ADD_WORLD = "ADD_WORLD";
export const REMOVE_WORLD = "REMOVE_WORLD";
export const ADD_FIREFLY = "ADD_FIREFLY"

function reducer(state, action){
    switch(action.type){
        case ADD_WORLD:
            const newWorld = [...state.worlds, action.payload]
            console.log(newWorld)
            return {...state, worlds: newWorld}

        case GET_WORLDS:
            console.log({...state, worlds: [...action.payload]})
            return {...state, worlds: [...action.payload]}
        case REMOVE_WORLD:
            const newArr = state.worlds.filter(world => {
                return world.id !== action.payload.id
            });
            // if(world.id === action.payload.id){
            //     return false;
            // } else {
            //     return true;
            // }
            return {
                ...state,
                worlds: newArr 
            }
        case ADD_FIREFLY:
            const addedFirefly = state.worlds.map(world => {
                if(world.id === action.payload.world_id){
                    return { ...world, fireflies: { ...world.fireflies, ...action.payload.firefly}}
                } else {
                    return world
                }
            })
            console.log({...state, worlds: addedFirefly})
            return {...state, worlds: addedFirefly}

        case UPDATE_BLOCK:
            const newWorlds = state.worlds.map(world => {
                const updatedFireflies = world.fireflies.map(firefly => {
                    if(firefly.id === action.payload.firefly_id){
                        return action.payload
                    }else{
                        return firefly
                    }
                })
                return { fireflies: updatedFireflies }
            })
            return {...state, worlds: newWorlds }
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