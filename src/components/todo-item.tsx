import { TodoListType } from "../types/todo-list";

interface TodoItemProps {
  data?: TodoListType[];
  handleUpdateTodoList: (index: number) => void;
  handleDeleteTodoList: (index: number) => void;
}
export default function TodoItem({
  data,
  handleUpdateTodoList,
  handleDeleteTodoList,
}: TodoItemProps) {
  return (
    <div className={"todo-list-items"}>
      {data && data.length > 0 ? (
        data
          .sort((x, y) => {
            return Number(x.isDone) - Number(y.isDone);
          })
          .map((item, index) => (
            <div
              className={
                "item d-flex align-items-center justify-content-between"
              }
              key={index}
              role={"button"}
            >
              <label
                role={"button"}
                className={`d-flex align-items-center ${item.isDone && "done"}`}
              >
                <input
                  type="checkbox"
                  name="checkbox"
                  checked={item.isDone}
                  onChange={() => {
                    handleUpdateTodoList(index!);
                  }}
                />
                {item.description}
              </label>
              <a
                title={`Delete : ${item.description}`}
                onClick={() => {
                  handleUpdateTodoList(index!);
                }}
              >
                <span className={"material-symbols-outlined delete-todo-list"}>
                  delete
                </span>
              </a>
            </div>
          ))
      ) : (
        <div
          className={
            "empty-task d-flex align-items-center justify-content-center flex-column"
          }
        >
          <span className={"material-symbols-outlined"}>add_task</span>
          <p>
            Todo list is empty, you can add todolist <br />
            by click + button below
          </p>
        </div>
      )}
    </div>
  );
}
