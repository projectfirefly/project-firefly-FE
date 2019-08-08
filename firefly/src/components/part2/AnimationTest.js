import React from "react";

import FireflyHover from "../../assets/animations/fireflyHover";
import FFanim from "../../assets/animations/FFanim";

const AnimationTest = () => {
  return (
    <div className="animations">
      {/* <FireflyHover /> */}
      <FFanim height={200} width={200} accessory="lambdahat" color="red" />
    </div>
  );
};

export default AnimationTest;
