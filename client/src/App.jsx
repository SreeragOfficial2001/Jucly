import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Track from "./pages/Track";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import ConfirmationPage from "./components/ConfirmationPage";

const App = () => {
  return (
    <>
      <div className="h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/track" element={<Track />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
