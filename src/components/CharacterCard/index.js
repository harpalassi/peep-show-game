import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div>
      <div className="col-sm-3">
        <div className="character">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
