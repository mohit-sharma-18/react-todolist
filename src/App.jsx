import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import ToDoList from "./ToDoList";
function App() {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const saveTask = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <section className="my-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 add-list-block py-3">
              <h1 className="text-info">Add Task</h1>
              <div className="form-group">
                <label for="task-content"></label>
                <input
                  className="form-control"
                  id="task-content"
                  rows="4"
                  placeholder="Add your task"
                  onChange={itemEvent}
                  value={inputList}
                ></input>
              </div>
              <button
                type="button"
                onClick={saveTask}
                className="btn btn-info w-25 add-task mt-3"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <ol>
          {item.map((itemVal, index) => {
            return (
              <ToDoList
                key={index}
                id={index}
                text={itemVal}
                onSelect={deleteItem}
              />
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default App;