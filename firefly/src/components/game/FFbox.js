import React from "react";
// import AnimationTest from "../part2/AnimationTest";
import FFanim from "../../assets/animations/FFanim";
import styled from "styled-components";

const FireFlyBox = styled.div`
  width: 40%;
  padding: 20px 0;
  margin: 5% auto;
  border-radius: 20px;

  background-image: linear-gradient(#555, #fff);
  /* background-image: linear-gradient(#382eb8, #7068ff); */
  box-shadow: 0px 2px 4px #000000;
`;

const FFbox = ({ tools }) => {
  return (
    <FireFlyBox
    //Conditionally render the FF box depending on play AND led blocks are on. We don't need it anymore.
    // style={!tools[0].used || !tools[1].used ? { visibility: "hidden" } : null}
    >
      <FFanim
        height={250}
        width={250}
        accessory="nerdglasses"
        color={58}
        awake={tools[1].used ? true : false}
      />
    </FireFlyBox>
  );
};

export default FFbox;
