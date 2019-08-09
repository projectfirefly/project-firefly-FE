import React, { Component } from "react";
import FFbox from "./FFbox";
import GameBoard from "./BlockLine";
import Toolbox from "./Toolbox";
import uuid from "uuid/v4";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "../../assets/icons/index";
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

const ITEMS = [
  {
    id: uuid(),
    functionality: (
      <ToolboxGreenIcon src={PlayCircleIcon} alt="playCircleIcon" />
    ),
    content: <ToolboxBox src={StartBlock} alt="startblock" />
  },
  {
    id: uuid(),
    functionality: <ToolboxBlueIcon src={LightbulbIcon} alt="lightbulbIcon" />,
    content: <ToolboxBox src={BlueBlockLeftSideEndState} alt="blueblock" />
  },
  {
    id: uuid(),
    functionality: <ToolboxBlueIcon src={RepeatIcon} alt="repeatIcon" />,
    content: <ToolboxBox src={BlueBlock} alt="blueblock" />
  },

  {
    id: uuid(),
    functionality: <ToolboxGreenIcon src={PaletteIcon} alt="paletteIcon" />,
    content: <ToolboxBox src={GreenBlock} alt="greenblock" />
  },
  {
    id: uuid(),
    functionality: <ToolboxGreenIcon src={ClockIcon} alt="clockIcon" />,
    content: <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />
  },
  {
    id: uuid(),
    functionality: <ToolboxGreenIcon src={NumberIcon1} alt="numberIcon" />,
    content: <ToolboxBox src={GreenBlock} alt="greenblock" />
  },
  {
    id: uuid(),
    functionality: <ToolboxToggleIcon src={ToggleOffIcon} alt="toggleIcon" />,
    content: <ToolboxBox src={GreenBlock} alt="greenblock" />
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
    console.log(ITEMS);
    return (
      <Board>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Toolbox ITEMS={ITEMS} />
          <GameBoard state={this.state} />
        </DragDropContext>
      </Board>
    );
  }
}
