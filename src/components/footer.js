function Footer(){
    return(
       
        <div className="bg-gray-900 h-30 mt-10 flex flex-col p-2" id="Contact">
            <div className="flex flex-row justify-between p-2">
                <div className="flex my-auto">
                    <img src="./assets/logo.jfif" alt="logo" className="rounded-full h-16 w-16" />
                    <span className="text-orange-500 text-2xl my-auto mx-2 font-bold font-mono">SpicySpot</span>
                </div>
                <div>
                    <h1 className="text-semibold text-orange-400 text-2xl">Quick links</h1>
                    <ul className="flex flex-col ml-3 text-white text-lg">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Offers</li>
                        <li>Menu</li>
                        <li>contact</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-semibold text-orange-400 text-2xl text-center">Contact us</h1>
                    <p className="text-white"><i className="fas fa-map-marker text-orange-400"></i> 4/15 Ghandhi Street,</p>
                    <p className="text-white ml-2">Eral road,</p>
                    <p className="text-white ml-2">Thoothukudi,628 600.</p>
                    <p className="mt-2 text-white"><i className="fas fa-envelope text-orange-400"></i> spicyspot@io.com</p>
                    <p className="text-white"><i className="fas fa-phone text-orange-400"></i> 90001 10009</p>
                </div>
                <div>
                    <h3 className="text-semibold text-orange-400 text-2xl">Follow Us</h3>
                    <div className="flex flex-row space-x-3 text-orange-400 ">
                        <a href="#"><i className="fab fa-facebook-f  text-orange-400"></i></a>
                        <a href="#"><i className="fab fa-twitter  text-orange-400"></i></a>
                        <a href="#"><i className="fab fa-instagram  text-orange-400"></i></a>
                        <a href="#"><i className="fab fa-youtube  text-orange-400"></i></a>
                    </div>
                </div>
            </div>
        <div className="bg-black p-1"><p className="text-white text-center">&copy; 2024 ResturantWebsite. All Rights Reserved.</p></div>
        </div>
    )
}
export default Footer;