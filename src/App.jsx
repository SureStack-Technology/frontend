import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route element={<Home/>} path='/' exact/>
        <Route element={<About/>} path='/about' />
        <Route element={<Contact/>} path='/contact' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
