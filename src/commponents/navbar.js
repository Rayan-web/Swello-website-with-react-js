import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../App.css";

// import Svg from "../images/svg.svg";
// import Menu from "../images/menu.svg";
function Navbar() {
  const [menu, showMenu] = useState(false);
  const [Close, SetClose] = useState(false);
  //   const burger = document.getElementById("burger");
  //   const menu = document.getElementById("menu");
  //   burger.addEventListener("click", () => {
  //     if (menu.classList.contains("hidden")) {
  //       menu.classList.remove();
  //     } else menu.classList.add();
  //   });
  return (
    <section className="text-white black-t-50 bg-test  ">
      <nav className="flex  text-center  p-6  ">
        <h1 className="pl-10 text-lg font-medium tracking-wider cursor-pointer ">
          Swello
        </h1>
        <svg
          class="w-10 h-10 absolute right-3 md:hidden block "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          id="burger"
          onClick={() => {
            showMenu(!menu);
          }}
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <div className="hidden md:block " id={menu ? "hidden" : ""}>
          <ul className=" flex relative text-sm text-gray-300 tracking-wider font-Pop  ">
            <li className="pl-20 text-white font-semibold  ">
              <Link to="#hero"> FAQ'S</Link>
            </li>
            <li className="pl-10">
              <Link to="#main"> Whitepaper</Link>
            </li>
            <li className="pl-10">
              <Link to="#footer">Discord</Link>
            </li>
            {/* <a href="">Home</a>
          <a href="">Home</a>
          <a href="">Home</a> */}
          </ul>
        </div>

        <a
          href=""
          className=" md:absolute md:right-20 rounded-full bg-white text-black px-7 py-2 top-5 font-bold hidden md:block  "
        >
          Enter App
        </a>
      </nav>
    </section>
  );
}

export default Navbar;
