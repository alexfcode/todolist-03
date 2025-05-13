import { ChangeEvent, useState, KeyboardEvent } from "react";
import type { FilterValues, Task } from "./App";
import { Button } from "./Button";

type Props = {
  title: string;
  tasks: Task[];
  deleteTask: (taskId: string) => void;
  changeFilter: (filter: FilterValues) => void;
  addTask: (inputRef: string) => void;
};

export const TodolistItem = ({
  title,
  tasks,
  deleteTask,
  changeFilter,
  addTask,
}: Props) => {
  const [newTitle, setNewTitle] = useState("");
  console.log(newTitle);

  const changeFilterHandler = (filterValue: FilterValues) => {
    changeFilter(filterValue);
  };

  const deleteTaskHandler = (taskId: string) => {
    deleteTask(taskId);
  };

  const addTaskHandler = () => {
    addTask(newTitle);
    setNewTitle("");
  };

  const onKeyDownkHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTaskHandler();
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setNewTitle(e.currentTarget.value);

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input
          value={newTitle}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownkHandler}
        />
        <button onClick={addTaskHandler}>+</button>
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
                {/* <Button title={"x"} onClick={() => deleteTask(task.id)} /> */}
                <button onClick={() => deleteTaskHandler(task.id)}>х</button>
              </li>
            );
          })}
        </ul>
      )}

      <div>
        <button onClick={() => changeFilterHandler("all")}>All</button>
        <button onClick={() => changeFilterHandler("active")}>Active</button>
        <button onClick={() => changeFilterHandler("completed")}>
          Completed
        </button>
        {/* <button onClick={() => changeFilter("completed")} >Completed</button> */}
        {/* <Button title={"All"} onClick={() => changeFilter("all")} />
        <Button title={"Active"} onClick={() => changeFilter("active")} />
        <Button title={"Completed"} onClick={() => changeFilter("completed")} /> */}
      </div>
    </div>
  );
};

//----------------------------------------------------------------------------------

// import { useRef } from "react";
// import type { FilterValues, Task } from "./App";
// import { Button } from "./Button";

// type Props = {
//   title: string;
//   tasks: Task[];
//   deleteTask: (taskId: string) => void;
//   changeFilter: (filter: FilterValues) => void;
//   addTask: (inputRef: string) => void;
// };

// export const TodolistItem = ({
//   title,
//   tasks,
//   deleteTask,
//   changeFilter,
//   addTask,
// }: Props) => {

//   const inputRef = useRef<HTMLInputElement>(null);

//   return (
//     <div>
//       <h3>{title}</h3>
//       <div>
//         <input ref={inputRef} />
//         <Button
//           title={"+"}
//           onClick={() => {
//             if (inputRef.current) {
//               addTask(inputRef.current.value);
//               inputRef.current.value = ""
//             }
//           }}
//         />
//       </div>
//       {tasks.length === 0 ? (
//         <p>Тасок нет</p>
//       ) : (
//         <ul>
//           {tasks.map((task) => {
//             return (
//               <li key={task.id}>
//                 <input type="checkbox" checked={task.isDone} />
//                 <span>{task.title}</span>
//                 <Button title={"x"} onClick={() => deleteTask(task.id)} />
//               </li>
//             );
//           })}
//         </ul>
//       )}
//       <div>
//         <Button title={"All"} onClick={() => changeFilter("all")} />
//         <Button title={"Active"} onClick={() => changeFilter("active")} />
//         <Button title={"Completed"} onClick={() => changeFilter("completed")} />
//       </div>
//     </div>
//   );
// };
