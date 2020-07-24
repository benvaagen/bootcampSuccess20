import React from "react";
import "./style.css";

function StudentCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <h3><strong>{props.name}</strong></h3>
          </li>
          {/* <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default StudentCard;
