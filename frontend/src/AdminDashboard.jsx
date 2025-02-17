<<<<<<< HEAD:src/AdminDashboard.jsx
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
=======
>>>>>>> 3e1285d0c89e2c870e07ae4bf54b8ebae2192974:frontend/src/AdminDashboard.jsx
import "./Booking.css";
import "./AdminDashboard.css";
import car1 from "./img/mini-car-01.png";
import car2 from "./img/mini-car-02.png";
import car3 from "./img/mini-car-03.png";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import mileStaticsData from "./mileStatics";
import ClientSidebar from "./client/ClientSidebar";

export default function AdminDashboard() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="second">
        {/* <ClientSidebar /> */}

        {/* <Sidebar /> */}

        <div className="AdminDashboard">
          <div className="cardStats">
            <div className="stat1 stats">
              <div className="section1">
                <h5>Total Cars</h5>
                <h3>750+</h3>
              </div>
              <div className="section2">
                <i class="ri-car-line"></i>
              </div>
            </div>

            <div className="stat2 stats">
              <div className="section1">
                <h5>Daily Trips</h5>
                <h3>1697+</h3>
              </div>
              <div className="section2">
                <i class="ri-steering-2-line"></i>
              </div>
            </div>

            <div className="stat3 stats">
              <div className="section1">
                <h5>Client Annually</h5>
                <h3>87k+</h3>
              </div>
              <div className="section2">
                <i class="ri-user-line"></i>
              </div>
            </div>

            <div className="stat4 stats">
              <div className="section1">
                <h5>Kilometers Daily</h5>
                <h3>2678+</h3>
              </div>
              <div className="section2">
                <i class="ri-timer-flash-line"></i>
              </div>
            </div>
          </div>

          {/* bar graph */}
          <div className="statics">
            <div className="statss">
              <h3>Car Sales</h3>
              <ResponsiveContainer width="210%" aspect={4 / 1}>
                <BarChart data={mileStaticsData}>
                  <XAxis dataKey="name" stroke="#2884ff" />
                  <Bar
                    dataKey="Sales"
                    stroke="#2884ff"
                    fill="#2884ff"
                    barSize={40}
                  />

                  <Tooltip wrapperClassName="tooltip_style" cursor={false} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="cars">
            <div className="car1 card">
              <div className="a1">
                <i class="ri-refresh-line"></i>
                <h5>74% reccomended</h5>
              </div>
              <img src={car1}></img>
              <h5>Mini Cooper</h5>
            </div>

            <div className="car2 card">
              <div className="a1">
                <i class="ri-refresh-line"></i>
                <h5>74% reccomended</h5>
              </div>
              <img src={car2}></img>
              <h5>Porsche 911 Carrera</h5>
            </div>

            <div className="car3 card">
              <div className="a1">
                <i class="ri-refresh-line"></i>
                <h5>74% reccomended</h5>
              </div>
              <img src={car3}></img>
              <h5>Porsche 911 Carrera</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
