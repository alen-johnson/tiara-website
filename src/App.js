import { useEffect, useState } from "react";
import "./App.css";
import { Loading } from "./Components/componentIndex";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth, Beauty, Cart, Home, Kids, Wishlist, Women } from "./Pages/pageIndex";


const App = () => {

  const [loading, setLoading] = useState(true)

  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/beauty" element={<Beauty/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
