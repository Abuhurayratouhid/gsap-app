import './App.css';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, Power3 } from "gsap/all";
import Home from './Pages/Home/Home';
gsap.registerPlugin(ScrollTrigger);
function App() {
  
  

  
  
  
  return (
    <div className="max-w-[1550px] mx-auto">
      
      <Home></Home>
    </div>
  );
}

export default App;
