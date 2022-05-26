import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

export default function Navbar(){
    return(
        <div id='navbar'>
            <Link to="/" className='link'>Menu</Link>
            <Link to="/dudas" className='link'>Dudas</Link>
            <Link to="/acercade" className='link'>Acerca de</Link>
        </div>
    )
}