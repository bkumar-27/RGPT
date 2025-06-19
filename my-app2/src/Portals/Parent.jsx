import React, { useState } from "react";
import Model from "./Model";

function Parent() {
  var [openModel, setOpenModel] = useState(false);

  var toggleModel = () => {
    setOpenModel(!openModel);
  };
  return (
    <div className="parent">
      <button onClick={toggleModel}>Open Model</button>
      {openModel && <Model toggleModel={toggleModel} name="sachin" />}
    </div>
  );
}

export default Parent;
