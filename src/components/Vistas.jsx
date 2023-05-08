import React,{ useState } from 'react'
export const Vistas = () => {

    const heroeInicial=[
        "El felino ", "xochilt", "La diana", "el Batman", "Super Man",
      ]
    
      const [heroes,setHeroes]= useState(heroeInicial)
      const alumnosInicial = [{id: '201901',nombre: 'El manolito', carrera: 'El oso' },
                       {id: '201902',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '201904',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '201905',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '2019045',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '2019024',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '2019021',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '201902232',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '20190223256',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '20190223245',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '2019022324',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '2019022323',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '2019022322',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '2019022321',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '201902332',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '201902322',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '2019022456',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '201902987',nombre: 'La xochlit', carrera: 'El oso ' },
                       {id: '201902765',nombre: 'La xochlit', carrera: 'El oso ' },

                       {id: '201903',nombre: 'El judas', carrera: 'El oso ' },]
      
      const [alumnos,SetAlumnos]=useState(alumnosInicial)
      const agregarSuperheroe=()=>{
        let nuevoHeroe= prompt('Ingrese Producto Faltante') 
        setHeroes([
          ...heroes,
          nuevoHeroe
        ])
      }  
    
      const NuevoA=()=>{
      let nuevoId= prompt('Ingrece la Cantidad de Productos')
      let nuevoA= prompt('Ingrese el Nombre del Producto')
      let nuevoC= prompt('Ingrese el Precio del Producto ')
        SetAlumnos([
          ...alumnos, {id:nuevoId,nombre:nuevoA,carrera:nuevoC}
        ])
    
      }
    
    
    
        return (    
    
        <>
        <h1>Listas de faltantes de Falantes Para Pedido  </h1>
        
         <ul>
            {
            heroes.map((item,index)=>(
                <li key={index}>{item}</li>
            ))
        }
            </ul>
    
            <button onClick={agregarSuperheroe}>Agregar un producto  </button>   
    
            <ul>
            <table border ={10}>
              <thead>
                <tr>
                <th>Cantidad de Productos</th>
                <th>Nombre del Producto</th>
                <th>Precio del Producto</th>
                </tr>
              </thead>
              {alumnos.map((item,index)=>(
                <tBody>
                    <tr>
                      <td key={item.id}>{item.id}</td>
                      <td>{item.nombre}</td>
                      <td>{item.carrera}</td>
                    </tr>              
                </tBody>
              ))}
            </table>
            </ul> 
    
             <button onClick={()=>NuevoA()}>Agregar Nuevo Producto</button>   
    
        </>
      )
    }
    


