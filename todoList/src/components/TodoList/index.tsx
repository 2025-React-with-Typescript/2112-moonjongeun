import { type TabState, type Todo } from "../../App";
import Footer from "./Footer";
import Header from "./Header";
import TodoItem from "./TodoItem";

interface TodoProps {
  todos: Todo[];
  currentTab: TabState;
}

const TodoList = ({ todos, currentTab }: TodoProps) => {
  return (
    <>
      <Header />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <Footer todos={todos} currentTab={currentTab} />
    </>
  );
};

export default TodoList;
