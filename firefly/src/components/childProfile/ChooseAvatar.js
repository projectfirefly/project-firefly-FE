import React from "react";
import ColorSlider from "../ColorSlider/ColorSlider";
import Icon from "../../assets/icons";
import styled from "styled-components";

const Chooser = styled.div`
  margin: 0 auto;
  margin-top: 50px;
`;
const ChooseAvatar = () => {
  return (
    <Chooser>
      <Icon name="Firefly" width={200} />
      <ColorSlider />
    </Chooser>
  );
};

export default ChooseAvatar;
