import React, { useState } from "react";

import FireflyContainer from "./FireflyContainer";

const WorldFirefly = () => {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(false);
  // const [trashActive, setTrashState] = useState(false);
  // const confirmRemove = () => {
  //   removeFirefly(REMOVE_FIREFLY).then(() => {
  //     props.history.push("/choose-profile");
  //   });
  // };

  return <FireflyContainer hideSourceOnDrag={hideSourceOnDrag} />;
};

export default WorldFirefly;
