import { BrowserRouter, Routes, Route } from "react-router-dom";
import LodeX from "./LodeX";
import Login from "./Login";
import Signup from "./signup";
import Settings from "./Settings";
import Dashboard from "./Dashboard";
import Sales from "./SellCars";
import Car from "./car";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LodeX />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/Car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
