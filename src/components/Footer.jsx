import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-slate-200 text-gray-900">
      <p className="p-2 text-sm md:p-4 md:text-base">
        Copyright &#169; 2023 DASH.
      </p>
      <div className="inline-flex gap-4 p-2 text-lg md:p-4">
        <a href="#">
          <BsFacebook />
        </a>
        <a href="#">
          <BsYoutube />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
