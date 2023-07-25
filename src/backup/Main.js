import { useState } from "react"
import Container from "./Container"




function Main () {

//let contador = 0
let [contador, setcontador] = useState(0)
//let logueado = false
let [logueado, setLogueado] = useState(false)

const handleClick = () => {
  console.log(contador)
  //contador = contador + 1
  setcontador(contador + 1)
  console.log(contador)
}

const handleLogin = () => {
  console.log(logueado)
  //logueado = true
  setLogueado (true)
  console.log(logueado)
}


  return (
    <main className="grow p-2">
    <h2>Soy el home holis</h2>
    <br />
    <p>Contador: {contador}</p>
    <p>{`${logueado}`}</p>
    <nav>
      <a href="#">Link</a>
      <a href="#">Link</a>
      <a href="#">Link</a>
    </nav>
    <button onClick={handleClick}>Click</button>
    <button onClick={handleLogin}>Click</button>
    </main>
  )
}

export default Main
