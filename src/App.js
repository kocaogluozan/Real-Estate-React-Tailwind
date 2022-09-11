import React from "react";

//import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import Route,Routes
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:id" element={<PropertyDetails />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
