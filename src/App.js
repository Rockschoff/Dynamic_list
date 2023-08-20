import "./styles.css";
import React from "react";

import TodoList from "./TodoList";
export default function App() {
  var [list, setList] = React.useState([
    { state: false, text: "I am this" },
    { state: false, text: "I am that" }
  ]);

  // list element  text, cancelled
  function handleChange(event) {
    var id = parseInt(event.target.id);
    var l = list.slice();
    l[id].state = !l[id].state;
    setList(l);
    console.log(list[id]);
    // var para = event.target.parentElement.childNodes[1];
  }
  function RemoveFinished(event) {
    var l = [];
    for (var i = 0; i < list.length; i++) {
      if (!list[i].state) {
        l.push(list[i]);
      }
    }
    setList(l);
    console.log(list);
  }
  function AddTask(event) {
    event.preventDefault();
    var l = list.slice();
    var t = document.getElementById("new-task").value;
    l.push({ state: false, text: t });
    setList(l);
    document.getElementById("new-task").value = "";
  }
  return (
    <div className="App">
      <div className="container">
        <form onSubmit={AddTask}>
          <input type="text" id="new-task" placeholder="New Task..." />
          <input type="submit" />
        </form>
        <TodoList list={list} handleChange={handleChange} />
        <button className="remove-button" onClick={RemoveFinished}>
          Remove Finished Tasks
        </button>
      </div>
    </div>
  );
}
