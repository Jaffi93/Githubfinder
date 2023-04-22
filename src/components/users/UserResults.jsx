import React, { useEffect, useState } from 'react'

function UserResults() {
    const [users, setUser] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchuser()
    }, [])

    const fetchuser = async () => {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`)
        const data = await response.json()
        setUser(data)
        setLoading(false)
    }
    if (!loading) {
        return (
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                {users.map((item) => (
                    <h1>{item.login}</h1>
                ))}
            </div>
        )
    } else {
        return <h3>Loading..</h3>
    }

}

export default UserResults