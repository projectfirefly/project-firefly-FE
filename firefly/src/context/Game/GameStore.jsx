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
export const ADD_FIREFLY = "ADD_FIREFLY"

function reducer(state, action){
    switch(action.type){
        case ADD_WORLD:
            const newWorld = [...state.worlds, action.payload]
            console.log(newWorld)
            return {...state, worlds: newWorld}

        case GET_WORLDS:
            console.log({...state, worlds: action.payload})
            return {...state, worlds: action.payload}

        case ADD_FIREFLY:
            const fireflyWorld = state.worlds.map(world => {
                if(world.fireflies){
                    return {...world, fireflies: [...world.fireflies, action.payload]}
                }else{
                    return {...world, fireflies: [action.payload]}
                }

            })
            console.log({...state, worlds: fireflyWorld})
            return {...state, worlds: fireflyWorld}

        case UPDATE_BLOCK:
            console.log(state)
            console.log(action.payload)
            const newWorlds = state.worlds.map(world => {
                    if(world.fireflies){
                        const newFireflies = world.fireflies.map(firefly => {
                            if(firefly.id === action.payload.firefly_id){
                                return {...world, ...action.payload.worlds.fireflies}
                            }else{
                                return firefly
                            }
                        })
                        console.log(newFireflies)
                        return {...world, fireflies: newFireflies }
                    }else{
                        return {...world, fireflies: [...action.payload.worlds.fireflies]}
                    }
            })

            return {...state, worlds: newWorlds }
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