import SideBarButton from "@/components/admin/SideBarButton";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import CreateCompetitions from "@/components/admin/CreateCompetitions";
import CreateAuction from "@/components/admin/CreateAuction";

const Index = () => {
  const [screen, setscreen] = useState("");
  console.log("screen", screen);
  return (
    <div className="flex">
      <div className="w-[20%] h-screen py-3 theme-gradient-reverse">
        <div className="flex justify-center items-center mt-3 mb-10">
          <Image alt="Logo" src="/Hnglogo.svg" width={30} height={20} />
          <p className="font-light ml-3 bg-gradient-to-br from-gray-50 to-[#9e71ca] bg-clip-text text-transparent text-4xl">
            ADMIN
          </p>
        </div>
        <ul>
          <li>
            <SideBarButton
              btnName={"Competitions"}
              logoIndex={0}
              isAccordion={true}
              AccordionList={[
                "Create Competition",
                "View Auctions",
                "League Competitions",
              ]}
              setscreen={setscreen}
              btnNumber={1}
            />
          </li>
          <li>
            <SideBarButton
              btnName={"Auctions"}
              logoIndex={0}
              isAccordion={false}
              setscreen={setscreen}
              btnNumber={2}
            />
          </li>
        </ul>
      </div>
      <div className="w-full">
        {screen === "1.1" && (
          <>
            <CreateCompetitions />
          </>
        )}
        {screen === "2.0" && (
          <>
            <CreateAuction />
          </>
        )}
      </div>
    </div>
  );
};

export default Index;

// export async function getServerSideProps({ req }) {
//   //   const token = req.cookies.jwt; // Retrieve JWT token from cookie
//   //   const decodedToken = verifyToken(token); // Verify token and decode payload

//   //   if (!decodedToken) {
//   //     return {
//   //       redirect: {
//   //         destination: "/login",
//   //         permanent: false,
//   //       },
//   //     };
//   //   }

//   return {
//     props: {
//       user: "admin",
//     },
//   };
// }
