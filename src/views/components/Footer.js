import React from 'react'
import { useDispatch } from 'react-redux'
import  Link  from './Link'



const Footer = () => {

  const dispatch = useDispatch()
    
  return ( 
  <p>
    Show:
    {" "}
    <Link filter="SHOW_ALL">
      Todos
    </Link>
    {", "}
    <Link filter="SHOW_ACTIVE">
      Activo
    </Link>
    {", "}
    <Link filter="SHOW_COMPLETED">
      Completado
    </Link>
  </p>
)
}

export default Footer