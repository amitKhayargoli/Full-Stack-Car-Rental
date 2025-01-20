import "./Dashboard.css";
import supra from "./supra.png"
import porsche from "./porsche.png"
import chevrolet from "./chevrolet.png"
import Sidebar from "./sidebar";
import Navbar from "./Navbar";

const Dashboard=()=>{
    return(
        
        <div className="container">   
        <Navbar></Navbar>        
     <div className="second">
        
<Sidebar></Sidebar>
        <div className="booking">

            <h2>Booking</h2>
            
            <div className="cars">

            <div className="car1 card">
                <label>Supra MK4</label>
                <a>Supra</a>
                <img src={supra}></img>
                <label>$111/d</label>
            </div>

            <div className="car2 card">
            <label>Porsche 911 GT3 RS</label>
                <a>Porsche</a>
                <img src={porsche}></img>
                <label>$101/d</label>
            </div>

            <div className="car3 card">
            <label>Chevrolet Coverette 1963</label>
                <a>Chevrolet</a>
                <img src={chevrolet}></img>
                <label>$142/d</label>
            </div>
        
           

            </div>
        </div>
        </div>
        
        </div>
    )
}

export default Dashboard
