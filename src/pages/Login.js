import {React, useState} from 'react'
import Database from './Database'

export default function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [db, setDb] = useState([]);

    const handleSubmit = () => {
        console.log(username);
        setDb(prevDb => {return [...prevDb, {id:Math.random(0,10000), username:username, password:password}]});
    }

    function showAll() {
        console.log(db)
        return <p>{db}</p>;
    }

    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password:</label>
                        <input type="text" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="input-container">
                        <input type="submit" />
                    </div>
                </form>
                <button onClick={showAll}>List</button>
            </div>
        </div>
    )
}
