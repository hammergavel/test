import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import BottomNav from "./BottomNav";
import JoinAuctionModal from "./Modal";
import Navbar from "./Navbar";

const NavbarsTopBot = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.UImainslice.isLogged);

  console.log(isLoggedIn);
  return (
    <>
      {isLoggedIn === "true" ? (
        <div className="h-screen">
          <Navbar />
          <div className="relative h-[calc(100vh-135px)] bg-light-gray-theme">
            {children}
          </div>
          <BottomNav />
        </div>
      ) : (
        <div className="h-screen">
          <div className="relative h-full bg-light-gray-theme">{children}</div>
        </div>
      )}
    </>
  );
};

export default NavbarsTopBot;
