import { Routes, Route } from "react-router-dom";

import "./App.css";
import AboutUs from "./components/Pages/AboutUs";
import Catalog from "./components/Pages/Catalog";
import Header from "./components/Header";
import Contacts from "./components/Pages/Contacts";
import Favourites from "./components/Pages/Favourites";
import SingleCard from "./components/Pages/SingleCard";
import { ShopProvider } from "./store/ShopContext";
import Cart from "./components/Cart";
import OrderingPage from "./components/Pages/OrderingPage";

function App() {
  return (
    <ShopProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/:id" element={<SingleCard />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/ordering" element={<OrderingPage />} />
      </Routes>
    </ShopProvider>
  );
}

export default App;

  