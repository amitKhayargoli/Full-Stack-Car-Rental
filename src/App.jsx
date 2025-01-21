import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lodex from "./LodeX"
import Login from "./Login";
import Signup from "./signup";
import Settings from "./Settings";
import Booking from "./Booking";
import AdminDashboard from "./AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Lodex/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/AdminDashboard" element={<AdminDashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
