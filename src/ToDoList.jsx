import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="saveTask">
        <li>{props.text}</li>
        <button
          className="btn btn-danger m-2"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default ToDoList;