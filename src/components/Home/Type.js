import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web Developer",
          "Leetcode & DSA Lover",
          "Learning MERN Stack",
          "Problem Solver",
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
