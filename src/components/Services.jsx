import React from "react";
import Picture1 from "../assets/services/picture-1.jpeg";
import Picture2 from "../assets/services/picture-2.jpeg";
import Picture3 from "../assets/services/picture-3.jpeg";
import Picture4 from "../assets/services/picture-4.jpeg";
import Picture5 from "../assets/services/picture-5.jpeg";
import Picture6 from "../assets/services/picture-6.jpeg";
import Picture7 from "../assets/services/picture-7.jpeg";
import Picture8 from "../assets/services/picture-8.jpeg";

const Services = () => {
  const serviceItems = [
    {
      name: "Advanced Visualization Technology",
      brief: "Unlock insights through cutting-edge data visualization.",
      img: Picture1,
    },
    {
      name: "Proactive Predictive Analytics",
      brief: "Stay ahead with our proactive and predictive analytics.",
      img: Picture2,
    },
    {
      name: "Statistical Modeling Excellence",
      brief: "Excel in data analysis with our statistical modeling.",
      img: Picture3,
    },
    {
      name: "Accurate Data Management",
      brief: "Ensure data accuracy with our data management.",
      img: Picture4,
    },
    {
      name: "Business Intelligence Insights",
      brief: "Gain insights with our business intelligence solutions.",
      img: Picture5,
    },
    {
      name: "Expertise in AI Solutions",
      brief: "Ensure expertise in Artificial Intelligence solutions.",
      img: Picture6,
    },
    {
      name: "Real-time Analytics Advantage",
      brief: "Stay ahead with immediate insights in real-time.",
      img: Picture7,
    },
    {
      name: "Server Optimization Services",
      brief: "Ensure stability with optimized server performance.",
      img: Picture8,
    },
  ];

  return (
    <div className="md:p-12 p-4">
      <h1 className="text-sky-700 md:text-4xl text-2xl font-medium uppercase md:mb-4 mb-2">
        Services We offer
      </h1>
      <div className="lg:grid lg:grid-cols-2 flex flex-col text-gray-900 md:gap-4 gap-2">
        {serviceItems.map((serviceItem, index) => (
          <div
            className="border border-slate-300 p-2 md:gap-4 gap-2 rounded-md grid grid-cols-3 items-center justify-between hover:scale-105 ease-in-out duration-300 cursor-default"
            key={index}
          >
            <div className="col-span-1 rounded-md overflow-hidden h-fit w-fit">
              <img
                src={serviceItem.img}
                className="md:h-20 sm:h-16 h-12 w-auto"
              />
            </div>
            <div className="col-span-2">
              <p className="font-bold md:text-lg sm:text-base text-sm">
                {serviceItem.name}
              </p>
              <p className="text-gray-700 text-base md:block hidden">
                {serviceItem.brief}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
