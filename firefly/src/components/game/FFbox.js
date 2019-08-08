import React from "react";
import AnimationTest from "../part2/AnimationTest";
import styled from "styled-components";

const Styled = styled.div`
  height: 320px;
  width: 320px;
  padding: 20px 0;
  margin: 1% auto;
  border-radius: 20px;
  background-image: linear-gradient(#382eb8, #7068ff);
  box-shadow: 0px 2px 4px #000000;
`;

const FFbox = () => {
  return (
    <Styled>
      <AnimationTest
        height={250}
        width={250}
        accessory="nerdglasses"
        color={352}
      />
    </Styled>
  );
};

export default FFbox;
