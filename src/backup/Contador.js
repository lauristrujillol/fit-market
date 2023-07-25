import { useState } from "react"

/*1er seccion: ESTADOS*/
function Contador(props) {
    const [contador, setContador] = useState(0)

/*2da seccion: ACCIONES*/
function handleSumar(){ 
    if (contador < props.stock) {
    setContador(contador + 1) 
    }
}

function handleRestar(){ 
    if (contador > 1 ) {
    setContador(contador - 1)
    }
}


function handleLimpiar(){ 
    
    setContador(0) }

/*3ra seccion: VISTA*/
    return (
        <div className="border">
            <h3>Contador</h3>
            <p>{contador}</p>
            <button onClick={handleSumar} className="btn btn-primary m-2">sumar</button>
            <button onClick={handleRestar}className="btn btn-primary m-2">restar</button>
            <button onClick={handleLimpiar}className="btn btn-primary m-2">limpiar</button>
        </div>
  )
}

export default Contador
