import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodosList from "./components/TodosList";
import { useAppDispatch } from "./redux/hooks";
import { fetchTodos } from "./redux/slices/todos.slice";

function App() {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchTodos());
  },[dispatch]);

  return (
    <div>
      <TodoForm />
      <TodosList />
    </div>
  );
}

export default App;
