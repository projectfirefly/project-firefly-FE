import React from "react";
import Icon from "../../assets/icons";

const ProfileFly = ({ color }) => {
  return (
    <div>
      <Icon
        name="Firefly"
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 1024 1024"}
        lighttopFill={`hsl(${color},100%,35%)`}
        lightmidFill={`hsl(${color},100%,45%)`}
        lightbottomFill={`hsl(${color},100%,55%)`}
        shineStroke={`hsl(${color},100%,55%)`}
      />
    </div>
  );
};

export default ProfileFly;
