import React from 'react'
import { Link } from 'react-router-dom'

export default function Unknown() {
    return (
        <>
            <div>Page Not Found</div>
            <Link to="/">Home Page</Link>
        </>
    )
}
