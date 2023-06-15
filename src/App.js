import * as React from "react";
import { SucursalesFe } from "./components/sucursales/SucursalesFe";
import { SucursalesRead } from "./components/sucursales/SucursalesRead";
import { Horarios } from "./components/horarios/Horarios";
import { Home1 } from "./components/home/Home1";
import { HorariosRead } from "./components/horarios/HorariosRead";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SucursalesFe />} />
        <Route path="/read" element={<SucursalesRead />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/horarios_read" element={<HorariosRead />} />
        <Route path="/home" element={<Home1 />} />
      </Routes>
    </Router>
  );
};

export default App;
