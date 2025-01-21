import Navbar from "./Navbar";
import Sidebar from "./sidebar";

import "./Booking.css";
const Settings = () => {
  return (
    <>
      <Navbar></Navbar>

      <div className="second">
        <Sidebar></Sidebar>

        <div className="settings">
          <h1>Settings</h1>
          <h2>Profile</h2>
          <p>Update your profile here</p>

          <form action="submit" className="form">
            <div className="info">
              <label htmlFor="address" id="address">
                Address
              </label>
              <input type="text" id="address" />
            </div>

            <div className="info">
              <label htmlFor="" id="email">
                Email
              </label>

              <input type="text" />
            </div>

            <div className="info">
              <label htmlFor="" id="phoneNo">
                Phone Number
              </label>
              <input type="text" />
            </div>

            <div className="info">
              <label htmlFor="" id="Gender">
                Gender
              </label>

              <input type="text" id="gender" placeholder="Male" />
            </div>

            <div className="info">
              <label htmlFor="dob">Date of birth</label>
              <input type="date" id="dob" />
            </div>

            <div className="info choosePhoto">
              <label htmlFor="photo" id="file">
                Choose a photo to upload
              </label>
              <input type="file" id="photo" />
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
