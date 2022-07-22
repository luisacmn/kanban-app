import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Kanban from "./pages/Kanban";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kanban" element={<Kanban />} />
      </Routes>
    </div>
  );
}

export default App;
