import React, { useState } from "react";
import Card from "../utils/card";
import "./home.css";

const LoadCategory = () => {
  const categories = ["Family", "Work", "Study"];

  const categoryTasks = [
    { Family: ["task1", "task2", "task3"] },
    { Work: ["task4", "task5", "task6"] },
    { Study: ["task7", "task8", "task9"] },
  ];

  const [renderTask, setRenderTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const onCLickHandler = (event) => {
    const cat = categoryTasks[event.target.value];
    const catTasks = cat[event.target.name];
    setRenderTask(true);
    setTasks(
      catTasks.map((task, index) => {
        return (
          <li>
            <button className="op-btn" value={index} name={task}>
              {task}
            </button>
          </li>
        );
      })
    );
  };

  const renderCatrgories = () => {
    const opertaions = categories.map((category, index) => {
      return (
        <li>
          <button
            onClick={onCLickHandler}
            className="op-btn"
            value={index}
            name={category}>
            {category}
          </button>
        </li>
      );
    });
    return opertaions;
  };

  return (
    <>
      <Card>
        <div>LoadCategory</div>
        <ul> {renderCatrgories()}</ul>
      </Card>
        {renderTask && <Card>{tasks}</Card>}
    </>
  );
};

export default LoadCategory;
