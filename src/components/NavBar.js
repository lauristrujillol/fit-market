import React from 'react'
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'

// const NavBar = () => {
//     return (
//         <nav className='NavBar'>
//             <Link to='/'>
//                 <h3 className='italic m-2 font-mono text-2xl truncate'>Fit Market</h3>
//             </Link>
//             <div className='Categories'>
//                 <NavLink to={`/category/Snacks`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Snakcs</NavLink>
//                 <NavLink to={`/category/Parva`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Parva</NavLink>
//                 <NavLink to={`/category/Refrigerados`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Refrigerados</NavLink>
//                 <CartWidget/>
//             </div>
//         </nav>
//     )
// }

function NavBar() {
    return (
        <header className='flex justify-between p-4 bg-teal-500 text-white '>
            <Link to="/">
                <h1  className='italic m-2 font-mono text-2xl truncate'>Fit Market</h1>
            </Link>
            <NavLink className='p-3 font-bold m-2' to="/">Home</NavLink>
            <NavLink className='p-3 font-bold m-2' to="/category/Snacks">Snacks</NavLink>
            <NavLink className='p-3 font-bold m-2' to="/category/Parva">Parva</NavLink>
            <NavLink className='p-3 font-bold m-2' to="/category/Refrigerados">Refrigerados</NavLink>
            <CartWidget/>
            <nav>
            
                
                
             </nav>
         </header>
        )
        }


export default NavBar