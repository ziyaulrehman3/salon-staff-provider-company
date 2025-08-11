"use client";

import { SiTicktick } from "react-icons/si";
import { RiScissorsFill } from "react-icons/ri";
import { LuUserRound } from "react-icons/lu";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import { FiTool } from "react-icons/fi";
import { LuCrown } from "react-icons/lu";
import { motion } from "framer-motion";
import { fadeUp, fadeDown, fadeRight, fadeLeft } from "./animation/animation";

export default function Services() {
  //Skilled, verified professionals ready to start in 24 hours with full onboarding support.
  const serviceList = [
    {
      title: "Unisex Hair Stylist",
      icon: <RiScissorsFill />,
    },
    {
      title: "Male Hair Dresser",
      icon: <LuUserRound />,
    },
    {
      title: "Makeup Artist",
      icon: <IoColorPaletteOutline />,
    },
    {
      title: "Beautician / Facial Expert",
      icon: <LuSparkles />,
    },
    {
      title: "Keratin / Chemical Expert",
      icon: <FiTool />,
    },
    {
      title: "Salon Manager",
      icon: <LuCrown />,
    },
  ];
  return (
    <div
      id="Services"
      className="px-4 py-16 flex flex-col gap-8 border-b-[1px] border-[#E2E8F0]"
    >
      <div className="text-center flex flex-col gap-4 items-center">
        <motion.h1 {...fadeUp} className="text-5xl font-semibold">
          Professional Roles We Provide
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="w-[90%] lg:w-[70%] mx-auto text-xl text-gray-500"
        >
          Expert professionals across all salon specialties, verified and ready
          to start
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceList.map((item, index) => {
          return (
            <motion.div
              {...fadeUp}
              transition={{
                ...fadeUp.transition,
                delay: ((0.5 * index) % 3) + 1,
              }}
              key={index}
              className="p-4 rounded-xl border-[1px] border-[#E2E8F0] flex flex-col gap-2 cursor-pointer  hover:shadow-[0px_0px_40px_2px]  shadow-[#813BED]  transition-all"
            >
              <div className="h-8 lg:h-12 flex gap-2 items-center">
                <span className="flex items-center justify-center text-2xl h-full aspect-square rounded-lg bg-gradient-to-br from-[#813BED] to-[#C539E4] text-white">
                  {item.icon}
                </span>
                <h1 className="text-xl font-semibold">{item.title}</h1>
              </div>
              <p className="text-gray-500 text-lg ">
                Skilled, verified professionals ready to start in 24 hours with
                full onboarding support.
              </p>
              <p className="text-[#813BED] flex gap-2 items-center font-semibold">
                <SiTicktick />
                <span>Background Verified</span>
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
