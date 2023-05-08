import React, { Fragment } from 'react'

const MiComponente = () => {
 

  const miEvento = (edad,genero) => {
   let nombre = "abisai "
   
    alert(`Hola ${nombre} tu edad ${edad} y tu genero es ${genero}`)

  }



  return (
    <>
      <h2>Eres tu el primer venado  {miEvento()} </h2>
      <button onClick={()=> miEvento(22,"masculino")}>  Tocame  </button>
      </>
  )
}

export default MiComponente


