import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
export const BlockList = ({ listId, listType, row }) => {
  return React.createElement(
    "div",
    { style: { display: "flex", alignItems: "center" } },
    React.createElement("div", null),
    React.createElement(
      Droppable,
      {
        droppableId: listId,
        type: listType,
        direction: "vertical",
        isCombineEnabled: false
      },
      dropProvided =>
        React.createElement(
          "div",
          Object.assign({}, dropProvided.droppableProps, {
            style: {
              flex: 1,
              display: "flex",
              backgroundColor: "green",
              margin: 20,
              minHeight: 60,
              overflowX: "auto"
            },
            ref: dropProvided.innerRef
          }),
          row.urls.map((url, index) =>
            React.createElement(
              Draggable,
              { key: url, draggableId: url, index: index },
              dragProvided =>
                React.createElement(
                  "div",
                  Object.assign(
                    {},
                    dragProvided.dragHandleProps,
                    dragProvided.draggableProps,
                    { ref: dragProvided.innerRef }
                  ),
                  React.createElement("img", { style: { width: 50 }, src: url })
                )
            )
          ),
          dropProvided.placeholder
        )
    )
  );
};
