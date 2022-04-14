import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2 px-4'>
            <Link to={"/"}>Home</Link>
            <Link to={"/add"}>Add</Link>
            <Link to={"/edit"}>Edit</Link>
        </nav>
    )
}
