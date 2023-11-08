import React from "react";
import { PiGearSixBold } from "react-icons/pi";
import { MdInfo } from "react-icons/md";
import { BiDollarCircle, BiSupport, BiSolidHome } from "react-icons/bi";
import Logo from "../assets/react.svg";

const Sidebar = (props) => {
  var active = props.activeComponent;

  return (
    <header className="col-span-1">
      <nav className="bg-slate-900 h-full flex flex-col">
        <div className="text-white text-xl">
          <div
            className="flex items-center justify-center m-4 cursor-pointer gap-1"
            onClick={() => props.onButtonClick("home")}
          >
            <img src={Logo} alt="logo" />
            <h1 className="lg:text-4xl text-3xl md:block hidden">DASH</h1>
          </div>
          <div
            className={`hover:bg-slate-800 ease-in-out duration-300 p-2 m-2 cursor-pointer rounded-md flex items-center justify-center gap-1 ${
              active === "home" ? "bg-slate-800" : "bg-slate-700"
            }`}
            onClick={() => props.onButtonClick("home")}
          >
            <BiSolidHome className="inline flex-shrink-0" />
            <span className="md:inline hidden">Home</span>
          </div>
          <div
            className={`hover:bg-slate-800 ease-in-out duration-300 p-2 m-2 cursor-pointer rounded-md flex items-center justify-center gap-1 ${
              active === "about" ? "bg-slate-800" : "bg-slate-700"
            }`}
            onClick={() => props.onButtonClick("about")}
          >
            <MdInfo className="inline flex-shrink-0" />
            <span className="md:inline hidden">About</span>
          </div>
          <div
            className={`hover:bg-slate-800 ease-in-out duration-300 p-2 m-2 cursor-pointer rounded-md flex items-center justify-center gap-1 ${
              active === "services" ? "bg-slate-800" : "bg-slate-700"
            }`}
            onClick={() => props.onButtonClick("services")}
          >
            <PiGearSixBold className="inline flex-shrink-0" />
            <span className="md:inline hidden">Services</span>
          </div>
          <div
            className={`hover:bg-slate-800 ease-in-out duration-300 p-2 m-2 cursor-pointer rounded-md flex items-center justify-center gap-1 ${
              active === "pricing" ? "bg-slate-800" : "bg-slate-700"
            }`}
            onClick={() => props.onButtonClick("pricing")}
          >
            <BiDollarCircle className="inline flex-shrink-0" />
            <span className="md:inline hidden">Pricing</span>
          </div>
          <div
            className={`hover:bg-slate-800 ease-in-out duration-300 p-2 m-2 cursor-pointer rounded-md flex items-center justify-center gap-1 ${
              active === "contact" ? "bg-slate-800" : "bg-slate-700"
            }`}
            onClick={() => props.onButtonClick("contact")}
          >
            <BiSupport className="inline flex-shrink-0" />
            <span className="md:inline hidden">Contact</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Sidebar;
