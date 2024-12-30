import car from "./LandingPageCar.png";
import "./LodeX.css";
function LodeX() {
  return (
    <div className="container">
      <div className="nav">
        <b>
          <a className="lo">
            <span>LO</span>DEX
          </a>
        </b>
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Reviews</a>
          </li>
        </ul>
        <button className="login-btn">
          <a href="Login" className="login">
            Login
          </a>
        </button>
      </div>
      <div className="body">
        <b>
          <a className="first">YOU DREAM</a> <br />
          <a className="second">WE CREATE</a>
        </b>
        <img src={car} />
        <button className="btn1">Find your car</button>
      </div>

      <div class="icons-container">
        <div class="icons">
          <i class="fa-solid fa-house"></i>
          <div class="content">
            <h3>159+</h3>
            <p>branches</p>
          </div>
        </div>

        <div class="icons">
          <i class="fa-solid fa-car"></i>
          <div class="content">
            <h3>322+</h3>
            <p>cars sold</p>
          </div>
        </div>

        <div class="icons">
          <i class="fa-solid fa-users"></i>
          <div class="content">
            <h3>300+</h3>
            <p>happy clients</p>
          </div>
        </div>

        <div class="icons">
          <i class="fa-solid fa-car"></i>
          <div class="content">
            <h3>400+</h3>
            <p>new cars</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LodeX;
