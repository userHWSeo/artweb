import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Routes
import Home from "./routes/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./routes/Login";
import Account from "./routes/Account";
import Profile from "./routes/Profile";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
