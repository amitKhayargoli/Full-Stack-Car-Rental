import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="AdminDashboard">
        <li>
          <i class="ri-dashboard-fill"></i>Dashboard
        </li>
      </a>
      <a href="Booking">
        <li>
          <i class="ri-taxi-line"></i>Booking
        </li>
      </a>
      <a href="Car">
        <li style={{ display: "flex", marginLeft: "-30px", height: "30px" }}>
          <ShoppingBag style={{ color: "yellow", marginRight: "8px" }} />
          Sell Cars
        </li>
      </a>
      <a href="Settings">
        <li>
          <i class="ri-settings-3-line"></i>
          Settings
        </li>
      </a>
    </div>
  );
}
export default Sidebar;
