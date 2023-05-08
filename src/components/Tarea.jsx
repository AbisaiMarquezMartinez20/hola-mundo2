import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal,ModalBody, ModalFooter, ModalHeader,Button } from "reactstrap";

import './style.css'


export const Tarea=()=>{
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [career, setCareer] = useState('ISIC')
    const [imageUrl, setImageUrl] = useState('')

    const handleIdChange = (event) => {
        setId(event.target.value)
    }
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleCareerChange = (event) => {
        setCareer(event.target.value)
    }
    const handleImageUpload = (event) => {
        const file = event.target.files?.[0]
        const reader = new FileReader()
        reader.addEventListener('load', () => {
            setImageUrl(reader.result.toString())
        })
        if (file) {
            reader.readAsDataURL(file)
        }
    }

    const alumnos=[]
    const [alumn,setAlumn]=useState(alumnos)

    const [showModal, setShowModal] = useState(false)
    const handleShowModal=()=>{
        setShowModal(true)
    }
    const handleCloseModal=()=>{
        setShowModal(false)
    }
    const [edit, setEdit] = useState(false)
    const [buttonSubmitText, setButtonSubmitText] = useState('Editar')
    const [indexToEdit, setIndexToEdit] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(id===''||name===''||career===''||imageUrl===''){
            alert('LLENA LOS CAMPOS FALTANTES')
        }else{
            if(edit===false){
                setAlumn([...alumn,{id:id,name:name,career:career,image:imageUrl}])
            }else{
                alumn[indexToEdit]={...alumn[indexToEdit],id:id,name:name,career:career,image:imageUrl}
                setAlumn(alumn)
                setButtonSubmitText('Editar')
                setEdit(false)
            }
            setShowModal(false)
            setId('')
            setName('')
            setCareer('ISIC')
            setImageUrl('')
        }
    }

    const deleteElement=(id)=>{
        setAlumn(alumn.filter(obj => obj.id !== id))
    }
    const editElement=(index)=>{
        setId(alumn[index].id)
        setName(alumn[index].name)
        setCareer(alumn[index].career)
        setImageUrl(alumn[index].image)
        setEdit(true)
        setButtonSubmitText('Edit')
        setIndexToEdit(index)
        handleShowModal()
    }
    return(
        <>
            <div style={{textAlign:"center"}}>
                <Button color="success" onClick={handleShowModal}>AGREGA UN NUEVO PRODUCTO  </Button>
            </div>
            {showModal &&
                <Modal isOpen={showModal} toggle={()=>handleShowModal()}  >
                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="bg-primary">REFACCIONARIA APM</ModalHeader>
                        <ModalBody className="bg-ligth">  
                        <label>
                             PRECIO PRODUCTO :<input id={"inputs"} type={"number"} value={id} onChange={handleIdChange}/>
                        </label>
                        <br/><br/>
                        <label>
                        NOMBRE PRODUCTO:<input id={"inputs"} type={"text"} value={name} onChange={handleNameChange}/>
                        </label>
                        <br/><br/>
                        <label>
                            MARCA DEL PROCUTO:
                            <select id={"inputs"} value={career} onChange={handleCareerChange}>
                                <option value={"ISIC"}>ISIC</option>
                                <option value={"Quimica"}>Quimica</option>
                                <option value={"TICs"}>TICs</option>
                                <option value={"Civil"}>Civil</option>
                                <option value={"Industrial"}>Industrial</option>
                                <option value={"Administracion"}>Administracion</option>
                                <option value={"Mecatronica"}>Mecatronica</option>
                                <option value={"Logistica"}>Logistica</option>
                            </select>
                        </label>
                        <br/><br/>
                        <input type={"file"} accept={"image/*"} onChange={handleImageUpload}/>
                        </ModalBody>
                        <ModalFooter style={{backgroundColor:""}}>

                            <Button color={"success"} outline type={"submit"}>{buttonSubmitText}</Button>
                            <Button color={"danger"} outline onClick={()=>handleCloseModal()}>Cancelar</Button>
                        </ModalFooter>
                        <br/><br/><br/>
                        
                    </form>
                </Modal>
                
            }
            <div id={"contenedor"} className="bg-light">
                <table border={1} style={{margin:"50px",textAlign:"center"}} >

                    <thead>
                    <tr>
                        <th id={"th2rem"}></th>
                        <th style={{width:"3rem"}}>ID</th>
                        <th id={"th8rem"}>NOMBRE</th>
                        <th id={"th8rem"}>CARREA</th>
                        <th style={{width:"15rem"}}>IMAGEN</th>
                        <th id={"th2rem"}></th>
                        <th id={"th2rem"}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        alumn.map((item,index)=>(
                            <tr>
                                <td>{index}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.career}</td>
                                <td><img alt="foto" src={item.image} width={"200px"} height={"100px"}/></td>
                                <td><Button id={"buttonAdd"} onClick={()=>editElement(index)}>Editar</Button></td>
                                <td><Button id={"buttonCancel"} onClick={()=>deleteElement(item.id)}>Eliminar</Button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}