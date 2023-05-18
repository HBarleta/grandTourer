import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Page/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Vehicles from './Page/Vehicles';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/vehicles" element={<Vehicles />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
