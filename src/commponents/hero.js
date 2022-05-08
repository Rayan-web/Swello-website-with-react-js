import React from "react";
import "../App.css";
import NFT from "../images/pngwing.png";

function hero() {
  return (
    <>
      <div className="text-white text-center py-10  relative  " id="hero">
        <h1 className="mainText ">THE WORLD'S EASIEST</h1>
        <h1 className="mainText pt-1 ">AUTO-COMPOUNDING CRYPTO</h1>
        <p className="text-sm text-gray-300 tracking-wider font-Pop  pt-5">
          Get fixed 146,848% APY rewarded directly to your wallet with the
          lowest fees in high compound coins
        </p>
        <p className="secText  pt-2">
          every 15 min, automatically, by buying and holding the Swell®
        </p>

        <div className="pt-10">
          <a
            href=""
            className="rounded-full bg-Pinky text-white px-7 py-2  font-semibold tracking-normal shodow "
          >
            Buy Swell
          </a>
        </div>
      </div>
      <div className="flex justify-center card  ">
        <div className="text-white box font-Pop relative ">
          <h1 className="rounded-full bg-Pinke text-pinkText max-w-fit p-2 m-5 ">
            FIXED APY
          </h1>
          <h1 className="text-3xl m-5 ">156,789%</h1>
          <p className=" secText  m-5 ">
            Join the movement of investors earning <br /> passive income, with
            no effort.
          </p>
        </div>
        <img
          className="w-36 h-36 lg:absolute lg:right-1/3 img hidden lg:block "
          src={NFT}
          alt=""
        />
      </div>

      <div className=" font-pop mainText text-center mt-36 ">
        <h1 className=" text-white">
          WE REMOVE THE CONFUSION <br /> OF STAKING & COMPOUNDING
        </h1>
        <p className="secText mt-4 text-sm text   leading-10">
          Staking to earn passive and compounding interest can be overwhelming.
          That's why we developed <br /> SAS? (Swell Automated Staking System)
          which automatically rewards you for buying & holding Swell in your
          wallet. No <br /> need to move your tokensor click on additional
          buttons to start. All you had to do is buy & your rewards <br /> come
          straight to your wallet every 15min
        </p>
      </div>
    </>
  );
}

export default hero;
