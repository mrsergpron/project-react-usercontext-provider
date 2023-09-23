import userContext from "../userContext";
import "../styles.css";


const TodoList = () => (
  <ul>
    <userContext.Consumer>
      {(value) =>
        value.task.map((i) => (
          <li key={i.id}>
            <div>{i.data}</div>
            <div>{i.title}</div>
            <div>
              <button onClick={() => value.delTask(i.id)}>Del</button>
            </div>
          </li>
        ))
      }
    </userContext.Consumer>
  </ul>
);

export default TodoList;
