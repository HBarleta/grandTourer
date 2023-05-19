import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Vehicles from './Page/Vehicles';
import Guidelines from "./Page/Guidelines";
import AboutUs from "./Page/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/vehicles" element={<Vehicles />}></Route>
        <Route path="/guidelines" element={<Guidelines/>}></Route>
        <Route path="/aboutUs" element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
