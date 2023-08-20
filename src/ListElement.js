import React from "react";
import "./styles.css";

export default function ListElement(props) {
  // console.log("here")
  // console.log(props.state)
  React.useEffect(() => {
    console.log(props.state);
  });

  return (
    <div className="list-element">
      <input
        type="checkbox"
        defaultChecked={props.state}
        id={props.id}
        onClick={props.handleChange}
      ></input>

      <p
        style={
          props.state
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.content}
      </p>
    </div>
  );
}
