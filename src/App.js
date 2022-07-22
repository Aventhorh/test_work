import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import CardDetails from "./pages/CardDetails";
import Cards from "./pages/Cards";

import './styles/App.css'


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route exact path="/cards" element={<Cards />} />
        <Route exact path="/cards/:id" element={<CardDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
