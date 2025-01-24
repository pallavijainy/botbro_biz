import React from "react";
import down_arrow from "../assets/icons/down_arrow.gif";

const HeroSection = () => {
    
    return (
        <div
            className="relative h-fit lg:px-32 lg:p-36 xl:p-10 md:p-32 p-16 pt-24 md:pt-40 bg-cover bg-center"
            style={{
                backgroundImage: `url('https://botbro.biz/wp-content/uploads/2022/05/image-13-scaled.jpg') `
            }}
        >
            <div className="h-full w-full flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-10">
                <div className="text-white w-full text-center md:text-left md:w-1/2">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl typewriter">Hey! I Am BotBro</h1>
                    <p className="text-lg md:text-2xl lg:text-3xl xl:text-5xl mt-5">
                        It's time to take your trading experience up a notch!
                    </p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src="https://botbro.biz/wp-content/uploads/2022/04/Hero-Image.png"
                        alt="BotBro"
                        className="w-full max-w-[550px] h-auto"
                    />
                </div>
            </div>
             <div className="w-full flex justify-center">
                <svg
                    className="absolute -bottom-[7.6rem] left-1/2 transform -translate-x-1/2 -rotate-90"
                    xmlns="http://www.w3.org/2000/svg"
                    width="44"
                    height="200"
                    viewBox="0 0 44 200"
                >
                    <path
                        fill="#fff"
                        stroke="#000"
                        strokeWidth="1"
                        d="M 45.703505156528365 200.19885384998346 C 45.73301315307617 190.79171752929688 45.365841356073965 101.6338238086374 45.662750244140625 0.25295501947402954 C 45.52727381388346 10.878458460172016 41.63068771362305 22.985551555951435 34.041473388671875 36.57423400878906 C 24.181148529052734 56.518985748291016 1.116410493985870 75.28781127929688 0.9567615985870361 100.19087982177734 C 1.1245900392532349 125.75543975830078 23.82019805908203 145.14585876464844 34.17644691467285 165.19732666015625 C 41.07911682128906 178.5620574951172 45.73301315307617 190.79171752929688 45.703505156528365 200.19885384998346 Z"
                    />
                </svg>
                <img src={down_arrow} alt=""  className="w-8 h-8 rounded-full absolute -bottom-[2rem] rotate-180"/>
            </div> 
        </div>
    );
};

export default HeroSection;