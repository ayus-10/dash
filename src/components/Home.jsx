import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import CountUp from "react-countup";
import bannerImage from "../assets/banner.jpg";

const Home = () => {
  const listItems = [
    "Rendering Multiple Elements",
    "Rendering Adjacent Elements",
    "Elements Inside a Component",
    "Rendering Multiple Elements",
    "Rendering Adjacent Elements",
    "Elements Inside a Component",
  ];

  return (
    <section className="h-full flex flex-col justify-between gap-8 text-gray-900">
      <div className="lg:grid lg:grid-cols-5 lg:justify-between lg:items-center lg:gap-4 md:p-12 p-6">
        <div className="lg:col-span-3 mb-8 lg:m-0">
          <h1 className="text-sky-700 md:text-4xl text-3xl font-medium uppercase mb-4">
            Lorem ipsum dolor sit.
          </h1>
          <p className="md:text-lg text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            eveniet dicta hic mollitia nulla ipsum, cupiditate deserunt
            inventore dolore aut aliquid quos, voluptate minima nam temporibus
            quis, sit deleniti impedit commodi! Sunt.
          </p>
        </div>
        <div className="lg:col-span-2 overflow-hidden rounded-md md:mx-12 lg:m-0">
          <img
            src={bannerImage}
            alt="banner"
            className="rounded-md hover:scale-105 ease-in-out duration-500"
          />
        </div>
      </div>
      <div className="md:p-8 p-4 flex md:flex-row flex-col gap-4 items-center justify-around">
        <div className="md:p-8 p-4 text-center">
          <p className="lg:text-4xl text-3xl">
            <CountUp end={3100} />+
          </p>
          <span className="text-lg">Customers</span>
        </div>
        <div className="md:p-8 p-4 text-center">
          <p className="lg:text-4xl text-3xl">
            <CountUp end={13} />
          </p>
          <span className="text-lg">Years</span>
        </div>
        <div className="md:p-8 p-4 text-center">
          <p className="lg:text-4xl text-3xl">
            <CountUp end={131} />+
          </p>
          <span className="text-lg">Products</span>
        </div>
      </div>
      <div className="md:p-12 p-4">
        <h1 className="text-sky-700 md:text-3xl text-2xl uppercase text-center">
          Lorem ipsum dolor sit.
        </h1>
        <p className="md:text-lg text-base text-center m-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          odit aspernatur ut perspiciatis minus, dicta fugit nesciunt rem, quam
          adipisci aliquam quasi maxime cum.
        </p>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col items-center justify-center md:m-8 my-4">
          {listItems.map((listItem, index) => (
            <span
              className="bg-slate-200 w-fit md:p-2 md:m-2 p-1 m-1 md:text-xl text-base rounded-md inline-flex items-center gap-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              key={index}
            >
              <BsCheck2Circle className="text-sky-700 flex-shrink-0" />
              <p className="text-gray-800">{listItem}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
