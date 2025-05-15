import { useRef, useState, KeyboardEvent, ChangeEvent } from "react";
import type { FilterValues, Task } from "./App";
import { Button } from "./Button";

type Props = {
  title: string;
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  changeFilter: (filter: FilterValues) => void;
  addTask: (taskTitle: string) => void;
};

export const TodolistItem = ({
  title,
  tasks,
  deleteTask,
  changeFilter,
  addTask,
}: Props) => {
  const [inputRef, setinputRef] = useState("");

  function changeFilterHandler(filterValue: FilterValues) {
    changeFilter(filterValue);
  }

  const addTaskHandler = () => {
    addTask(inputRef);
    setinputRef("");
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTaskHandler();
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setinputRef(event.currentTarget.value);
  };

  const mappedTasks = tasks.map((task) => {
    const deleteTaskHandler = () => {
      deleteTask(task.id);
    };

    return (
      <li key={task.id}>
        <input type="checkbox" checked={task.isDone} />
        <span>{task.title}</span>
        <button onClick={deleteTaskHandler}>x</button>
      </li>
    );
  });

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={inputRef}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
        <button onClick={addTaskHandler}>+</button>
      </div>
      {tasks.length === 0 ? <p>Тасок нет</p> : <ul>{mappedTasks}</ul>}
      <div>
        {/* <button onClick={() => changeFilterHandler("all")}>All</button>
        <button onClick={() => changeFilterHandler("active")}>Active</button>
        <button onClick={() => changeFilterHandler("completed")}>
          Completed
        </button> */}

        <Button title={"All"} onClick={() => changeFilterHandler("all")} />
        <Button title={"Active"} onClick={() => changeFilterHandler("active")} />
        <Button title={"Completed"} onClick={() => changeFilterHandler("completed")} />
      </div>
    </div>
  );
};
