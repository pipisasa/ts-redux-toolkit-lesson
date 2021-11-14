import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { todosSelectors } from '../redux/slices/todos.slice'
import TodoListItem from './TodoListItem';

const TodosList: React.FC = () => {
  const todos = useAppSelector(state => todosSelectors.selectAll(state.todos));
  const { loading, error } = useAppSelector(state => state.todos);


  if (loading && todos.length === 0) {
    return <div>Loading...</div>
  }

  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p style={{color: 'red'}}>{error}</p>
      </div>
    )
  }

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <TodoListItem data={todo}/>
        </div>
      ))}
    </div>
  )
}

export default TodosList
