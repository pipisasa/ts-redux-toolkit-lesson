import React, { useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { deleteTodo, updateTodo } from '../redux/slices/todos.slice'
import { Todo } from '../types/todo'
import TodoForm, { TodoFormOnSubmit } from './TodoForm'

type Props = {
  data: Todo
}

const TodoListItem: React.FC<Props> = ({ data }) => {

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleDelete = () => {
    console.log('delete')
    dispatch(deleteTodo(data.id));
  }

  const toggleEdit = () => {
    setIsEdit(isEdit => !isEdit);
  }

  const handleEdit: TodoFormOnSubmit = (values, helpers) => {
    dispatch(updateTodo({ id: data.id, ...values}))
    helpers.resetForm()
    toggleEdit();
  }

  return (
    <div>
      <div>
        <span>{data.id}</span> {' '}
        <span>{data.title}</span>{' '}
        <span>{data.status}</span>{' '}
        <button onClick={toggleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {isEdit && <TodoForm data={data} onSubmit={handleEdit}/>}
      <hr/>
    </div>
  )
}

export default TodoListItem
