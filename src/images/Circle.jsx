import React from "react";

function Circle({size = 160}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 183 183"
      style={{
        mixBlendMode: "multiply"
      }}
    >
      <circle cx="91.5" cy="91.5" r="91.5" fill="#FE7E6D"></circle>
    </svg>
  );
}

export default Circle;
