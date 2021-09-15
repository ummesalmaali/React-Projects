import React, { useState } from "react";
import "./style.css";

export default function UseState() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="center_div">
        <p>{count}</p>
        <div className="button2" onClick={() => setCount(count + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
        </div>
        <div
          className="button2"
          onClick={() => {
            setCount(count - 1);
            if (count === 0) {
              setCount(0);
            }
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECREMENT
        </div>
      </div>
    </>
  );
}
