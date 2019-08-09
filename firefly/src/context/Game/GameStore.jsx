import React, { useState, useReducer} from "react";

export const gameContext = React.createContext();

const initialState = {
    worlds: [
        {
            id: "",
            worldName: "",
            fireflies: [
                {
                    id: null,
                    x: null,
                    y: null,
                    codeBlocks: []
                }
            ]
        }
    ],
    loaded: false
};

export const ADD_BLOCK = "ADD_BLOCK";
export const SAVE_BLOCKS = "SAVE_BLOCKS";
export const GET_PROFILE_AND_AVATAR = "GET_PROFILE_AND_AVATAR";
export const DELETE_BLOCK = "DELETE_BLOCK";
export const RESET_BLOCKS = "RESET_BLOCKS";
export const GET_WORLDS = "GET_WORLDS";
export const ADD_WORLD = "ADD_WORLD";

function reducer(state, action){
    switch(action.type){
        case ADD_WORLD:
            const newWorld = [...state.worlds, action.payload]
            return {...state, worlds: newWorld}
        case GET_WORLDS:
            return {...state, worlds: action.payload}
        case ADD_BLOCK:
            const newWorlds = state.worlds.map(world => {
                if(world.id === action.payload.world.id){
                    const newFireflies = world.fireflies.map(firefly => {
                        if(firefly.id === action.payload.world.firefly.id){
                            return action.payload.world.firefly
                        }else{
                            return firefly
                        }
                    })

                    return {...world, fireflies: newFireflies }
                }else{
                    return { world }
                }
            })

            return {...state, worlds: newWorlds }

        case SAVE_BLOCKS:
            const saveBlocks = state.worlds.map(world => {
                if(world.id === action.payload.world.id){
                    const saveFirefly = world.fireflies.map(firefly => {
                        if(firefly.id === action.payload.world.firefly.id){
                            return action.payload.world.firefly
                        }else{
                            return firefly
                        }
                    })
                    return {...world, fireflies: saveFirefly}
                }else{
                    return {world}
                }
            })

            return {...state, worlds: saveBlocks}
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