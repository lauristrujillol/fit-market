import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from '../Item'


const productosIniciales = [
    {
        id: 1,
        nombre: "producto 1",
        categoria: "Snacks",  
    },
    {
        id: 2,
        nombre: "producto 2",
        categoria: "Snacks",  
    },
    {
        id: 3,
        nombre: "producto 3",
        categoria: "Snacks",  
    },
]

function Categorias() {

    const parametros = useParams()
    let [productos, setProductos] = useState([])
    


    useEffect(() => {
        setTimeout(() => {
            //setProductos(productosIniciales)
            console.log("La categoria es: ", parametros.id)
            console.log("Filtro los productos")


            const filtrados = productosIniciales.filter((item)=>{
                return item.categoria === parametros.id
            })

            console.log(filtrados)
        }, 2000)
    },[parametros.id])

  





  return (
    <div>
      Categorias
    </div>
  )
}

export default Categorias
