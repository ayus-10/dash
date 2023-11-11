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
    <section className="flex h-full flex-col justify-between gap-8 text-gray-900">
      <div className="p-4 md:p-12 lg:grid lg:grid-cols-5 lg:items-center lg:justify-between lg:gap-4">
        <div className="mb-8 lg:col-span-3 lg:mb-0">
          <h1 className="mb-2 text-2xl font-medium uppercase text-sky-700 md:mb-4 md:text-4xl">
            Welcome to Dash!
          </h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            eveniet dicta hic mollitia nulla ipsum, cupiditate deserunt
            inventore dolore aut aliquid quos, voluptate minima nam temporibus
            quis, sit deleniti impedit commodi! Sunt.
          </p>
        </div>
        <div className="overflow-hidden rounded-md md:mx-12 lg:col-span-2 lg:mx-0">
          <img
            src={bannerImage}
            alt="banner"
            className="rounded-md duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-around gap-4 p-12 md:flex-row">
        <div className="h-fit w-full rounded-lg border border-slate-300 p-4 text-center">
          <p className="text-4xl md:text-5xl">
            <CountUp end={3100} />+
          </p>
          <span className="text-xl md:text-2xl">Customers</span>
        </div>
        <div className="h-fit w-full rounded-lg border border-slate-300 p-4 text-center">
          <p className="text-4xl md:text-5xl">
            <CountUp end={13} />
          </p>
          <span className="text-xl md:text-2xl">Years</span>
        </div>
        <div className="h-fit w-full rounded-lg border border-slate-300 p-4 text-center">
          <p className="text-4xl md:text-5xl">
            <CountUp end={131} />+
          </p>
          <span className="text-xl md:text-2xl">Products</span>
        </div>
      </div>
      <div className="p-4 md:p-12">
        <h1 className="mb-2 text-2xl uppercase text-sky-700 md:text-3xl">
          Why choose Dash?
        </h1>
        <p className="text-base md:text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          ad vel pariatur commodi maiores suscipit! Vitae tempora earum animi?
          Provident in quibusdam sequi accusamus animi veniam soluta quae?
        </p>
        <div className="my-4 flex flex-col items-center justify-center gap-2 md:my-8 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {listItems.map((listItem, index) => (
            <span
              className="inline-flex w-full items-center gap-2 rounded-md bg-slate-200 p-1 text-base md:p-2 md:text-xl"
              key={index}
            >
              <BsCheck2Circle className="flex-shrink-0 text-sky-700" />
              <p className="text-gray-800">{listItem}</p>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
