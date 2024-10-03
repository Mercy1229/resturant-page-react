import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


function Navbar(){
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);    
    const navClass = `fixed top-0 w-full z-50 p-2 transition-colors duration-300 ${isScrolled ? 'bg-black' : 'bg-transparent'}`;
    return(
    <div className={navClass} id="navbar">
        <nav className="container mx-auto flex justify-between items-center flex-row ">
        <div className="flex items-center space-x-2">
            <img src="./assets/logo.jfif" alt="logo" className="rounded-full h-16 w-16" />
            <span className="text-orange-500 text-2xl font-bold font-dancing">SpicySpot</span>
        </div>

        <div className="sm:hidden">
            <button id="menuToggle" className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        <ul id="menu" className="hidden sm:flex  sm:flex-row space-x-6 text-white font-semibold text-xl">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About us</a></li>
            <li><a href="#Offers">Offers</a></li>
            <li><a href="#Menu">Menu</a></li>
            <li><a href="#Contact">Contact Us</a></li>
        </ul>

        <div className="sm:block">
            <button className="border border-orange-400 text-white text-xl rounded-full px-4 py-2 hover:bg-orange-300">Sign in</button>
        </div>
    </nav>
    </div>

  )
}
export default Navbar;
