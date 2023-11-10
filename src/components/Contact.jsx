import React from "react";

const Contact = () => {
  const locationOnMap =
    "https://www.openstreetmap.org/export/embed.html?bbox=12.861591875553131%2C48.06702809880262%2C12.86364644765854%2C48.06799061669401&amp;layer=mapnik";

  return (
    <div className="md:p-12 p-4 text-gray-900 h-full overflow-x-hidden">
      <h1 className="text-sky-700 md:text-4xl text-2xl font-medium uppercase mb-2">
        Contact
      </h1>
      <div className="relative md:h-full md:w-full flex flex-col">
        <iframe src={locationOnMap} className="md:h-full md:w-full"></iframe>
        <div className="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-0 md:mx-4 p-4 flex flex-col gap-4 bg-slate-100 h-fit w-fit rounded-md md:text-lg">
          <h1 className="md:text-lg text-sky-700 font-medium uppercase">
            Send us a message!
          </h1>
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
  );
};

export default Contact;
