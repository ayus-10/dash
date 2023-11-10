import { React, useState } from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const Pricing = () => {
  const [paymentInterval, setPaymentInterval] = useState("monthly");
  const changePaymentInterval = (interval) => {
    setPaymentInterval(interval);
  };

  const pricingCards = [
    {
      name: "free",
      monthlyPrice: "0",
      annuallyPrice: "0",
      popular: false,
      details: [
        "Manage Data Accurately",
        "Expertised AI Solutions",
        "Advanced Viz Technology",
        "Free to use forever",
      ],
    },
    {
      name: "Starter",
      monthlyPrice: "6.99",
      annuallyPrice: "79.99",
      popular: true,
      details: [
        "All previous features",
        "Predictive Analytics",
        "Statistical Modeling",
        "24/7 Customer Support",
      ],
    },
    {
      name: "Expert",
      monthlyPrice: "13.99",
      annuallyPrice: "149.99",
      popular: false,
      details: [
        "All previous features",
        "Biz Intelligence Insights",
        "Real-time Analytics",
        "Server Optimization",
      ],
    },
  ];

  return (
    <div className="md:p-12 p-4 text-gray-900">
      <h1 className="text-sky-700 md:text-4xl text-2xl font-medium uppercase mb-2">
        Pricing
      </h1>
      <p className="md:text-lg text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae
        quisquam nihil!
      </p>
      <div className="flex flex-col items-center">
        <div className="my-4 flex justify-center font-semibold md:text-base text-xs">
          <button
            className={`md:px-4 px-2 py-1 outline-none border-2 border-sky-700 rounded-l-md 
              ${
                paymentInterval === "monthly"
                  ? "bg-sky-700 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            onClick={() => changePaymentInterval("monthly")}
          >
            Monthly
          </button>
          <button
            className={`md:px-4 px-2 py-1 outline-none border-2 border-sky-700 rounded-r-md 
              ${
                paymentInterval === "annually"
                  ? "bg-sky-700 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            onClick={() => changePaymentInterval("annually")}
          >
            Annually
          </button>
        </div>
        <div className="my-4 md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col items-center md:gap-8 gap-4">
          {pricingCards.map((pricingCard, index) => (
            <div
              className={`rounded-md border-2 flex flex-col duration-500 h-fit w-fit p-4 
                ${
                  pricingCard.popular === true
                    ? "border-sky-700"
                    : "border-slate-300"
                }`}
              key={index}
            >
              <h1 className="text-gray-700 font-normal uppercase md:text-xl text-lg">
                {pricingCard.name}
              </h1>
              <div className="flex gap-1 items-center md:pb-4 pb-2 border-b border-slate-400">
                <p className="font-semibold md:text-5xl text-4xl">
                  $
                  {paymentInterval === "monthly"
                    ? pricingCard.monthlyPrice
                    : pricingCard.annuallyPrice}
                </p>
                <p className="text-gray-700 md:text-lg">
                  {paymentInterval === "monthly" ? "/month" : "/year"}
                </p>
              </div>
              <ul className="md:text-base text-sm md:mt-4 mt-2">
                {pricingCard.details.map((detail, i) => (
                  <li className="py-1 flex items-center gap-1" key={i}>
                    <BsPatchCheckFill className="text-sky-700" />
                    {detail}
                  </li>
                ))}
              </ul>
              <button className="my-2 bg-sky-700 hover:bg-sky-800 ease-in-out duration-300 text-white py-2 md:text-lg rounded-sm">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
