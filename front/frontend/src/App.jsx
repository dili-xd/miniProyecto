import {useState} from "react"
import './App.css'
import { postData } from "./servicios/fetch"

function App() {
  const[nombreUsuario,setNombreUsuario]= useState("")
  const[calveUsuario,setclaveUsuario]= useState("")
async function crearUsuario(){
  const objUsuario = {
    username: nombreUsuario,
    password: calveUsuario
  }
  await postData(objUsuario,'api/crear_usuario/')
}
  return (
    <>
      <h1>Registro</h1>
      <input type="text" placeholder="Nombre de usuario" onChange={(e)=>setNombreUsuario(e.target.value)} />
      <input type="password" placeholder="Clave Usuario " onChange={(e)=>setclaveUsuario(e.target.value)} />
      <button onClick={crearUsuario}>Crear Usuario</button>
    </>
  )
}
export default App