import { useEffect, useState } from "react";
import { deleteData, getData, patchData, postData } from "./servicios/fetch";
function Producto(){
    const [nombreProducto,setNombreProducto] = useState('')
    const [nombreProductoEditar,setNombreProductoEditar] = useState('')
    const [precioProductoEditar,setPrecioProductoEditar]= useState('0')
    const [descripcionEditar,setdescripcionEditar]=useState('')
    const [cantidadProductoEditar,setCantidadProductoEditar]=useState(0)
    const [precioProducto,setPrecioProducto] = useState(0)
    const [descripcionProducto,setDescripcionProducto] = useState('')
    const [cantidadProducto,setCantidadProducto] = useState(0)
    const [listaProductos,setListaProductos] = useState([])
    const [recarga,setRecarga] = useState(false)
    const [mostrar,setMostrar] = useState(false)

    useEffect(()=>{
        async function traerDatos() {
            const datos = await getData('api/productos/')
            setListaProductos(datos)
        }
        traerDatos()
    },[listaProductos])

    async function agregarProducto() {
        const objProducto = {
            nombre: nombreProducto,
            precio: precioProducto,
            descripcion: descripcionProducto,
            cantidad_disponible: cantidadProducto
        }
        await postData(objProducto,'api/productos/')
        setRecarga(!recarga)
    }

    async function eliminarProducto(id){
        await deleteData('api/producto_eliminar',id)
    }

    async function actualizarProducto(id) {
        const productoActualizar = {
            nombre: nombreProductoEditar,
            precio:precioProductoEditar,
            descripcion:descripcionEditar,
            cantidad:cantidadProductoEditar
        }
        await patchData('api/producto_editar',id,productoActualizar)
        setMostrar(!mostrar) 
        
    }

    return(
        <>
            <h1>Agregar Producto</h1>
            <input type="text" placeholder="Nombre del producto" onChange={(e)=>setNombreProducto(e.target.value)}/>
            <input type="number" placeholder="Precio del producto" onChange={(e)=>setPrecioProducto(e.target.value)}/>
            <input type="text" placeholder="Descripción del producto" onChange={(e)=>setDescripcionProducto(e.target.value)}/>
            <input type="number" placeholder="Cantidad del producto" onChange={(e)=>setCantidadProducto(e.target.value)}/>
            <button onClick={agregarProducto}>Agregar Producto</button>


            <h3>Lista de productos</h3>
            <ul>
                {listaProductos.map((producto)=>{
                    return(
                        <>
                            <li>{producto.nombre}</li>
                            <li>{producto.descripcion}</li>
                            <li>{producto.precio}</li>
                            <li>{producto.cantidad_disponible}</li>
                            <button onClick={()=>eliminarProducto(producto.id)}>Eliminar</button>

                            <button onClick={()=>setMostrar(!mostrar)} >Editar</button>
                            {mostrar && (
                                <>
                                  <input type="text" placeholder="Nombre del producto" onChange={(e)=>setNombreProductoEditar(e.target.value)}/>
                                  <input type="text" placeholder="Precio del producto" onChange={(e)=>setPrecioProductoEditar(e.target.value)}/>
                                  <input type="text" placeholder="Descrpcion del producto" onChange={(e)=>setdescripcionEditar(e.target.value)}/>
                                  <input type="text" placeholder="Cantidad del producto" onChange={(e)=>setCantidadProductoEditar(e.target.value)} />
                                    <button onClick={()=>actualizarProducto(producto.id)}>listo</button>
                                </>
                            )}
                        </>
                    )
                })}
            </ul>
        </>
    )
}
export default Producto;