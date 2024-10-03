function Offers(){
    const offerItems =[
        { title: 'Briyani Combo', offer: "50% Offer", image: './assets/offer1.jpg' },
        { title: 'Breakfast Combo', offer: "20% Offer" , image: './assets/offer2.jpg' },
        { title: 'Burger Combo', offer: "50% Offer", image: './assets/offer3.jfif' },
        { title: 'Lunch Combo', offer: "50% Offer", image: './assets/offer4.jfif' },
        { title: 'Lunch Combo', offer: "50% Offer", image: './assets/offer4.jfif' },
    ]
    return <div id="Offers"> 
                <div>
                    <h1 className="font-dancing font-semibold text-5xl text-orange-400 text-center mb-5 mt-10">Our Combo Offers!</h1>
                </div>
                <div className="container flex flex-row m-2 justify-between space-x-3 mx-auto">
                {offerItems.map((data, key) => {
                    return (
                            <div key={key} className="flex flex-col space-x-1 border border-gray-200 w-1/6 pr-1">
                                <img src={data.image} alt="" className="rounded-lg mx-2 mt-2 h-28" />
                                <h6 className="text-white text-center">{data.title}</h6>
                                <p className="text-orange-400 font-bold text-xl text-center">{data.offer} </p>
                                <button className="border border-orange-400 text-white rounded-md p-2 m-2 ml-2 items-center ">order now</button>
                            </div>
          );
        })}
                </div>
            </div>
}
export default Offers;