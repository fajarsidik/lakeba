import { ChangeEvent, useState } from "react";
import { TodoListType } from "../types/todo-list";
import TodoItem from "../components/todo-item";

const TodoList = () => {
  const [todoData, setTodoData] = useState<TodoListType[]>([]);
  const [isAddNew, setAddNew] = useState<boolean>(false);
  const [todoDescription, setTodoDescription] = useState<string>("");

  const handleChangeDescription = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoDescription(value);
  };
  const handleAddTodoList = () => {
    let addTodo = [...todoData];
    let newTodo = {
      description: todoDescription,
      isDone: false,
    };
    addTodo.push(newTodo);
    setTodoData(addTodo);
    handleAddNew();
  };

  const handleUpdateTodoList = (id: number) => {
    let updateTodo = [...todoData];
    updateTodo[id].isDone = !updateTodo[id].isDone;
    setTodoData(updateTodo);
  };

  const handleDeleteTodoList = (id: number) => {
    let removeTodo = [...todoData];
    removeTodo.splice(id, 1);
    setTodoData(removeTodo);
  };

  const handleAddNew = () => {
    setAddNew(!isAddNew);
  };

  return (
    <div className={"page-todo-list"}>
      <div className={"card card-todo-list"}>
        <div className={"header"}>
          <h4>Todo List</h4>
        </div>
        
        <TodoItem data={todoData} handleUpdateTodoList={handleUpdateTodoList} handleDeleteTodoList={handleDeleteTodoList} />        

        {isAddNew && (
          <div className={"input-todo-list"}>
            <input
              type={"text"}
              name={"add-new-todolist"}
              placeholder="Add your todo list here"
              onChange={handleChangeDescription}
            />
          </div>
        )}

        <div
          className={
            "add-todo-list d-flex align-items-center justify-content-center"
          }
          role={"button"}
          onClick={isAddNew ? handleAddTodoList : handleAddNew}
        >
          <span className={"material-symbols-outlined"}>add</span>

          {isAddNew && <p>Add Task</p>}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
