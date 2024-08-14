import React from 'react'
import Card from '../Card/Card'
import ListStyle from "./List.module.css"

const List = ({datos}) => {
  return (
    <table className={ListStyle.styledTable}>
    <thead>
        <tr>
        <th>Nombre</th>
        <th>Hobby</th>
        <th>Edad</th>
        </tr>
    </thead>
    <tbody>
    {datos.map((student, index)=>(
        <Card key={index} {...student}/>
      ))}
    </tbody>
</table>

  )
}

export default List
