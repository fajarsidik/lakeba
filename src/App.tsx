import TodoList from "./pages/todo-list";
import "./styles/site.scss";

function App() {
  return (
    <div className={"App"}>
      <div className={"container"}>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
