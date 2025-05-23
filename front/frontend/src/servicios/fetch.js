async function postData(obj,endpoint) {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    })
    const respuesta = await peticion.json()
    return respuesta
}

export {postData}


async function getData(endpoint) {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}`)
    const respuesta = await peticion.json()
    return respuesta
}
export {getData}


async function deleteData(endpoint,id) {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}/`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    const respuesta = await peticion.json()
    return respuesta
}
export {deleteData}

async function patchData(endpoint,id,obj) {
    const peticion = await fetch(`http://127.0.0.1:8000/${endpoint}/${id}/`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj)
    })
    const respuesta = await peticion.json()
    return respuesta
}
export {patchData}