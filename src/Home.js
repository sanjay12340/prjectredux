import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-end py-3'>
                    <Link to={"add"} className="btn btn-outline-dark btn-sm float-right my-3">Add Contact</Link>
                </div>
                <h1 className='text-center'>Welcome to Add Contact </h1>
            </div>
        </div>
    )
}
