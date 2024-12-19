import mustang from "./mustang.png";
import "./Login.css";

export default function Login() {
  function validation() {

    const loginForm = document.getElementById('loginForm');
    const username=document.getElementById("username");
    const password=document.getElementById("password");
    const username_error = document.getElementById('username_error');
    const password_error = document.getElementById('password_error');

    loginForm.addEventListener('submit', (e)=>{

      var username_check = /^[a-zA-Z0-9_]{5,15}$/;
      var password_check = /^[A-Za-z]\w{7,14}$/;
  
      if(!username.value.match(username_check)){
          e.preventDefault();
          username_error.innerHTML="*Required valid Username (5-15) characters*";
      }

  
      if(!password.value.match(password_check)){
          e.preventDefault();
          password_error.innerHTML="*Required valid Password (8-14) characters*";
      }    
  })

  username.addEventListener("keydown", (event)=>{
    console.log(`${event.key}`);
    username_error.innerHTML="";
})

password.addEventListener("keydown", (event)=>{
  console.log(`${event.key}`);
  password_error.innerHTML="";
})

  }

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-section">
          <div className="login-card">
            <h2>Login</h2>
            <p>Glad you're back.!</p>
            <form id="loginForm" action="/">

              <div className="form-group">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  
                />
                <span id="username_error"></span>
              </div>

              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                 
                />
                <span id="password_error"></span>
              </div>

              <div className="options">
                <label>
                  <input type="checkbox" id="rememberMe" />
                  Remember me
                </label>
                <a href="forgotPass.html" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <button className="submit" type="submit" onClick={validation}>Login</button>

              <div className="divider">
                <span>Or</span>
              </div>
              <div className="social-login">
                <button className="social-btn google">Google</button>
                <button className="social-btn facebook">Facebook</button>
              </div>
            </form>
            <p className="signup-text">
              Don't have an account? <a href="signUp.html">Signup</a>
            </p>
            <div className="footer-links">
              <a href="#">Terms & Conditions</a> |<a href="#">Support</a> |
              <a href="#">Customer Care</a>
            </div>
          </div>
        </div>

        <div className="image-section">
          <div className="slideshow-container">
            <img src={mustang} className="slide" />
          </div>
        </div>
      </div>
    </div>
  );
}
