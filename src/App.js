import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading/Loading";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

const App = () => {

  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 3500);
  },[])
  if(loading){
   return  <Loading />

  }
  return (
    <div className="main">
      {!loading && <Home/>}
    </div>
  );
}

export default App;
