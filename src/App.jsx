import { useEffect, useState } from "react";

// import "./App.css";
import ShoppingCart from "./pages/ShoppingCart";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Register from "./pages/Register";
import Contactus from "./pages/Contactus";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";

import { DishesContext } from "./utils/Contexts";

function App() {
  const [dishes, setDishes] = useState([]);

  return (
    <>
      <DishesContext.Provider value={{ dishes, setDishes }}>
        <Header />
        <Routes>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/menu" element={<Menu />} />

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </DishesContext.Provider>
    </>
  );
}

export default App;
