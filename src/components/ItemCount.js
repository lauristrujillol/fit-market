import React, { useState } from 'react'

function ItemCount(props) {

    const [count, setCount] = useState(0)



    function handleSumar(){ 
        if (count < props.stock) {
        setCount(count + 1) 
        }
    }

    
    function handleRestar() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const handleConfirmar = () => {
        // alert(`Se agregaron ${count} productos al carrito`)
        props.onAdd()
    }


  return (
    <div>
      <p className='text-gray-600 font-bold'>Cantidad : {count}</p>
      <button onClick={handleSumar} className='btn btn-primary m-2 bg-teal-500'>+</button>
      
      <button onClick={handleRestar} className='btn btn-primary m-2 bg-teal-500'>-</button>
      <br />
      <button className='btn btn-primary bg-blue-500' onClick={handleConfirmar}>Agregar al carrito</button>
    </div>
    
  )
}

export default ItemCount
