import car from './car.png'
import './LodeX.css'
function LodeX(){

    return <div className="container">
   <div className="nav">  
    <b><a className="lo"><span>LO</span>DEX</a></b>  
     <ul>
    <li><a>Home</a></li>
    <li><a>Contact</a></li>
    <li><a>Service</a></li>
    <li><a>Reviews</a></li>
</ul>
    <button><a href="Login"className='login' >Login</a></button>
</div>
<div className="body">
    <b>
    <a className="first">YOU DREAM</a> <br/>
    <a className="second">WE CREATE</a>
</b>
<img src={car}/>
<button className="btn1">Find your car</button>
</div>
<div    >

</div>
</div>

}
export default LodeX