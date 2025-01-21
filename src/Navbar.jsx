import search from "./search.png";
import notification from "./notification.png";

function Navbar() {
  return (
    <div className="DashNav">
      <div className="fnav">
        <a>
          LO<span>DEX</span>
        </a>

        <div className="search">
          <input placeholder="search or type"></input>
          {/* <img src={search}></img> */}
          <i class="ri-search-line"></i>
        </div>
      </div>
      <div className="snav">
        {/* <img src={notification}></img> */}
        <i class="ri-notification-line"></i>

        <p>profile</p>
      </div>
    </div>
  );
}

export default Navbar;
