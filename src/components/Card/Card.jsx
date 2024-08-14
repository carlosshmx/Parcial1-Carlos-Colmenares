import React from 'react'

const Card = (props) => {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.hobby}</td>
        <td>{props.age}</td>
    </tr>
   
  )
}

export default Card

