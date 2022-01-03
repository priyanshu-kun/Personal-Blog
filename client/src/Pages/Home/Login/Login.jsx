
import "./Login.css"

function Login() {
    return (
        <div className="loginForm">
            <div className="formWrapper">
                <form>
                   <div>
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="Email" placeholder="jhon.doe@gmail.com" />
                    </div> 
                    <div>
                        <label htmlFor="Password">Password</label>
                        <input type="password" name="Password" id="Password" placeholder="Always Stay Strong" />
                    </div>
                   <button className="submitFormBtn">Login</button> 
                </form>
                <p className="linkToDffAuthScreen">Don't have an account? <a href="#">Register</a></p>
            </div>
        </div>
    )
}

export default Login
