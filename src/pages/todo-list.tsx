import { useState } from "react";
import { TodoListType } from "../types/todo-list";

const dataTodoList = [
  {
    id: 1,
    description: "Create new project",
    isDone: false,
  },
  {
    id: 2,
    description: "Working call",
    isDone: false,
  },
  {
    id: 3,
    description: "Meet with doctor",
    isDone: false,
  },
  {
    id: 4,
    description: "Go to sleep",
    isDone: false,
  },
  {
    id: 5,
    description: "Eat the cake",
    isDone: true,
  },
  {
    id: 6,
    description: "Walk with dog",
    isDone: true,
  },
  {
    id: 7,
    description: "Walk with Cat",
    isDone: true,
  },
  {
    id: 8,
    description: "Eat the fruit",
    isDone: false,
  },
  {
    id: 9,
    description: "Buy a shoes",
    isDone: true,
  },
];
const TodoList = () => {
  const [todoData, setTodoData] = useState<TodoListType[]>(dataTodoList);

  const handleUpdateTodoList = (id: number) => {
    let updateTodo = [...todoData];
    updateTodo[id].isDone = !updateTodo[id].isDone;
    setTodoData(updateTodo);
  };

  const handleDeleteTodoList = (id: number) => {
    let removeTodo = [...todoData];
    removeTodo.splice(id, 0);
    console.log(removeTodo);
    setTodoData(removeTodo);
  };

  return (
    <div className={"page-todo-list"}>
      <div className={"card card-todo-list"}>
        <div className={"header"}>
          <h4>Todo List</h4>
        </div>

        <div className={"todo-list-items"}>
          {todoData &&
            todoData.map((item, index) => (
              <div
                className={
                  "item d-flex align-items-center justify-content-between"
                }
                key={index}
                role={"button"}
              >
                <label
                  role={"button"}
                  className={`d-flex align-items-center ${
                    item.isDone && "done"
                  }`}
                >
                  <input
                    type="checkbox"
                    name="checkbox"
                    checked={item.isDone}
                    onClick={() => {
                      handleUpdateTodoList(index);
                    }}
                  />
                  {item.description}
                </label>
                <a
                  title={`Delete : ${item.description}`}
                  onClick={() => handleDeleteTodoList(index)}
                >
                  <span
                    className={"material-symbols-outlined delete-todo-list"}
                  >
                    delete
                  </span>
                </a>
              </div>
            ))}
        </div>
        <div
          className={
            "add-todo-list d-flex align-items-center justify-content-center"
          }
        >
          <span className={"material-symbols-outlined"}>add</span>
          <p>Add Task</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
