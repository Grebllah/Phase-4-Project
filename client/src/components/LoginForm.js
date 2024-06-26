import { useState } from "react";

function LoginForm(login) {
    const [username, setUsername] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault();
        fetch("", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        console.log(`logged in ${username}!`)
    }
    
    return (
        <div className="LoginForm">
            <h2>Please Login!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
