import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Open Source Contributor",
        ],
        autoStart: true, // Automatically start the typing effect
        loop: true,      // Loop the effect
        delay: 100,      // Typing speed (in ms) between each character
        deleteSpeed: 100, // Deleting speed for each character
        pauseFor: 2000,  // Pause time (in ms) after typing a full sentence
      }}
    />
  );
}

export default Type;



