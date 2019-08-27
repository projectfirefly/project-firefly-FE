import React, { useState, useReducer } from "react";

export const gameContext = React.createContext();

const initialState = {
  selected: {
    id: "0"
  },
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
export const ADD_FIREFLY = "ADD_FIREFLY";
export const REMOVE_FIREFLY = "REMOVE_FIREFLY";
export const UPDATE_SELECTED = "UPDATE_SELECTED";
export const SELECTED_WORLD = "SELECTED_WORLD";
export const SET_GAME_LOADED = "SET_LOADED";

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_SELECTED:
      console.log({ ...state, selected: { id: action.payload } });
      return { ...state, selected: { id: action.payload } };

<<<<<<< HEAD
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
        case REMOVE_FIREFLY:
            const worldArr = state.worlds.map(world => {
                const fireflyArr = world.fireflies.filter(firefly => {
                    return firefly.firefly_id !== action.payload.firefly_id
                })
=======
    case SELECTED_WORLD:
      const selectedWorld = state.worlds.filter(world => {
        return world.id === state.selected.id;
      });
      console.log("this is the selected world", {
        ...state,
        worlds: selectedWorld
      });
      return { ...state, worlds: selectedWorld };
>>>>>>> 7057b2d9f1e80896e77085a89cfd83ef1f3c20d6

      case ADD_WORLD:
        const newWorld = [...state.worlds, action.payload]
        console.log(newWorld)
        return {...state, worlds: newWorld}

<<<<<<< HEAD
            console.log({...state, worlds:  worldArr})
            return {...state, worlds:  worldArr}
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
=======
    case SET_GAME_LOADED: {
      return { ...state, loaded: true };
>>>>>>> 7057b2d9f1e80896e77085a89cfd83ef1f3c20d6
    }

    case GET_WORLDS:
      console.log({ ...state, worlds: [...action.payload] });
      return { ...state, worlds: [...action.payload] };

    case REMOVE_WORLD:
      const newArr = state.worlds.filter(world => {
        return world.id !== action.payload.id;
      });
      console.log(newArr, "this is the remove world");
      return {
        ...state,
        worlds: newArr
      };

    case ADD_FIREFLY:
      const addedFirefly = state.worlds.map(world => {
        if (world.id === action.payload.world_id) {
          return {
            ...world,
            fireflies: { ...world.fireflies, ...action.payload.firefly }
          };
        } else {
          return world;
        }
      });
      console.log({ ...state, worlds: addedFirefly });
      return { ...state, worlds: addedFirefly };

    case REMOVE_FIREFLY:
      const worldArr = state.worlds.map(world => {
        const fireflyArr = world.fireflies.filter(firefly => {
          return firefly.firefly_id !== action.payload.firefly_id;
        });
        return { ...world, fireflies: fireflyArr };
      });
      console.log({ ...state, worlds: worldArr });
      return { ...state, worlds: worldArr };

    case UPDATE_BLOCK:
      const newWorlds = state.worlds.map(world => {
        const updatedFireflies = world.fireflies.map(firefly => {
          if (firefly.id === action.payload.firefly_id) {
            return action.payload;
          } else {
            return firefly;
          }
        });
        return { fireflies: updatedFireflies };
      });
      return { ...state, worlds: newWorlds };

    default:
      throw Error("reducer error");
  }
}

export default function GameContextStore(props) {
  const stateHook = useReducer(reducer, initialState);

  return (
    <gameContext.Provider value={stateHook}>
      {props.children}
    </gameContext.Provider>
  );
}
