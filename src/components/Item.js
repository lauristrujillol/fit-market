import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const Item = ({id, name, img, price, stock}) => {

  return (
    <article className='CardItem border flex flex-wrap flex-col w-80 rounded-md items-center p-3 text-center m-4 inline-flex'>
      <header className='Header text-lg text-teal-500 font-bold m-2'>
        <h2 className='ItemHeader'>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info font-dark text-lg mb-4 font-bold text-gray-500' >
          Precio: ${price}
        </p>
        <p className='Info font-dark text-xs mb-4 text-gray-500'>
          Stock disponible: {stock}
        </p>
      </section>
      <footer className='ItemFooter'>
        <Link to={`/item/${id}`} className='Option btn btn-primary m-2'>Ver detalle</Link>
        {/* <button className='Option btn btn-primary m-2'>Ver detalle</button> */}
      </footer>
    </article>
  )
}

export default Item
