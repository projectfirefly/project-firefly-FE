import React from "react";
import Icon from "../../assets/icons";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const Chooser = styled.div`
  margin: 0 auto;
  width: 100%;
  margin-top: -50px;
`;

const SliderBox = styled.div`
  margin: 0 auto;
  width: 200px;
  margin-top: -50px;
  padding-bottom: 20px;
`;

export default function ChooseAvatar(props) {

  return (
    <Chooser>
      <Icon
        name="Firefly"
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 1024 1024"}
        lighttopFill={`hsl(${props.value},100%,35%)`}
        lightmidFill={`hsl(${props.value},100%,45%)`}
        lightbottomFill={`hsl(${props.value},100%,55%)`}
        shineStroke={`hsl(${props.value},100%,55%)`}
      />
    </Chooser>
  );
}
