import React from 'react'
import Header from './components/Header'
import Home from "./components/Home";
import Collection from "./components/Collection";
import Sale from "./components/Sale";
import New from "./components/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/new" element={<New />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
