import React from "react";

const Tools = () => {
  const tools = [
    {
      id: 1,
      title: "Trading Solution",
      description: "Trading Solutions for active day traders and new entrants.",
      image: "https://botbro.biz/wp-content/uploads/2020/10/conversation-icon-1.png",
    },
    {
      id: 2,
      title: "Cutting Edge Trading",
      description: "Our aim is to help you gain confidence in online forex trading",
      image: "https://botbro.biz/wp-content/uploads/2020/10/graphicon-1.png",
    },
    {
      id: 3,
      title: "Competitive Pricing",
      description: "Competitive and low pricing for ordinary Traders.",
      image: "https://botbro.biz/wp-content/uploads/2020/10/rocket-icon-1.png",
    },
  ];
  return (
    <div className="relative pt-10">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://livewp.site/wp/md/ewebot/wp-content/uploads/sites/64/2020/10/home8_iconbox_bg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-center flex flex-col justify-center items-center p-6 md:p-10 space-y-8 relative top-0">
        {/* Header */}
        <div className="text-[#3b3663]">
          <h3 className="text-md md:text-lg font-medium text-green-600">CARE FEATURES</h3>
          <h1 className="text-2xl md:text-4xl font-bold max-w-xl mx-auto">
            Provide Awesome Service With Our Tools
          </h1>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 sm:px-10 lg:px-20">
          {tools.map((el, i) => (
           <div
           key={el.id}
           className="group flex flex-col items-center border gap-8 text-center bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105"
         >
           <img
             src={el.image}
             alt={el.title}
             className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-contain transition-transform transform group-hover:scale-110"
           />
           <h1 className="text-[#3b3663] text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
             {el.title}
           </h1>
           <p className="text-[#696687] text-sm sm:text-md lg:text-lg">
             {el.description}
           </p>
         </div>
         
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
