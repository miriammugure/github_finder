import React from "react";
import "./Title.css";
function Title({ titlename }) {
  return (
    <div>
      <div className="TitleContainer">
        <p>{titlename}</p>
      </div>
    </div>
  );
}

export default Title;
