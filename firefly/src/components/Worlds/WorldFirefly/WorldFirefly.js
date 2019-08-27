import React, { useState } from "react";

import FireflyContainer from "./FireflyContainer";

const WorldFirefly = () => {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(false); 

  return <FireflyContainer hideSourceOnDrag={hideSourceOnDrag} />;
};

export default WorldFirefly;
