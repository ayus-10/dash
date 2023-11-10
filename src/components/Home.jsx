import React from "react";
import { BsCheck2Circle } from "react-icons/bs";
import CountUp from "react-countup";
import bannerImage from "../assets/banner.jpg";

const Home = () => {
  const listItems = [
    "Sun is hot now.",
    "Rain may fall.",
    "Wind blows softly.",
    "Birds sing sweetly.",
    "Stars twinkle bright.",
    "Moon lights night.",
  ];

  return (
    <section className="h-full flex flex-col justify-between gap-8 text-gray-900">
      <div className="lg:grid lg:grid-cols-5 lg:justify-between lg:items-center lg:gap-4 md:p-12 p-4">
        <div className="lg:col-span-3 mb-8 lg:mb-0">
          <h1 className="text-sky-700 md:text-4xl text-2xl font-medium uppercase md:mb-4 mb-2">
            Welcome to Dash!
          </h1>
          <p className="md:text-lg text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            eveniet dicta hic mollitia nulla ipsum, cupiditate deserunt
            inventore dolore aut aliquid quos, voluptate minima nam temporibus
            quis, sit deleniti impedit commodi! Sunt.
          </p>
        </div>
        <div className="lg:col-span-2 overflow-hidden rounded-md md:mx-12 lg:mx-0">
          <img
            src={bannerImage}
            alt="banner"
            className="rounded-md hover:scale-105 ease-in-out duration-500"
          />
        </div>
      </div>
      <div className="p-12 flex md:flex-row flex-col gap-4 items-center justify-around">
        <div className="p-4 text-center border border-slate-300 rounded-lg w-full h-fit">
          <p className="md:text-5xl text-4xl">
            <CountUp end={3100} />+
          </p>
          <span className="md:text-2xl text-xl">Customers</span>
        </div>
        <div className="p-4 text-center border border-slate-300 rounded-lg w-full h-fit">
          <p className="md:text-5xl text-4xl">
            <CountUp end={13} />
          </p>
          <span className="md:text-2xl text-xl">Years</span>
        </div>
        <div className="p-4 text-center border border-slate-300 rounded-lg w-full h-fit">
          <p className="md:text-5xl text-4xl">
            <CountUp end={131} />+
          </p>
          <span className="md:text-2xl text-xl">Products</span>
        </div>
      </div>
      <div className="md:p-12 p-4">
        <h1 className="text-sky-700 md:text-3xl text-2xl uppercase mb-2">
          Why choose Dash?
        </h1>
        <p className="md:text-lg text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          ad vel pariatur commodi maiores suscipit! Vitae tempora earum animi?
          Provident in quibusdam sequi accusamus animi veniam soluta quae?
        </p>
        <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col items-center justify-center md:my-8 my-4 md:gap-4 gap-2">
          {listItems.map((listItem, index) => (
            <span
              className="bg-slate-200 w-full md:p-2 p-1 md:text-xl text-base rounded-md inline-flex items-center gap-2"
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
