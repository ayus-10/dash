import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const locationOnMap =
    "https://www.openstreetmap.org/export/embed.html?bbox=-73.98702174425127%2C40.74789704963033%2C-73.98496717214586%2C40.74898823106307&amp;layer=mapnik&amp;marker=40.74844264258488%2C-73.98599445819855";
  const location = "350 Empire State Building, 5th Avenue, New York";

  return (
    <div className="md:p-12 p-4 text-gray-900">
      <h1 className="text-sky-700 md:text-4xl text-2xl font-medium uppercase mb-4">
        Contact
      </h1>
      <div className="relative md:h-screen w-full flex flex-col">
        <div className="md:hidden flex flex-col mb-2">
          <h1 className="text-sky-700 font-medium uppercase">Our address</h1>
          <p className="text-sm">{location}</p>
        </div>
        <iframe src={locationOnMap} height="100%" width="100%"></iframe>
        <div className="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-8 my-4 md:p-4 bg-slate-100 rounded-md">
          <div className="md:flex md:flex-col mb-4 hidden">
            <h1 className="text-lg text-sky-700 font-medium uppercase">
              Our address
            </h1>
            <p className="flex gap-1 items-center text-base">
              <HiOutlineLocationMarker className="flex-shrink-0" />
              {location}
            </p>
          </div>
          <h1 className="md:text-lg text-sky-700 font-medium uppercase mb-2">
            Send us a message
          </h1>
          <div className="flex flex-col gap-4 mb-4">
            <div className="flex flex-col text-gray-700 md:text-sm text-xs">
              <label htmlFor="userName">Your name</label>
              <input
                id="userName"
                type="text"
                className="p-2 outline-none rounded-sm bg-transparent border border-slate-400 focus:border-sky-700 focus:bg-white focus:ring-1 ease-in-out duration-500"
                placeholder="John Cena"
              />
            </div>
            <div className="flex flex-col text-gray-700 md:text-sm text-xs">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="p-2 outline-none rounded-sm bg-transparent border border-slate-400 focus:border-sky-700 focus:bg-white focus:ring-1 ease-in-out duration-500"
                placeholder="johncena@example.com"
              />
            </div>
            <div className="flex flex-col text-gray-700 md:text-sm text-xs">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                cols="30"
                rows="4"
                className="p-2 outline-none rounded-sm bg-transparent border border-slate-400 focus:border-sky-700 focus:bg-white focus:ring-1 ease-in-out duration-500 resize-none"
                placeholder="You can't see me, my time is now."
              ></textarea>
            </div>
            <button className="bg-sky-700 hover:bg-sky-800 ease-in-out duration-300 text-white py-2 rounded-sm">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
