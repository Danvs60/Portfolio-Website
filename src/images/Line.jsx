import React from "react";

function Line({color = "#FE7E6D"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="5"
      fill="none"
      viewBox="0 0 50 5"
    >
      <rect width="50" height="5" fill={color} rx="2.5"></rect>
    </svg>
  );
}

export default Line;
