import React, { useState } from "react";
import logo from "./images/ToDoList-logo.jpeg";
import "./App.css";

function ToDoList() {
  const [items, setItems] = useState([
    "Math Homework",
    "React Homework",
    "Buy Products",
  ]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem("");
  };

  // event: React.ChangeEvent<HTMLInputElement აი ეს რას შვება ვერ გავიგე უბრალოდ event რომ მეწერა ერორს მიგდებდა და მეუბნებოდა რომ any type-ს იყენებო და რო დავსერჩე ეს ვიპოვე გამოსავალი

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(event.target.value);
  };

  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">To Do List</h1>
      </div>
      <img src={logo} alt="ToDoList Logo" className="logo" />
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id={`checkbox${index}`}
            />
            <label
              className="form-check-label stretched-link"
              htmlFor={`checkbox${index}`}
            >
              {item}
            </label>
          </li>
        ))}
        <li className="list-group-item">
          <input
            className="form-control"
            type="text"
            placeholder="Add New Case"
            value={newItem}
            onChange={handleChange}
          />
          <button className="btn btn-primary mt-2" onClick={handleAddItem}>
            Add Task
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ToDoList;
