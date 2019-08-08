import React from "react";

import FFanim from "../../assets/animations/FFanim";

const AnimationTest = () => {
  return (
    <div className="animations">
      {/* <FireflyHover /> */}
      <FFanim height={1200} width={1200} accessory="nerdglasses" color={352} />
    </div>
  );
};

export default AnimationTest;
