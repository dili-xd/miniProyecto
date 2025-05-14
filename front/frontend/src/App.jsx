import {useState} from "react"
import './App.css'

function App() {
  const[nombreUsuario,setNombreUsuario]= useState("")
  const[calveUsuario,setclaveUsuario]= useState("")

async function crearUsuario(){
  const objUsuario = {
    username: nombreUsuario,
    password: calveUsuario
  }

}
  
  return (
    <>
      <h1>Registro</h1>
      <input type="text" placeholder="Nombre de usuario" onChange={(e)=>setNombreUsuario(e.target.value)} />
      <input type="password" placeholder="Clave Usuario " onChange={(e)=>setclaveUsuario(e.target.value)} />
      <button >Crear Usuario</button>
    </>
  )
}

export default App
