import React from "react";

export default function Home(){
    return(
        <div>
            <div className="container flex flex-col justify-center items-center h-screen mx-auto lg:mx-auto">
                <h1 className="text-4xl text-orange-400 font-dancing">Welcome to our</h1>
                <h1 className="text-white font-extrabold text-5xl mt-2">RESTAURANT</h1>
                <p className="text-lg text-white mt-2">THE BEST MULTI CUISINE RESTAURANT</p>
                <input type="text" id="searchBar" placeholder="Search..." className="mt-5 px-4 py-2 border border-orange-400 rounded focus:border-red-800" />
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-4">
                    <button className="border border-orange-400 text-white text-xl rounded-full px-4 py-2 hover:bg-orange-300">
                        <a href="#Reservation">Book Table</a>
                    </button>
                    <button 
                    className="border border-orange-400 text-white text-xl rounded-full px-4 py-2 hover:bg-orange-300">
                        Get Menu
                    </button>
                </div>
                <div id="orderSummary"></div>
            </div>
        </div>
    )
}