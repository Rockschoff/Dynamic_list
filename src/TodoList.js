import React from "react";
import ListElement from "./ListElement";

export default function TodoList(props) {
  // console.log(props.list.length);
  // var items = props.list.map((ele, i) => (
  //   <ListElement
  //     content={ele.text}
  //     state={ele.state}
  //     handleChange={props.handleChange}
  //     id={i}
  //   />
  // ));
  // console.log(items);

  return (
    <div>
      {props.list.map((ele, i) => (
        <ListElement
          content={ele.text}
          state={ele.state}
          handleChange={props.handleChange}
          id={i}
          key={i}
        />
      ))}
    </div>
  );
}
