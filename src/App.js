import './App.css';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, Power3 } from "gsap/all";
import Home from './Pages/Home/Home';
gsap.registerPlugin(ScrollTrigger);
function App() {
  
  let myHeader = useRef(null)
  let myBox = useRef(null)

  const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 2 });
  };
  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
  };
  
  useEffect(()=>{
    const el = myHeader.current;
    const box = myBox.current;
    
    // console.log(el)
    },[])
  return (
    <div className="">
      {/* <div className="box text-red-400 p-5" onMouseEnter={onEnter} onMouseLeave={onLeave}>
        Hover Me
      </div> */}
      <Home></Home>
    </div>
  );
}

export default App;
