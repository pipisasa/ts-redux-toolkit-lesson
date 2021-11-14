import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import  * as Yup from 'yup';
import { useAppDispatch } from '../redux/hooks';
import { createTodo } from '../redux/slices/todos.slice';

const initialValues = {
  title: '',
  status: '',
}

const TodoSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  status: Yup.string().required('Status is required').oneOf(['TODO', 'DOING', 'DONE']),
});

const TodoForm: React.FC = () => {

  const dispatch = useAppDispatch();

  const onSubmit = (values: any, helpers: FormikHelpers<typeof initialValues>) => {
    dispatch(createTodo(values));
    helpers.resetForm()
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={TodoSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                name="title"
                type="text"
                placeholder="Enter Todo"
              />
              { errors.title && touched.title && <div style={{ color: 'red' }}>{errors.title}</div> }
            </div>

            <div>
              <select
                value={values.status}
                onChange={handleChange}
                onBlur={handleBlur}
                name="status"
              >
                <option value={""}>Select Status</option>
                <option value="TODO">TODO</option>
                <option value="DOING">DOING</option>
                <option value="DONE">DONE</option>
              </select>
              { errors.status && touched.status && <div style={{ color: 'red' }}>{errors.status}</div> }
            </div>

            <button disabled={isSubmitting} type="submit">
              Add Todo
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default TodoForm
