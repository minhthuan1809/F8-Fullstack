import TodoApp from "./TodoApp";
import TodoList from "./TodoList";

export default function page() {
  return (
    <div>
      <h3>TODOLIST</h3>
      <TodoList />
      <TodoApp />
    </div>
  );
}
