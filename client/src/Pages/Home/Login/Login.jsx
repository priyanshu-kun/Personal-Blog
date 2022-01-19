import {useContext, useState} from "react"
import axios from "axios";
import {Link} from "react-router-dom"
import "./Login.css"
import {Context} from "../../../context/Context";



const initialState = {
    loginKey: "",
    password: ""
}

function Login() {

    const [creadentials, setCreatentials] = useState(initialState);
    const {user,dispatch, isFetching} = useContext(Context)

    function handleSubmitChange(e) {
        setCreatentials({...creadentials, [e.target.name]: e.target.value});
    }


    async function handleSubmit(e) {
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/user/auth/login", creadentials)
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
            setCreatentials(initialState);
        }
        catch(e) {
            console.log(e.message)
            dispatch({type: "LOGIN_FAILURE" });
        }
    }


    return (
        <div className="loginForm">
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                   <div>
                        <label htmlFor="Email">Email/Username</label>
                        <input onChange={handleSubmitChange} value={creadentials.loginKey} type="text" name="loginKey" id="Email" placeholder="jhon.doe@gmail.com/@username" />
                    </div> 
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input onChange={handleSubmitChange} value={creadentials.password} type="password" name="password" id="Password" placeholder="Always Stay Strong" />
                    </div>
                   <button disabled={isFetching} type="submit" className="submitFormBtn">Login</button> 
                </form>
                <p className="linkToDffAuthScreen">Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    )
}

export default Login
