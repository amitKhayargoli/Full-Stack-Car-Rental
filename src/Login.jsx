import mustang from './mustang.png'
import './Login.css'

export default function Login(){

return <div className="container">
<div className="login-section">
    <div className="login-card">
        <h2>Login</h2>
        <p>Glad you're back.!</p>
        <form id="loginForm" action="#" method="post">
            <div className="form-group">
                <input type="text" id="username" name="username" placeholder="Username" required/>
            </div>
            <div className="form-group">
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </div>
            <div className="options">
                <label>
                    <input type="checkbox" id="rememberMe"/>
                    Remember me
                </label>
                <a href="forgotPass.html" className="forgot-password">Forgot password?</a>
            </div>
            <button className="submit-btn">Login</button>
            <div className="divider">
                <span>Or</span>
            </div>
            <div className="social-login">
                <button className="social-btn google"></button>
                <button className="social-btn facebook"></button>
            </div>
        </form>
        <p className="signup-text">Don't have an account? <a href="signUp.html">Signup</a></p>
        <div className="footer-links">
            <a href="#">Terms & Conditions</a> | 
            <a href="#">Support</a> | 
            <a href="#">Customer Care</a>
        </div>
    </div>
</div>


<div className="image-section">
    <div className="slideshow-container">
        <img src={mustang} className="slide"/>
    </div>
</div>        
</div>

}