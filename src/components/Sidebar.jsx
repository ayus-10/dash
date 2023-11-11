import React from "react";
import { PiGearSixBold } from "react-icons/pi";
import { MdInfo } from "react-icons/md";
import { BiDollarCircle, BiSupport, BiSolidHome } from "react-icons/bi";
import Logo from "../assets/logo.png";

const Sidebar = (props) => {
  var active = props.activeComponent;

  return (
    <header className="col-span-1 flex h-full flex-col bg-slate-900">
      <div className="text-xl text-white">
        <div
          className="m-4 flex cursor-pointer items-center justify-center gap-1"
          onClick={() => props.onButtonClick("home")}
        >
          <img src={Logo} alt="logo" className="h-8 w-auto lg:h-10" />
          <h1 className="hidden text-3xl md:block lg:text-4xl">DASH</h1>
        </div>
        <div
          className={`m-2 flex cursor-pointer items-center justify-center gap-1 rounded-md p-2 duration-300 ease-in-out hover:bg-slate-800 ${
            active === "home" ? "bg-slate-800" : "bg-slate-700"
          }`}
          onClick={() => props.onButtonClick("home")}
        >
          <BiSolidHome className="inline flex-shrink-0" />
          <span className="hidden md:inline">Home</span>
        </div>
        <div
          className={`m-2 flex cursor-pointer items-center justify-center gap-1 rounded-md p-2 duration-300 ease-in-out hover:bg-slate-800 ${
            active === "about" ? "bg-slate-800" : "bg-slate-700"
          }`}
          onClick={() => props.onButtonClick("about")}
        >
          <MdInfo className="inline flex-shrink-0" />
          <span className="hidden md:inline">About</span>
        </div>
        <div
          className={`m-2 flex cursor-pointer items-center justify-center gap-1 rounded-md p-2 duration-300 ease-in-out hover:bg-slate-800 ${
            active === "services" ? "bg-slate-800" : "bg-slate-700"
          }`}
          onClick={() => props.onButtonClick("services")}
        >
          <PiGearSixBold className="inline flex-shrink-0" />
          <span className="hidden md:inline">Services</span>
        </div>
        <div
          className={`m-2 flex cursor-pointer items-center justify-center gap-1 rounded-md p-2 duration-300 ease-in-out hover:bg-slate-800 ${
            active === "pricing" ? "bg-slate-800" : "bg-slate-700"
          }`}
          onClick={() => props.onButtonClick("pricing")}
        >
          <BiDollarCircle className="inline flex-shrink-0" />
          <span className="hidden md:inline">Pricing</span>
        </div>
        <div
          className={`m-2 flex cursor-pointer items-center justify-center gap-1 rounded-md p-2 duration-300 ease-in-out hover:bg-slate-800 ${
            active === "contact" ? "bg-slate-800" : "bg-slate-700"
          }`}
          onClick={() => props.onButtonClick("contact")}
        >
          <BiSupport className="inline flex-shrink-0" />
          <span className="hidden md:inline">Contact</span>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
