import React, { PropTypes } from 'react'
import { connect,useDispatch,useSelector } from 'react-redux'
import Todo from './Todo'
import { toggleTodo } from '../../state/actions/index'


// const dispatch = useDispatch()
const TodoList = () => {

  const list = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
  <ul>
    {list.map(todo =>
      <Todo
      onClick={
        
        // () => onTodoClick(todo.id)
        () => dispatch(toggleTodo(todo.id))
      }
        key={todo.id}
        {...todo}
      />
    )}
  </ul> ) 
}

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }

export default TodoList