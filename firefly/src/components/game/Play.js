import React, { useState, useEffect } from "react";
import FFanim from "../../assets/animations/FFanim";
import FFbox from "../../assets/animations/FFbox";

const Play = () => {
  const [delay, setDelay] = useState(1000);
  const [repeat, setRepeat] = useState(0);
  const [color, setColor] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(0);

  function toggle() {
    setIsPlaying(!isPlaying);
  }

  function reset() {
    setSeconds(0);
    setIsPlaying(false);
  }

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isPlaying && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, seconds]);
  return <div />;
};

export default Play;
