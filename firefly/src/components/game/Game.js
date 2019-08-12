import React, { useState, useEffect } from "react";
import FFbox from "./FFbox";
import GameBoard from "./BlockLine";
import Toolbox from "./Toolbox";
import DropDelete from "./DropDelete";
import uuid from "uuid/v4";
import styled from "styled-components";

import { DragDropContext } from "react-beautiful-dnd";
import StartBlock from "../../images/gameIcons/StartBlock.svg";
import BlueBlock from "../../images/gameIcons/BlueBlock.svg";
import BlueBlockLeftSideEndState from "../../images/gameIcons/BlueBlockLeftSideEndState.svg";
import GreenBlock from "../../images/gameIcons/GreenBlock.svg";
import GreenBlockRightSideEndState from "../../images/gameIcons/GreenBlockRightSideEndState.svg";
import RepeatIcon from "../../images/gameIcons/RepeatIcon.svg";
import LightbulbIcon from "../../images/gameIcons/LightbulbIcon.svg";
import ClockIcon from "../../images/gameIcons/ClockIcon.svg";
import PlayCircleIcon from "../../images/gameIcons/PlayCircleIcon.svg";
import PaletteIcon from "../../images/gameIcons/PaletteIcon.svg";
import ToggleOffIcon from "../../images/gameIcons/ToggleOffIcon.svg";
import NumberIcon1 from "../../images/gameIcons/NumberIcon1.svg";

const Board = styled.div`
  /* min-height: 100vh; */
  min-width: 100vw;
  /* background-image: url(https://images.unsplash.com/photo-1538513633433-8cb0c2f89e56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3734&q=80); */
`;

const ToolboxGreenIcon = styled.img`
  position: absolute;
  top: 25%;
  left: 25%;
`;

const ToolboxBlueIcon = styled.img`
  position: absolute;
  top: 25%;
  left: 32%;
`;

const ToolboxToggleIcon = styled.img`
  position: absolute;
  top: 35%;
  left: 25%;
`;

const ToolboxBox = styled.img`
  width: 100%;
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

const deleteIt = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
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
    functionality: (
      <ToolboxGreenIcon src={PlayCircleIcon} alt="playCircleIcon" />
    ),
    content: <ToolboxBox src={StartBlock} alt="startblock" />,
    used: false,
    rsi: 0
  },
  {
    id: uuid(),
    functionality: <ToolboxBlueIcon src={LightbulbIcon} alt="lightbulbIcon" />,
    content: <ToolboxBox src={BlueBlockLeftSideEndState} alt="blueblock" />,
    used: false,
    rsi: 1
  },
  {
    id: uuid(),
    functionality: <ToolboxBlueIcon src={RepeatIcon} alt="repeatIcon" />,
    content: <ToolboxBox src={BlueBlock} alt="blueblock" />,
    used: false,
    rsi: 2
  },

  {
    id: uuid(),
    functionality: <ToolboxGreenIcon src={PaletteIcon} alt="paletteIcon" />,
    content: <ToolboxBox src={GreenBlock} alt="greenblock" />,
    used: false,
    rsi: 3
  },
  {
    id: uuid(),
    functionality: <ToolboxGreenIcon src={ClockIcon} alt="clockIcon" />,
    content: <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />,
    used: false,
    rsi: 4
  },
  {
    id: uuid(),
    functionality: <ToolboxGreenIcon src={NumberIcon1} alt="numberIcon" />,
    content: <ToolboxBox src={GreenBlock} alt="greenblock" />,
    used: false,
    rsi: 5
  },
  {
    id: uuid(),
    functionality: <ToolboxToggleIcon src={ToggleOffIcon} alt="toggleIcon" />,
    content: <ToolboxBox src={GreenBlock} alt="greenblock" />,
    used: false,
    rsi: 6
  }
];

const Game = () => {
  const [list, setList] = useState({ [uuid()]: [] });
  const [tools, setTools] = useState(ITEMS);

  const onDragEnd = result => {
    const { source, destination } = result;

    console.log("tools:", tools);
    console.log("list:", list);
    console.log("result:", result);

    if (
      result.draggableId === tools[0].id ||
      result.draggableId === tools[1].id
    ) {
      setTools(
        [...tools].map(tool => {
          return tool.id === result.draggableId
            ? { ...tool, used: true }
            : { ...tool };
        })
      );
    }

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        setList({
          ...list,
          [destination.droppableId]: reorder(
            list[source.droppableId],
            source.index,
            destination.index
          )
        });
        break;

      case "ITEMS":
        setList({
          ...list,
          [destination.droppableId]: copy(
            tools,
            list[destination.droppableId],
            source,
            destination
          )
        });
        break;

      case "TRASH":
        setList({
          ...list,
          [destination.droppableId]: deleteIt(
            source.droppableId,
            list[destination.droppableId],
            source,
            destination
          )
        });
        break;

      default:
        setList(
          move(
            list[source.droppableId],
            list[destination.droppableId],
            source,
            destination
          )
        );
        break;
    }
  };

  return (
    <Board>
      <DragDropContext onDragEnd={onDragEnd}>
        <Toolbox tools={tools} />
        <FFbox tools={tools} />
        <GameBoard state={list} />
        <DropDelete />
      </DragDropContext>
    </Board>
  );
};

export default Game;
