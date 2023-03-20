import Image from "next/image";
import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

const SideBarButton = ({
  btnName,
  logoIndex,
  isAccordion,
  AccordionList,
  btnNumber,
  setscreen,
}) => {
  const [dropdownopen, setopendropdown] = useState(false);
  const iconsList = [
    <Image
      key={0}
      src="/pngicons/myleagues.png"
      alt="menu"
      width={25}
      height={25}
      className="mx-2 inline-block"
      style={{
        filter:
          " invert(100%) sepia(12%) saturate(7462%) hue-rotate(293deg) brightness(124%) contrast(102%)",
      }}
    />,
  ];

  const heightVariants = {
    open: { height: "auto", transition: { duration: 0.3 } },
    closed: { height: 0, transition: { duration: 0.3 } },
  };

  const handleButtonClick = (btnNo, index) => {
    setscreen(`${btnNo}.${index}`);
  };

  return (
    <div>
      <div
        onClick={() => {
          if (!isAccordion) {
            handleButtonClick(btnNumber, 0);
          } else {
            setopendropdown(!dropdownopen);
          }
        }}
        className="cursor-pointer text-white text-lg rounded-md shadow-sm font-normal flex justify-between items-center mx-1 py-2 pl-3 pr-3 hover:bg-[#ffffff45] "
      >
        <div className="flex items-center">
          {iconsList[logoIndex]} {btnName}
        </div>

        {isAccordion && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: dropdownopen ? 180 : 0 }}
            transition={{ type: "easeIn", duration: 0.4 }}
          >
            <HiChevronDown className="text-2xl" />
          </motion.div>
        )}
      </div>
      <motion.div
        variants={heightVariants}
        animate={dropdownopen ? "open" : "closed"}
        initial="closed"
        className="overflow-hidden h-fit"
      >
        <AnimatePresence>
          {dropdownopen && (
            <motion.div
              initial={{ y: -400 }}
              animate={{ y: 0 }}
              transition={{ type: "easeIn", duration: 0.4 }}
              exit={{ y: -400 }}
              className="ml-3"
            >
              {AccordionList.map((e, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      handleButtonClick(btnNumber, index + 1);
                    }}
                    className="cursor-pointer text-white text-sm rounded-md shadow-sm font-normal flex justify-between items-center mx-1 py-2 pl-3 pr-3 hover:bg-[#ffffff45] "
                  >
                    <div className="flex items-center">
                      {AccordionList[index]}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SideBarButton;
