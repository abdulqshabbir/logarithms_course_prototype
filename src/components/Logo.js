import React from "react";

const Logo = () => {
  return (
    <>
      <svg id="logo" width="100" height="100">
        <rect
          x="5px"
          y="5px"
          width="93%"
          height="93%"
          fill="none"
          stroke="#e9d20f"
          strokeWidth="2%"
        ></rect>
        <line
          x1="50%"
          y1="5%"
          x2="50%"
          y2="98%"
          stroke="#e9d20f"
          strokeWidth="2%"
        />
        <line
          x1="50%"
          y1="50%"
          x2="98%"
          y2="50%"
          stroke="#e9d20f"
          strokeWidth="2%"
        />
        <line
          x1="73%"
          y1="50%"
          x2="73%"
          y2="98%"
          stroke="#e9d20f"
          strokeWidth="2%"
        />
        <line
          y1="73%"
          x1="73%"
          y2="73%"
          x2="50%"
          stroke="#e9d20f"
          strokeWidth="2%"
        />
        <line
          y1="73%"
          x1="61.5%"
          y2="50%"
          x2="61.5%"
          stroke="#e9d20f"
          strokeWidth="2%"
        />
      </svg>
    </>
  );
};

export default Logo;
