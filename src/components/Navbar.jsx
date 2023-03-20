import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaBell, FaUser, FaChevronCircleLeft } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[6%] flex justify-center items-center text-white theme-gradient">
      <div className="flex-[1] flex justify-start">
        <FaChevronCircleLeft
          className="text-xl ml-3 hover:scale-110 active:scale-90 transition-transform ease-in-out"
          onClick={() => router.back()}
        />
      </div>
      <div className="flex-[2] flex justify-center">
        <Image src="/Hnglogo.svg" width={30} height={20} />
      </div>
      <div className="flex-[1] flex justify-around">
        <FaBell className="hover:scale-110 active:scale-90 transition-transform ease-in-out" />
        <FaUser className="hover:scale-110 active:scale-90 transition-transform ease-in-out" />
      </div>
    </div>
  );
};

export default Navbar;
