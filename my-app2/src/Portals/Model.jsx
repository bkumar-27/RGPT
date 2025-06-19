import React from "react";

import "./style.css";
import ReactDOM from "react-dom";

function Model({ toggleModel, name }) {
  return ReactDOM.createPortal(
    <div className="model-overlay">
      <div className="model-text">
        <h3>Model Header: {name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          quis? Consectetur quisquam inventore voluptatem laboriosam, doloribus
          cum temporibus{" "}
        </p>
        <h5>Model footer</h5>
        <button onClick={toggleModel}>close model</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}

export default Model;
