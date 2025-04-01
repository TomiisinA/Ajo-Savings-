import Navbar from "./components/Navbar/navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import About from "./Pages/About/about";
import MoneyBag from "./Pages/moneyBag/moneybag";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="/about" element={About} />
        <Route path="/moneybag" element={MoneyBag} />
      </Routes>
    </>
  );
}

export default App;
