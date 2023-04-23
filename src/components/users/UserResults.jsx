import React, { useContext } from 'react'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GitHubContext'

function UserResults() {
    const { users, loading } = useContext(GithubContext)



    if (!loading) {
        return (
            <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return <h3>Loading..</h3>
    }

}

export default UserResults