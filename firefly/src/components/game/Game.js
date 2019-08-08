import React, { Component } from "react";
import FFbox from "./FFbox";
import GameBoard from "./BlockLine";
import Toolbox from "./Toolbox";
import uuid from "uuid/v4";
import styled from "styled-components";

import { DragDropContext } from "react-beautiful-dnd";

const Board = styled.div`
  /* min-height: 100vh; */
  min-width: 100vw;
  /* background-image: url(https://images.unsplash.com/photo-1538513633433-8cb0c2f89e56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3734&q=80); */
`;
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const item = sourceClone[droppableSource.index];

  destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
  return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const ITEMS = [
  {
    id: uuid(),
    content: "START"
  },
  {
    id: uuid(),
    content: "COLOR"
  },
  {
    id: uuid(),
    content: "DELAY"
  },
  {
    id: uuid(),
    content: "TOGGLE"
  },
  {
    id: uuid(),
    content: "REPEAT"
  }
];

export default class Game extends Component {
  state = {
    [uuid()]: []
  };
  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        this.setState({
          [destination.droppableId]: reorder(
            this.state[source.droppableId],
            source.index,
            destination.index
          )
        });
        break;
      case "ITEMS":
        this.setState({
          [destination.droppableId]: copy(
            ITEMS,
            this.state[destination.droppableId],
            source,
            destination
          )
        });
        break;
      default:
        this.setState(
          move(
            this.state[source.droppableId],
            this.state[destination.droppableId],
            source,
            destination
          )
        );
        break;
    }
  };

  addList = e => {
    this.setState({ [uuid()]: [] });
  };

  render() {
    return (
      <Board>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Toolbox ITEMS={ITEMS} />
          <FFbox />
          <GameBoard state={this.state} />
        </DragDropContext>
      </Board>
    );
  }
}
