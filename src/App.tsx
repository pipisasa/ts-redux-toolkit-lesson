import { useEffect } from "react";
import TodoForm, { TodoFormOnSubmit } from "./components/TodoForm";
import TodosList from "./components/TodosList";
import { useAppDispatch } from "./redux/hooks";
import { createTodo, fetchTodos } from "./redux/slices/todos.slice";

function App() {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(fetchTodos());
  },[dispatch]);

  const handleSubmit: TodoFormOnSubmit = (values, helpers) => {
    dispatch(createTodo(values));
    helpers.resetForm()
  }
  
  return (
    <div>
      <TodoForm onSubmit={handleSubmit}/>
      <TodosList />
    </div>
  );
}

export default App;
