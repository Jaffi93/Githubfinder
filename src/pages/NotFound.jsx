import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='container'>
            <h1 className='text-3xl mb-5'> Oops!! 404 - Page not found</h1>
            <Link to='/' className='btn btn-primary btn-lg'>
                <FaHome className='mr-2' /> Back to Home
            </Link>
        </div>
    )
}

export default NotFound