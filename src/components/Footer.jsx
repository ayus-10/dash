import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-gray-900 flex justify-between items-center">
      <p className="md:p-4 p-2 md:text-base text-sm">
        Copyright &#169; 2023 DASH. All rights reserved.
      </p>
      <div className="inline-flex md:p-4 p-2 gap-4 text-lg">
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
