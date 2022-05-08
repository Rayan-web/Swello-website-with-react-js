import React from "react";
import "../App.js";
import V1 from "../images/v1.svg";
import V2 from "../images/v2.svg";
import Line from "../images/line.svg";
import LineV from "../images/line-v.svg";
import Logo from "../images/logo.svg";

function Footer() {
  return (
    <section className="text-white text-center text-pop  relative" id="main">
      <div className=" ">
        <h1 className="mainText mt-10 mb-10 ">HOW IT ALL WORKS</h1>
        <a href="" className="btn  mt-8 mb-10 ">
          BUY / SELL FEES 1%
        </a>
        <div className=" md:flex justify-center lg:flex ">
          <img
            src={V2}
            alt=""
            className="mt-8 mr-3 hidden md:block lg:block "
          />
          <h2 className=" mainText mt-5 lg:mt-0 md:mt-0 ">PancakeSwap</h2>
          <img
            src={V1}
            alt=""
            className="mt-8 ml-3 hidden md:block lg:block "
          />
        </div>
      </div>
      <div className=" md:flex justify-center l p-5 hidden  ">
        <div className="box-2  mr-5 mt-10  relative   ">
          <svg
            class="w-10 h-10 absolute left hidden md:block lg:block "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h1 className="mainText mt-10 ">SWELL TREASURY</h1>
          <p className="secText mt-2 leading-5 ">
            3% of all trading fees are stores in the Swell Treasury for <br />
            development of future Swell Innovations, Marketing, and to <br />
            support the SSS
          </p>
        </div>
        <img
          src={Line}
          alt="absolute left-10"
          className=" mr-4 hidden md:block lg:block  "
        />
        <div className="box-2 mt-10 relative ">
          <svg
            class="w-10 h-10 absolute right hidden md:block lg:block "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h1 className="mainText mt-10 ">SWELL SAFETY FUND</h1>
          <p className="secText mt-2 leading-5 ">
            5% of all trading fees are stored in the Swell Safety <br />
            Fundwhich helps sustain and back the staking rewards <br /> provided
            by the positive rebase to avoid flash crashes...
          </p>
        </div>
      </div>
      <div className=" flex justify-center ">
        <div className=" relative ">
          <img src={Logo} alt="" className=" logo-1   " />
          <h1 className="mainText mt-20 ">SAS2</h1>
          <p className="secText mt-5 md:block lg:block hidden ">
            Swell automated staking system
          </p>
          <img src={LineV} alt="" className="mt-10 hidden md:block lg:block " />
        </div>
      </div>

      <div className="mt-10 hidden md:block ">
        <div className="box-3  md:mr-5 lg:mr-5 ">
          <p className="secText mt-7 leading-6 mt-">
            You receive 2.07% per day in your wallet every <br /> 15min 96 times
            per day
          </p>
        </div>
        <div className="box-3 mt-5  secText md:ml-5 lg:ml-5 ">
          <p className="secText mt-7 leading-6 MT ">
            These rewards compound annually to <br /> equal 146,848% APY
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
