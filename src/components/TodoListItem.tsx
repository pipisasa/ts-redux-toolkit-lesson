import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { deleteTodo } from '../redux/slices/todos.slice'
import { Todo } from '../types/todo'

type Props = {
  data: Todo
}

const TodoListItem: React.FC<Props> = ({ data }) => {

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    console.log('delete')
    dispatch(deleteTodo(data.id));
  }

  return (
    <div>
        <span>{data.id}</span> {' '}
        <span>{data.title}</span>{' '}
        <span>{data.status}</span>{' '}
        <button>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      <hr/>
    </div>
  )
}

export default TodoListItem
