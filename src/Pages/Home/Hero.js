import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, Power3 } from "gsap/all";
import img from '../../Assets/Products/kit-6.jfif'


const Hero = () => {
    let appHeader = useRef(null)
    let appDescription = useRef(null)
    let mainBtn = useRef(null)
    let normalBtn = useRef(null)

    

    useEffect(()=>{
        const headline = appHeader.current;
        gsap.to(headline, { y: -100, duration: 1})
        gsap.to(headline, { y: 0, duration: 3, delay: 1, ease: 'bounce'})

        const description = appDescription.current;
        gsap.to(description, {x: -40, duration: 1, delay: 2}) 
        gsap.to(description, {x: 40, duration: 2, delay: 2, })
        gsap.to(description, {x: 0, duration: 2, delay: 4, })
        
        const btn = mainBtn.current;
        gsap.fromTo(btn, { 
            opacity: 0,
            x: -100
          },
          {
            opacity: 1,
            duration: 2,
            x: 0,
            delay: 3
          })
        const anotherBtn = normalBtn.current;
        gsap.fromTo(anotherBtn, { 
            opacity: 0,
            x: 100
          },
          {
            opacity: 1,
            duration: 2,
            x: 0,
            delay: 3
          })
    },[])
    return (
        <section className="bg-gray-100 text-gray-800">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                <h1 ref={appHeader} className="text-4xl font-bold leading-none sm:text-5xl">Welcome to
                    <span className="text-violet-600"> KIT</span> ground
                </h1>
                <p ref={appDescription} className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                <div className="flex flex-wrap justify-center">
                    <button ref={mainBtn} className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 hover:bg-violet-700 text-gray-50">Get started</button>
                    <button ref={normalBtn} className="px-8 py-3 m-2 text-lg border rounded text-gray-900 hover:bg-violet-700 hover:text-white border-gray-300">Learn more</button>
                 
                </div>
            </div>
        </section>
    );
};

export default Hero;