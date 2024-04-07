import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  // Add todo item in the list
  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  // functionality for when input value is not empty then add todo item to the list
  const todoApp = () => {
    if (input !== "") {
      setTodo([...todo, input]);
      setInput("");
    }
  };

  const deleteHandler = (index) => {
    let updateTodo = todo.filter((elem, id) => {
      return index !== id;
    });
    setTodo(updateTodo);
  };

  return (
    <div className="container">
      <div className="input">
        <input
          type="text"
          placeholder="Enter You Task"
          onChange={changeHandler}
          value={input}
        />
        <button className="addBtn" onClick={() => todoApp()}>
          <IoMdAddCircle />
        </button>
      </div>
      {
        // map through iterating array and displaying each item
        todo !== [] &&
          todo.map((data, index) => (
            <div className="listContainer" key={index}>
              <div className="listItem">{data}</div>
              <div className="deleteBtn" onClick={() => deleteHandler(index)}>
                <MdDeleteForever />
              </div>
            </div>
          ))
      }
    </div>
  );
};

export default Todo;
