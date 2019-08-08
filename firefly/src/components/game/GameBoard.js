import React from "react";
import FFbox from "./FFbox";
import BlockLine from "./BlockLine";
import styled from "styled-components";

const Styled = styled(FFbox)`
  border: 2px solid green;
  height: 200px;
`;

const GameBoard = () => {
  return (
    <div>
      <Styled />
      <BlockLine />
    </div>
  );
};

export default GameBoard;
