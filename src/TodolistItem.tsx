import { useRef, useState } from "react";
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

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={inputRef}
          onChange={(event) => setinputRef(event.currentTarget.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addTask(inputRef);
              setinputRef("");
            }
          }}
        />
        <Button
          title={"+"}
          onClick={() => {
            addTask(inputRef);
            setinputRef("");
          }}
        />
      </div>
      {tasks.length === 0 ? (
        <p>Тасок нет</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            return (
              <li key={task.id}>
                <input type="checkbox" checked={task.isDone} />
                <span>{task.title}</span>
                <Button title={"x"} onClick={() => deleteTask(task.id)} />
              </li>
            );
          })}
        </ul>
      )}
      <div>
        <Button title={"All"} onClick={() => changeFilter("all")} />
        <Button title={"Active"} onClick={() => changeFilter("active")} />
        <Button title={"Completed"} onClick={() => changeFilter("completed")} />
      </div>
    </div>
  );
};
