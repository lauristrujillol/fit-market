import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({ name, price, img, category, stock}) => {
  return (
    <div className='border flex flex-wrap flex-col w-1/4 rounded-md items-center p-3 text-center m-auto mb-5 mt-5'>

        <picture>
            <img src={img} alt={name} />
        </picture>
        <header>
            <h2 className='font-bold text-lg mb-2 text-teal-500'>
                {name}
            </h2>
        </header>
        <section>
            <p className=' text-l mb-2 text-gray-600'>
                Categoria: {category}
            </p>
            {/* <p>
                {descripcion}
            </p> */}
            <p className='text-xl mb-2 font-bold text-gray-600'>
                Precio: ${price}
            </p>
            <p className='text-gray-600'>
                Stock: {stock}
            </p>
        </section>
        <footer>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
        </footer>
    </div>
  )
}

export default ItemDetail