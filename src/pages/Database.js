import {React, useState} from 'react'

export default function Database(username) {
    const [usernames, setUsernames] = useState([])
    function handleUsername(username) {
        setUsernames(...usernames, username)
    }

    return (
        <div>
            {handleUsername(username)}
            
        </div>
    )
}
