import React from 'react'
import { useState } from 'react';
import FormStyles from './form.module.css'

const Form = ({datos, setDatos, setShow}) => {

    const [student, setStudent] = useState({
        name:"",
        hobby:"",
        age: 0
      })

    const [error, setError] = useState(false);

    const handleChangeName = (event) => {
        setStudent({ ...student, name: event.target.value });
      };
    
      const handleChangehobby = (event) => {
        setStudent({ ...student, hobby: event.target.value });
      };

      const handleChangeAge = (event) => {
        setStudent({ ...student, age: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if(student.name.length < 3 || student.name.includes(' ') || student.hobby.length < 6){
          setError(true)

        }else{
          setError(false)
          setDatos([...datos,student]);
          setShow(true)
          event.target.reset();
          setStudent({
            name:"",
            hobby:"",
            age: 0
          });
        }


           
      };

  return (
    <>
      <form onSubmit={handleSubmit} className={FormStyles.inputContainer}>
        <input type="text" onChange={handleChangeName} placeholder='Nombre'/>
        <input type="text" onChange={handleChangehobby} placeholder='Hobby'/>
        <input type="number" onChange={handleChangeAge} placeholder='Edad'/>
        <button type='submit' className={FormStyles.buttonMaterial}>Enviar</button>
      </form>
      {error ? <p className={FormStyles.errorMessage}>Por favor chequea que la información sea correcta</p> : null}
    </>
    
  )
}

export default Form
