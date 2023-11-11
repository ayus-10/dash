import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const locationOnMap =
    "https://www.openstreetmap.org/export/embed.html?bbox=-73.98702174425127%2C40.74789704963033%2C-73.98496717214586%2C40.74898823106307&amp;layer=mapnik&amp;marker=40.74844264258488%2C-73.98599445819855";
  const location = "350 Empire State Building, 5th Avenue, New York";

  return (
    <div className="p-4 text-gray-900 md:p-12">
      <h1 className="mb-4 text-2xl font-medium uppercase text-sky-700 md:text-4xl">
        Contact
      </h1>
      <div className="relative flex w-full flex-col lg:h-screen">
        <div className="mb-2 flex flex-col lg:hidden">
          <h1 className="font-medium uppercase text-sky-700">Our address</h1>
          <p className="text-sm">{location}</p>
        </div>
        <iframe src={locationOnMap} height="100%" width="100%"></iframe>
        <div className="my-4 rounded-md bg-slate-100 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:transform lg:p-4">
          <div className="mb-4 hidden lg:flex lg:flex-col">
            <h1 className="text-lg font-medium uppercase text-sky-700">
              Our address
            </h1>
            <p className="flex items-center gap-1 text-base">
              <HiOutlineLocationMarker className="flex-shrink-0" />
              {location}
            </p>
          </div>
          <h1 className="mb-2 font-medium uppercase text-sky-700 md:text-lg">
            Send us a message
          </h1>
          <div className="mb-4 flex flex-col gap-4">
            <div className="flex flex-col text-xs text-gray-700 md:text-sm">
              <label htmlFor="userName">Your name</label>
              <input
                id="userName"
                type="text"
                className="rounded-sm border border-slate-400 bg-transparent p-2 outline-none duration-500 ease-in-out focus:border-sky-700 focus:bg-white focus:ring-1"
                placeholder="John Cena"
              />
            </div>
            <div className="flex flex-col text-xs text-gray-700 md:text-sm">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="rounded-sm border border-slate-400 bg-transparent p-2 outline-none duration-500 ease-in-out focus:border-sky-700 focus:bg-white focus:ring-1"
                placeholder="johncena@example.com"
              />
            </div>
            <div className="flex flex-col text-xs text-gray-700 md:text-sm">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="30"
                rows="4"
                className="resize-none rounded-sm border border-slate-400 bg-transparent p-2 outline-none duration-500 ease-in-out focus:border-sky-700 focus:bg-white focus:ring-1"
                placeholder="You can't see me, my time is now."
              ></textarea>
            </div>
            <button className="rounded-sm bg-sky-700 py-2 text-white duration-300 ease-in-out hover:bg-sky-800">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
