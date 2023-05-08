import React, { useState } from 'react'
let i =0

     const Hook = () =>{

        const [titulo,setTitulo]=useState('Este es el titulo original')
    const[setPreveState]=useState('')

       const changeTitle =() => {
          i++
          setPreveState(titulo)
          setTitulo('Nuevo '+i)
          


       } 
   
     const reverTitle = () => {
        i =0
   // setTitulo(preveSate)
   setTitulo('Nuevo '+i)
     
}
  return (
<>   
    <h2> {titulo} </h2>

    <button onClick={()=> changeTitle()} >Cambiar titulo </button>
    <hr></hr>
    <button onClick={()=> reverTitle()} >Cambiar otro titulo </button>
    <span > Cambiando:{i}</span>
    </>

  )
}

export default Hook