import React from 'react'
import { Link } from 'react-router-dom'
import Logoimg from '../images/ecommerce.png' 


export default function Header() {
  return (
  <header className='header'>
  <Link className='icon' to={"/"}>
    <img src={Logoimg}/> 
    </Link>
   <nav >
    <Link to={'/'}>Productos</Link>
    <Link to={"/"}>Favoritos</Link> 
   </nav>
   </header>
   )
}
