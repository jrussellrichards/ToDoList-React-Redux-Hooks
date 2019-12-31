import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../state/actions/index'



let AddTodo = () => {
  let input
  const dispatch = useDispatch()

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()

        dispatch(addTodo(input.value)) 

      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Añadir tarea
        </button>
      </form>
    </div>
  )
}


export default AddTodo