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
  const inputRef = useRef<HTMLInputElement>(null);

  // через useState:
  // const [inputRef, setinputRef] = useState("");

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          // Через useRef:
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputRef.current) {
              addTask(inputRef.current.value);
              inputRef.current.value = "";
            }
          }}

          //через useState:
          //value={inputRef}
          // onChange={(e) => setinputRef(e.currentTarget.value)}
        />

        {/* Через useRef: */}
        <Button
          title={"+"}
          onClick={() => {
            if (inputRef.current) {
              addTask(inputRef.current.value);
              inputRef.current.value = "";
            }
          }}

          //через useState:
          // onClick={() => {
          //   addTask(inputRef);
          //   setinputRef("");
          // }}
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
