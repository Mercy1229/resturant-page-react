function SignatureDishes(){
    const images=[
        {image:'./assets/img1.jpg'},
        {image:'./assets/img2.jpg'},
        {image:'./assets/img2.1.jpg'},
        {image:'./assets/img3.1.jpg'},
        {image:'./assets/img3.2.jpg'},
        {image:'./assets/img3.jpg'},
        {image:'./assets/img4.jpg'},
        {image:'./assets/img5.jpg'},
        {image:'./assets/img6.jpg'},
        {image:'./assets/img7.1.jpg'},
        {image:'./assets/img7.jpg'},
        {image:'./assets/img8.jpg'},
        {image:'./assets/img9.jpg'},
        {image:'./assets/img10.jpg'},
        {image:'./assets/img11.jpg'},
    ];
    // const isImageSliderScrolled =() =>{
    //     if(window.scroll){
    //         isImageSliderScrolled(true);
    //     }
    //     <div className={`transition-all duration-300 ${isImageSliderScrolled ? 'w-20' : 'w-52'}`}>
    // }
    return(
        <div className="container flex flex-col items-center mx-auto mt-5 space-y-6">
            <h1 className="font-dancing font-semibold text-5xl text-orange-400 text-center">Our Signature Dishes</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-5 w-full px-4">
                {images.map((data,index) => {
                    return (
                        <div key={index}>
                            <img src={data.image} alt="food" className="rounded-md w-full" />
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SignatureDishes;