import React, { PropTypes } from 'react'
import { setVisibilityFilter } from '../../state/actions/index'
import { useDispatch } from 'react-redux'

const Link = ({ active, children, filter }) => {
  if (active) {
    return <span>{children}</span>
  }
  const dispatch = useDispatch()

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         dispatch(setVisibilityFilter(filter)) 
         
       }}
    >
      {children}
    </a>
  )
}

// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }

export default Link