import React, { useState } from "react";
import FFbox from "./FFbox";
import GameBoard from "./BlockLine";
import Toolbox from "./Toolbox";
import DropDelete from "./DropDelete";
import uuid from "uuid/v4";
import styled from "styled-components";
import uifx from "uifx";
import { DragDropContext } from "react-beautiful-dnd";
import StartBlock from "../../images/gameIcons/StartBlock.svg";
import BlueBlockLeftSideEndState from "../../images/gameIcons/BlueBlockLeftSideEndState.svg";
import GreenBlockRightSideEndState from "../../images/gameIcons/GreenBlockRightSideEndState.svg";
import RepeatIcon from "../../images/gameIcons/RepeatIcon.svg";
import LightbulbIcon from "../../images/gameIcons/LightbulbIcon.svg";
import ClockIcon from "../../images/gameIcons/ClockIcon.svg";
import PlayCircleIcon from "../../images/gameIcons/PlayCircleIcon.svg";
import PaletteIcon from "../../images/gameIcons/PaletteIcon.svg";
import ToggleOffIcon from "../../images/gameIcons/ToggleOffIcon.svg";
import NumberIcon1 from "../../images/gameIcons/NumberIcon1.svg";
import GridIcon from "../../images/gridBackground.png";

//importing the sound
import clickMP3 from "../../assets/sounds/click.mp3";
import clickTogetherMP3 from "../../assets/sounds/clickTogether.mp3";
import paperMP3 from "../../assets/sounds/crumblingPaper.mp3";
import poofMP3 from "../../assets/sounds/poof.mp3";
//making the sounds variable
const click = new uifx({ asset: clickMP3 });
const clickTogether = new uifx({ asset: clickTogetherMP3 });
const paper = new uifx({ asset: paperMP3 });
const poof = new uifx({asset: poofMP3});

//styling 
const Board = styled.div`
  /* min-height: 100vh; */
  min-width: 100vw;
  /* background-image: url(${GridIcon}); */
  /* margin: -10% 0; */
  /* padding-bottom: 30%; */
`;

const ToolboxGreenIcon = styled.img`
  position: absolute;
  width: 40%;
  top: 28%;
  left: 29%;
`;

const ToolboxBlueLedIcon = styled.img`
  position: absolute;
  width: 40%;
  top: 27%;
  left: 34%;
`;

const ToolboxBlueRepeatIcon = styled.img`
  position: absolute;
  width: 40%;
  top: 30%;
  left: 32%;
`;

const ToolboxToggleIcon = styled.img`
  position: absolute;
  top: 35%;
  left: 27%;
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
    functionality: (
      <ToolboxBlueLedIcon src={LightbulbIcon} alt="lightbulbIcon" />
    ),
    content: <ToolboxBox src={BlueBlockLeftSideEndState} alt="blueblock" />,
    used: false,
    rsi: 1
  },
  {
    id: uuid(),
    functionality: <ToolboxBlueRepeatIcon src={RepeatIcon} alt="repeatIcon" />,
    content: <ToolboxBox src={BlueBlockLeftSideEndState} alt="blueblock" />,
    used: false,
    rsi: 2
  },

  {
    id: uuid(),
    functionality: <ToolboxGreenIcon src={PaletteIcon} alt="paletteIcon" />,
    content: <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />,
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
    content: <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />,
    used: false,
    rsi: 5
  },
  {
    id: uuid(),
    functionality: <ToolboxToggleIcon src={ToggleOffIcon} alt="toggleIcon" />,
    content: <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />,
    used: false,
    rsi: 6
  }
];

const Game = () => {
  const [list, setList] = useState({ [uuid()]: [] });
  const [tools, setTools] = useState(ITEMS);
  const [hasStart, setHasStart] = useState(false);
  const [draggingBlock, isDraggingBlock] = useState(false);

  const onDragStart = () => {
    isDraggingBlock(true);
    click.play();
  };

  const onDragEnd = result => {
    const { source, destination } = result;

    isDraggingBlock(false);
    // clickTogether.play();
    // console.log("tools:", tools);
    // console.log("list:", list);
    // console.log("result:", result);

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (destination.droppableId === "TRASH") {
      //check to see if we are trying to throw away a tool from the toolbox (we don't want to do that)
      if (source.droppableId === "ITEMS") {
        console.log("dropping from toolbox");
        poof.play();
        return;
      }
    }

    if (
      result.draggableId === tools[0].id ||
      result.draggableId === tools[1].id
    ) {
      if (result.draggableId === tools[0].id) {
        setHasStart(true);
      }
      setTools(
        [...tools].map(tool => {
          return tool.id === result.draggableId
            ? { ...tool, used: true }
            : { ...tool };
        })
      );
    }

    if (destination.droppableId === "TRASH") {
      //Filters out the block that got put into trash
      const realList = list[`${source.droppableId}`].filter(item => {
        if (item.id === result.draggableId && item.rsi <= 1) {
          if (item.id === result.draggableId && item.rsi === 0) {
            setHasStart(false);
          }
          setTools(
            [...tools].map(tool => {
              return tool.rsi === item.rsi
                ? { ...tool, used: false }
                : { ...tool };
            })
          );
        }
        return item.id !== result.draggableId;
      });

      //Filters all tools to used:false so they become usable again
      setList({ realList });
      poof.play();
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
        // to play default drop sound 'clickTogether' when dropping the block
        clickTogether.play();
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

  console.log("list:", list);

  return (
    <Board>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
        <Toolbox tools={tools} />
        <FFbox tools={tools} />
        <GameBoard
          list={list}
          hasStart={hasStart}
          draggingBlock={draggingBlock}
          setList={setList}
        />
        <DropDelete />
      </DragDropContext>
    </Board>
  );
};

export default Game;
