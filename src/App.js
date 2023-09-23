import { useState } from "react";
import userContext from "./userContext";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  const [task, setTask] = useState([]);

  const add = (value) => {
    console.log("value", value);
    setTask([
      ...task,
      {
        id: new Date().getTime(),
        data: new Date().toDateString(),
        title: value,
      },
    ]);
  };

  const del = () => {
    setTask([]);
  };

  const delTask = (id) => {
    setTask(task.filter((i) => i.id !== id));
  };
  return (
    <userContext.Provider value={{ task, setTask, add, del, delTask }}>
      <div className="App">
        <h1>TODOLIST</h1>

        <TodoList />
        <Form />
      </div>
    </userContext.Provider>
  );
}
