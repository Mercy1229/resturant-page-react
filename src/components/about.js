export default  function(){
    const about=[
        {title:'Free Delivery', image:'./assets/about1.1.png',},
        {title:'Hygienic Cooking', image:'./assets/about2.2.png',},
        {title:'Affordable Price', image:'./assets/about3.3.png',},
        {title:'24 Hours Service', image:'./assets/about4.4.png',},
    ]
    return(
            <div id="About" className="py-16 ml-5">
                <h1 className="text-5xl font-semibold font-dancing text-orange-400 text-center mb-8">About Us</h1>
                <div className="container flex flex-col lg:flex-row mx-auto justify-center lg:justify-between items-center lg:items-start space-y-8 lg:space-y-0">
                    <div className="lg:w-2/3 w-full text-center lg:text-left lg:pr-8">
                        <p className="text-white text-lg mt-2 text-justify">
                            Welcome to <span className="text-orange-400 font-thin">SpicySpot!</span> your go-to destination for bold and exciting flavors! 
                            Located in THOOTHUKUDI, we specialize in vibrant dishes crafted with fresh ingredients and a perfect blend of spices. 
                            Founded by Mr.Samuel, our mission is to offer a dining experience that's both memorable and adventurous. 
                            Our talented chefs and friendly staff are dedicated to making every visit exceptional. Whether you're here for a casual 
                            lunch, a festive dinner, or a special celebration, SpicySpot is the perfect place to indulge in a feast that will delight 
                            your senses and warm your soul.
                        </p>
                        <p className="text-white text-xl text-center lg:text-left mt-6">Join us at SpicySpot and spice up your life with every bite!</p>
                    </div>
                    <div className="lg:w-1/3 w-full flex justify-center lg:justify-start">
                        <img src="./assets/about.jpeg" alt="About SpicySpot" className="rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-full h-auto" />                
                    </div>
                </div>
                <div className="container ml-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 mx-auto sm:mx-auto md:mx-auto lg:mx-auto">
                {about.map((data,index) => {
                    return (
                        <div className="border border-gray-200 p-4 m-2 hover:bg-orange-200 transition-all duration-300">
                            <div className="h-56 w-56 py-2 mx-auto">
                            <img src={data.image} alt="Free Delivery" className="py-2 mx-auto" />
                            </div>
                            <div className="bg-orange-300 text-white h-10 sm:h-12 flex items-center justify-center mt-4">
                                <p className="font-bold text-lg">{data.title}</p>
                            </div>
                        </div>
                    )
                })} 
                </div>
        </div>
    )
}