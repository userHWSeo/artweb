import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./routes/Login";
import Sign from "./routes/Account";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<Sign />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
