import { useNavigate } from "react-router-dom";


function Sidebar() {
 
  return (
    <div className="sidebar">
      <a>
        <li>Dashboard</li>
      </a>
      <a>
        <li>
          <i class="ri-taxi-line"></i>Booking
        </li>
      </a>
      <a>
        <li>Sell Cars</li>
      </a>
      <a>
        <li>Settings</li>
      </a>
    </div>
  );
}
export default Sidebar;
