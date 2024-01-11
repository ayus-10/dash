import React from "react";
import { Link } from "react-router-dom";
import { PiGearSixBold } from "react-icons/pi";
import { MdInfo } from "react-icons/md";
import { BiDollarCircle, BiSupport, BiSolidHome } from "react-icons/bi";
import Logo from "../assets/logo.png";

const Sidebar = (props) => {
  const { activeComponent, setActiveComponent } = props;

  const links = [
    {
      icon: <BiSolidHome className="inline flex-shrink-0" />,
      name: "Home",
      link: "",
    },
    {
      icon: <MdInfo className="inline flex-shrink-0" />,
      name: "About",
      link: "about",
    },
    {
      icon: <PiGearSixBold className="inline flex-shrink-0" />,
      name: "Services",
      link: "services",
    },
    {
      icon: <BiDollarCircle className="inline flex-shrink-0" />,
      name: "Pricing",
      link: "pricing",
    },
    {
      icon: <BiSupport className="inline flex-shrink-0" />,
      name: "Contact",
      link: "contact",
    },
  ];

  return (
    <header className="col-span-1 flex h-full flex-col bg-slate-900">
      <div className="text-xl text-white">
        <div className="m-2 flex cursor-pointer items-center justify-center gap-1">
          <img src={Logo} alt="logo" className="max-h-10" />
          <h1 className="hidden text-3xl md:block lg:text-4xl">DASH</h1>
        </div>
        {links.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/${item.link}`}
              onClick={() => setActiveComponent(item.link)}
              className={`m-2 flex cursor-pointer items-center justify-center gap-1 rounded-md p-2 duration-300 ease-in-out hover:bg-slate-800 
              ${activeComponent === item.link ? "bg-slate-800" : "bg-slate-700"}
              `}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
};

export default Sidebar;
