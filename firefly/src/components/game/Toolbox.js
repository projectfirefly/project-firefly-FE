import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

const List = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
`;

const Kiosk = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 0px 20px 20px 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  background: #fff;
`;

const Block = styled.span`
  width: 100%;
  height: 100%;
  position: relative;

  ~ div {
    transform: none !important;
  }
`;

const BlockUsed = styled.span`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.6;

  ~ div {
    transform: none !important;
  }
`;

const Tool = styled.div`
  display: flex;
`;

const ToolUsed = styled.div`
  display: flex;
  opacity: 0.6;
`;

const Item = styled.div`
  display: flex;
  height: 80px;
  user-select: none;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  position: relative;
`;

const Clone = styled.span`
  width: 100%;
  height: 100%;
  position: relative;

  ~ div {
    transform: none !important;
  }
`;

const Toolbox = ({ tools }) => {
  return (
    <div>
      <Droppable
        droppableId="ITEMS"
        isDropDisabled={true}
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <Kiosk
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tools.map((item, index) => {
              return (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  isDragDisabled={item.used}
                >
                  {(provided, snapshot) => (
                    <React.Fragment>
                      <Item
                        ref={provided.innerRef}
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        style={provided.draggableProps.style}
                      >
                        {item.used ? (
                          <BlockUsed>
                            <ToolUsed>
                              {item.content}
                              {item.functionality}
                            </ToolUsed>
                          </BlockUsed>
                        ) : (
                          <Block>
                            <Tool>
                              {item.content}
                              {item.functionality}
                            </Tool>
                          </Block>
                        )}
                      </Item>
                      {snapshot.isDragging && (
                        <Clone>
                          <Tool>
                            {item.content}
                            {item.functionality}
                          </Tool>
                        </Clone>
                      )}
                    </React.Fragment>
                  )}
                </Draggable>
              );
            })}
          </Kiosk>
        )}
      </Droppable>
    </div>
  );
};

export default Toolbox;
