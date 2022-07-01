import "./style.css";
import NavBarComp from "./components/NavbarComp.js";
import { Header } from "./components/Header.js";
import { CardComp } from "./components/CardComp.js";
import { Footer } from "./components/Footer.js";
import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [item, setItem] = useState([]);

  return (
    <div className="App">
      
            <NavBarComp item={item} />
            <Header />
            <CardComp setItem={setItem} item={item} />
            <Footer />
          
         
      
    </div>
  );
}

export default App;