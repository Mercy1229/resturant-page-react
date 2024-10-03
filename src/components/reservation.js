import React from 'react';
import { useReducer,useState } from 'react';

function ReserveTable(){
    const [] =useReducer()
    const [input,setInput]=useState({
        customername:'',
        email:'',
        date:'',
        guests:''
    });
    const handleSubmit=(e) =>{
        e.preventDefault();
        if(input.customername  && input.email && input.date && input.guests){
           alert("Hi your booking was confirmed "+input.customername +" !!")
        }
        else{
            window.alert("please fill out the form")
        }
        console.log('current state:',input);
        setInput({
            customername:'',
            email:'',
            date:'',
            guests:''
        })

        }
    
    return(
        <div className="container border border-gray-100 mt-10 mx-auto my-auto pb-10" id="Reservation">
            <h1 className="font-dancing font-semibold text-5xl text-orange-400 text-center m-5">Reserve your table</h1>
            <form> 
                <div className="container flex flex-row justify-between space-x-3 relative pr-3"> 
                
                    <input type="text" id="name" placeholder="Name"  value={input.customername}
                    onChange={(e) => setInput(prev => ({...prev, customername: e.target.value}))}
                    className="text-white p-2 w-1/5 bg-transparent border border-orange-500 rounded py-3 px-4 ml-5 leading-tight focus:outline-none focus:bg-gray-300 focus:border-red-800 focus:text-black" />
                    <input type="email" id="email" placeholder="Email"  value={input.email}
                    onChange={(e) => setInput(prev => ({...prev, email: e.target.value}))}
                    className="text-white p-2 w-1/5 bg-transparent border border-orange-500 rounded py-3 px-4 ml-3 leading-tight focus:outline-none focus:bg-gray-300 focus:border-red-800 focus:text-black" />
                    <input  type="date" id="date" placeholder="Date" value={input.date}
                    onChange={(e) => setInput(prev => ({...prev, date: e.target.value}))}
                    className="text-white p-2 w-1/5 bg-transparent border border-orange-500 rounded py-3 px-4 ml-3 leading-tight focus:outline-none focus:bg-gray-300 focus:border-red-800 focus:text-black" />
                    <input type="text" id="guest" placeholder="No of guests" value={input.guests}
                    onChange={(e) => setInput(prev => ({...prev, guests: e.target.value}))}
                    className="text-white p-2 w-1/5 bg-transparent border border-orange-500 rounded py-3 px-4 ml-3 leading-tight focus:outline-none focus:bg-gray-300 focus:border-red-800 focus:text-black" />
                    <button className="w-28 border border-orange-500 bg-orange-400 text-white text-xl rounded-md p-2 ml-5 me-3 hover:bg-orange-300" onClick={handleSubmit}>Submit</button>
                    
                </div> 
            </form>  
   </div>
    )
}
export default ReserveTable;