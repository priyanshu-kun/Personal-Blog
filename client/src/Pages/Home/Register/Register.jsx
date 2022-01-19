import { useState } from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import "./Register.css"

const initialState = {
    username: "",
    email: "",
    password: ""
}

function Login() {

    const [creadentials, setCreatentials] = useState(initialState);
    const [error, setError] = useState(false);


    function handleSubmitChange(e) {
        setCreatentials({...creadentials, [e.target.name]: e.target.value});
    }


    async function handleSubmit(e) {
        setError(false);
        try {
           e.preventDefault(); 
           const res = await axios.post("/user/auth/register", creadentials); 
            res.data && window.location.replace("/login")
           console.log(res.data);
        }
        catch(e) {
            setError(true);
            console.log(e)
        }
    }


    return (
        <div className="loginForm">
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Username">Username</label>
                        <input onChange={handleSubmitChange} value={creadentials.username} type="text" name="username" id="Username" placeholder="@Username" />
                    </div> 
                   <div>
                        <label htmlFor="Email">Email</label>
                        <input onChange={handleSubmitChange} value={creadentials.email} type="email" name="email" id="Email" placeholder="jhon.doe@gmail.com" />
                    </div> 
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input onChange={handleSubmitChange} value={creadentials.password} type="password" name="password" id="Password" placeholder="Always Stay Strong" />
                    </div>
                   <button type="submit" className="submitFormBtn">Register</button> 
                    {
                        error && <span style={{width: "100%", height: "20px", background: "#ff9999", textAlign: "center", padding: "6px 0", fontSize: "0.8rem", borderRadius: "6px", marginTop: "5px", color: "#000", display: "flex", alignItems: "center", justifyContent: "center"}}>Something went wrong!</span>
                    }
                </form>
                <p className="linkToDffAuthScreen">Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Login
