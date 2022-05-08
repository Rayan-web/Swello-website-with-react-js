import React from "react";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import MainLogo from "../images/mainlogo.svg";

import "../App.css";
function LastFooter() {
  return (
    <div className="box-4 mt-40 text-pop text-white  " id="footer">
      <div className="grid grid-cols-12 mt-10 ">
        <div className="logo col-span-6 md:col-span-3 ml-10 ">
          <img src={MainLogo} alt="" />
        </div>
        <div className=" md:flex justify-between col-span-6 md:col-span-3 hidden  ">
          <div className="font-pop   ">
            <h1 className=" text-md ">The Company</h1>
            <div className=" leading-8 mt-7 text-sm text-gray-500 cursor-pointer ">
              <p>About </p>
              <p>Works</p>
              <p>For the record</p>
            </div>
          </div>
          <div className="font-pop ">
            <h1 className=" text-md  ">Communities</h1>
            <div className="leading-8 mt-7 text-sm text-gray-500 cursor-pointer ">
              <p>For performers</p>
              <p>Developers</p>
              <p>Advertising</p>
              <p>Investors</p>
            </div>
          </div>

          <div className="font-pop ">
            <h1 className=" text-md">Useful links</h1>
            <div className=" leading-8 mt-7 text-sm text-gray-500  cursor-pointer ">
              <p>Help</p>
              <p>Stort</p>
              <p>trading Advertising</p>
            </div>
          </div>
        </div>
        <div className=" col-span-6 flex justify-end gap-6 mb-10  mr-10  ">
          <FaDiscord size={"2rem"} className="cursor-pointer   " />
          <AiOutlineTwitter size={"2rem"} className="cursor-pointer" />
          <FaTelegramPlane size={"2rem"} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default LastFooter;
