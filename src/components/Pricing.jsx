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
    <div className="p-4 text-gray-900 md:p-12">
      <h1 className="mb-2 text-2xl font-medium uppercase text-sky-700 md:text-4xl">
        Pricing
      </h1>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente beatae
        quisquam nihil!
      </p>
      <div className="flex flex-col items-center">
        <div className="my-4 flex justify-center text-xs font-semibold md:text-base">
          <button
            className={`rounded-l-md border-2 border-sky-700 px-2 py-1 outline-none md:px-4 
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
            className={`rounded-r-md border-2 border-sky-700 px-2 py-1 outline-none md:px-4 
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
        <div className="my-4 flex flex-col items-center gap-4 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {pricingCards.map((pricingCard, index) => (
            <div
              className={`flex h-fit w-fit flex-col rounded-md border-2 p-4 duration-500 
                ${
                  pricingCard.popular === true
                    ? "border-sky-700"
                    : "border-slate-300"
                }`}
              key={index}
            >
              <h1 className="text-lg font-normal uppercase text-gray-700 md:text-xl">
                {pricingCard.name}
              </h1>
              <div className="flex items-center gap-1 border-b border-slate-400 pb-2 md:pb-4">
                <p className="text-4xl font-semibold md:text-5xl">
                  $
                  {paymentInterval === "monthly"
                    ? pricingCard.monthlyPrice
                    : pricingCard.annuallyPrice}
                </p>
                <p className="text-gray-700 md:text-lg">
                  {paymentInterval === "monthly" ? "/month" : "/year"}
                </p>
              </div>
              <ul className="mt-2 text-sm md:mt-4 md:text-base">
                {pricingCard.details.map((detail, i) => (
                  <li className="flex items-center gap-1 py-1" key={i}>
                    <BsPatchCheckFill className="text-sky-700" />
                    {detail}
                  </li>
                ))}
              </ul>
              <button className="my-2 rounded-sm bg-sky-700 py-2 text-white duration-300 ease-in-out hover:bg-sky-800 md:text-lg">
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
