import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { UIMainActions } from "@/store/UIMainReducer";
import Link from "next/link";
import { useRouter } from "next/router";
// Build a full animated Bottom Nav
const BottomNav = () => {
  const mainscreenui = useSelector((state) => state.UImainslice.main);
  const dotValue = mainscreenui.screenInd;
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className=" bg-white rounded-t-lg shadow-lg pb-8 pt-2 px-2 cursor-pointer">
      <div className="relative flex justify-between w-full ">
        {/* 2 icons */}
        <div className="flex w-[35%] justify-around">
          {/* Icon 1 */}
          <Link href={{ pathname: "/competitions" }} className="w-1/2">
            <div
              className="flex flex-col  items-center transition-transform active:scale-90 duration-[30ms] delay-[0ms]"
              onClick={() => {
                // setdotValue(0);
                dispatch(
                  UIMainActions.setMainScreen({
                    screenName: "home",
                    screenInd: 0,
                  })
                );
              }}
            >
              <Image src="/pngicons/home.png" width={30} height={30} />

              <p className="text-xs text-center mt-1">Home</p>
            </div>
          </Link>
          {/* Icon 1 */}
          {/* Icon 2 */}
          <Link href={{ pathname: "/myleagues" }} className="w-1/2">
            <div
              className="flex flex-col items-center transition-transform active:scale-90 duration-[30ms] delay-[0ms]"
              onClick={() => {
                // setdotValue(1);
                dispatch(
                  UIMainActions.setMainScreen({
                    screenName: "myleagues",
                    screenInd: 1,
                  })
                );
              }}
            >
              <Image src="/pngicons/myleagues.png" width={30} height={30} />
              <p className="text-[10px] text-center mt-1">My Leagues</p>
            </div>
          </Link>
          {/* Icon 2 */}
        </div>
        {/* 2 icons */}

        <div className="flex flex-col items-center bg-purple-theme p-2 rounded-lg shadow-lg shadow-[#5c44747f] scale-90 active:scale-[.8] absolute transition-transform delay-[1ms] duration-[100ms] -translate-x-1/2  left-1/2 -top-[60%]">
          <Image
            src="/pngicons/myauctions.png"
            alt="My Auctions"
            width={40}
            height={40}
            style={{
              filter:
                "invert(100%) sepia(0%) saturate(184%) hue-rotate(307deg) brightness(118%) contrast(100%)",
            }}
          />
          <p className="text-xs mt-1 text-white text-center">My Auctions</p>
        </div>

        {/* 2 icons */}
        <div className="flex w-[35%] justify-around">
          <Link href={{ pathname: "/wallet" }} className="w-1/2">
            <div
              className="flex flex-col items-center transition-transform active:scale-90 duration-[30ms] delay-[0ms]"
              onClick={() => {
                // setdotValue(3.77);
                dispatch(
                  UIMainActions.setMainScreen({
                    screenName: "wallet",
                    screenInd: 3.77,
                  })
                );
              }}
            >
              <Image src="/pngicons/wallet.png" width={30} height={30} />
              <p className="text-xs mt-1">Wallet</p>
            </div>
          </Link>
          <Link href={{ pathname: "/referandearn" }} className="w-1/2">
            <div
              className="flex flex-col items-center transition-transform active:scale-90 duration-[30ms] delay-[0ms]"
              onClick={() => {
                // setdotValue(4.77);
                dispatch(
                  UIMainActions.setMainScreen({
                    screenName: "refer",
                    screenInd: 4.77,
                  })
                );
              }}
            >
              <Image src="/pngicons/referandearn.png" width={30} height={30} />
              <p className="text-[10.5px] mt-1 text-center">Refer & Earn</p>
            </div>
          </Link>
          {/* <img src="/pngicons/myleagues.png" alt="" /> */}
        </div>
        {/* 2 icons */}
      </div>
      {/* Dot line */}
      <div className="w-full mt-1 relative">
        <div
          className="w-[7px] h-[7px] bg-darkblue-theme rounded-full mx-[8.3%] transition-transform "
          style={{
            position: "absolute",
            transform: `translate(${64 * dotValue}px, 0vw)`,
          }}
        ></div>
      </div>
      {/* Dot line */}
    </div>
  );
};

export default BottomNav;
