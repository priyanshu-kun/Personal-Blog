import {Link} from "react-router-dom"
import "./Register.css"

function Login() {
    return (
        <div className="loginForm">
            <div className="formWrapper">
                <form>
                    <div>
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="Username" id="Username" placeholder="@Username" />
                    </div> 
                   <div>
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="Email" placeholder="jhon.doe@gmail.com" />
                    </div> 
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input type="password" name="Password" id="Password" placeholder="Always Stay Strong" />
                    </div>
                   <button className="submitFormBtn">Register</button> 
                </form>
                <p className="linkToDffAuthScreen">Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Login
