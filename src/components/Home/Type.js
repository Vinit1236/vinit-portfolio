import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend Developer",
          "Leetcode & DSA Lover",
          "Learning MERN Stack",
          "Looking for New Opportunities"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}
export default Type;
