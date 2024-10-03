import React from 'react';
import { Tabs, Tab } from './menu';
function Appmenu() {
    const menuItems = {
    menu1 : [
        { id: 0, title: 'Mutton Briyani', price: '$250', image: './assets/menu1.jpg' },
        { id: 1, title: 'Chicken Briyani', price: '$220', image: './assets/menu2.jpg' },
        { id: 2, title: 'Prawn Briyani', price: '$250', image: './assets/menu3.jpg' },
        { id: 3, title: 'Paneer Briyani', price: '$250', image: './assets/mrnu1.1.jpg' },
        { id: 4, title: 'Fish Briyani', price: '$250', image: './assets/menu1.2.jpg' },
        { id: 5, title: 'Paneer Rice', price: '$120', image: './assets/menu4.jpg' },
        { id: 6, title: 'Veg Rice', price: '$100', image: './assets/menu5.jpg' },
        { id: 7, title: 'Chicken Rice', price: '$160', image: './assets/menu6.jpg' },
        { id: 8, title: 'Paneer Noodles', price: '$170', image: './assets/menu7.jpg' },
        { id: 9, title: 'Veg Noodles', price: '$150', image: './assets/menu8.jpg' },
        { id: 10, title: 'Chicken Noodles', price: '$180', image: './assets/menu9.jpg' },
        { id: 11, title: 'Naan', price: '$90', image: './assets/menu10.jpg' },
        { id: 12, title: 'Paneer butter Masala', price: '$120', image: './assets/menu11.jpg' },
        { id: 13, title: 'Chicken butter Masala', price: '$120', image: './assets/menu12.jpg' },
        { id: 14, title: 'Chetinad Chicken', price: '$90', image: './assets/menu13.jpg' },
        { id: 15, title: 'Peper Chicken', price: '$90', image: './assets/menu14.jpg' },
    ],
    menu2 : [
        { title: 'Paneer Wrap', price: '$90', image: './assets/menu2.1.jpg' },
        { title: 'Paneer Tikka', price: '$110', image: './assets/menu2.2.jpg' },
        { title: 'Paneer naggets', price: '$90', image: './assets/menu2.3.jpg' },
        { title: 'Chicken naggets', price: '$110', image: './assets/menu2.4.jpg' },
        { title: 'Gril Chicken', price: '$200', image: './assets/menu2.5.jpg' },
        { title: 'Thantoori Chicken', price: '$220', image: './assets/menu2.6.jpg' },
        { title: 'Chicken Lolipop', price: '$160', image: './assets/menu2.7.jpg' },
        { title: 'Burger', price: '$90', image: './assets/menu2.8.jpg' },
        { title: 'Pizza', price: '$260', image: './assets/menu2.9.jpg' },
        { title: 'Sandwich', price: '$90', image: './assets/menu2.10.jpg' },
    ],
    menu3 : [
        { title: 'Masala Tea', price: '$20', image: './assets/menu3.1.jpg' },
        { title: 'Filter Cofee', price: '$30', image: './assets/menu3.2.jpg' },
        { title: 'Rose milk', price: '$50', image: './assets/menu3.3.jpg' },
        { title: 'Badam milk', price: '$50', image: './assets/menu3.4.jpg' },
        { title: 'Cofee Milkshake', price: '$90', image: './assets/menu3.5.jpg' },
        { title: 'Banana Milkshake', price: '$90', image: './assets/menu3.6.jpg' },
        { title: 'Dreamy Caramal Milkshake', price: '$120', image: './assets/menu3.7.jpg' },
        { title: 'Oreao MilkShake', price: '$120', image: './assets/menu3.8.jpg' },
        { title: 'Watermelon', price: '$60', image: './assets/menu3.9.jpg' },
        { title: 'Mojito', price: '$90', image: './assets/menu3.10.jpg' },
        { title: 'Fresh Juice', price: '$60', image: './assets/menu3.11.jpg' },
        { title: 'Falooda', price: '$120', image: './assets/menu3.12.jpg' },
    ],
    menu4 : [
        { title: 'Custered Gulab Jamun', price: '$80', image: './assets/menu4.1.jpg' },
        { title: 'Rabadi', price: '$70', image: './assets/menu4.2.jpg' },
        { title: 'Kulfi', price: '$50', image: './assets/menu4.3.jpg' },
        { title: 'Rasmalai', price: '$80', image: './assets/menu4.4.jpg' },
        { title: 'Kajar Halwa', price: '$60', image: './assets/menu4.5.jpg' },
        { title: 'Dream Cake', price: '$90', image: './assets/menu4.6.jpg' },
        { title: 'Choco lava cake', price: '$100', image: './assets/menu4.7.jpg' },
        { title: 'Sizling Brownie', price: '$120', image: './assets/menu4.8.jpg' },
    ]

};
return (
<div>
<h1 className="font-dancing font-semibold text-5xl text-orange-400 text-center mt-10">Our Menus!</h1>
<Tabs>
<Tab label="Main course">

<div id="menu1" className="block text-white ml-28 ">
    <div className="container ml-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mx-auto sm:mx-auto md:mx-auto lg:mx-auto">
                {menuItems.menu1.map((item,index) => {
                    return(
                        <div className="border border-gray-200 p-2 m-2 flex flex-row">
                            <div>
                                <img src={item.image} alt={item.title} class="h-20 w-16 rounded-md" />
                            </div>
                            <div class="flex flex-col mt-3 ml-2">
                                <h5 class="text-white text-xl">{item.title}</h5>
                                <p class="text-white">{item.price}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
</div>
</Tab>
<Tab label="Starter">
<div id="menu2" className="block text-white ml-28 ">
    <div className="container ml-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mx-auto sm:mx-auto md:mx-auto lg:mx-auto">
                {menuItems.menu2.map((item,index) => {
                    return(
                        <div className="border border-gray-200 p-2 m-2 flex flex-row">
                            <div>
                                <img src={item.image} alt={item.title} class="h-20 w-16 rounded-md" />
                            </div>
                            <div class="flex flex-col mt-3 ml-2">
                                <h5 class="text-white text-xl">{item.title}</h5>
                                <p class="text-white">{item.price}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
</div>
</Tab>
<Tab label="Drinks">
<div id="menu3" className="block text-white ml-28 ">
    <div className="container ml-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mx-auto sm:mx-auto md:mx-auto lg:mx-auto">
                {menuItems.menu3.map((item,index) => {
                    return(
                        <div className="border border-gray-200 p-2 m-2 flex flex-row">
                            <div>
                                <img src={item.image} alt={item.title} class="h-20 w-16 rounded-md" />
                            </div>
                            <div class="flex flex-col mt-3 ml-2">
                                <h5 class="text-white text-xl">{item.title}</h5>
                                <p class="text-white">{item.price}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
</div>
</Tab>
<Tab label="Desserts">

<div id="menu4" className="block text-white ml-28 ">
    <div className="container ml-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mx-auto sm:mx-auto md:mx-auto lg:mx-auto">
                {menuItems.menu4.map((item,index) => {
                    return(
                        <div className="border border-gray-200 p-2 m-2 flex flex-row">
                            <div>
                                <img src={item.image} alt={item.title} class="h-20 w-16 rounded-md" />
                            </div>
                            <div class="flex flex-col mt-3 ml-2">
                                <h5 class="text-white text-xl">{item.title}</h5>
                                <p class="text-white">{item.price}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
</div>
</Tab>
</Tabs>
</div>
);
};
export default Appmenu;
