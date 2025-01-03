import { BrowserRouter, Routes, Route } from "react-router-dom";
import LodeX from "./LodeX";
import Login from "./Login";
import Signup from "./signup"; // Import the Signup component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LodeX />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} /> {/* Add this Route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
