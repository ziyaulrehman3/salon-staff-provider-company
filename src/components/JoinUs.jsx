"use client";

import HeroButton from "@/components/global/extra/HeroButton";
import { BsHandIndexFill } from "react-icons/bs";
import { SiTicktick } from "react-icons/si";
import { RiScissorsFill } from "react-icons/ri";
import { BsBrush } from "react-icons/bs";
import { TbUserCog } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeUp, fadeDown, fadeRight, fadeLeft } from "./animation/animation";

export default function JoinUs() {
  const rolesList = [
    {
      title: "Hair Stylist",
      icon: <RiScissorsFill />,
    },
    {
      title: "Makeup Artist",
      icon: <BsBrush />,
    },
    {
      title: "Salon Manager",
      icon: <TbUserCog />,
    },
    {
      title: "Hair Dresser",
      icon: <RiScissorsFill />,
    },
  ];
  return (
    <motion.div
      id="JoinUs"
      className="px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0  border-b-[1px] border-[#E2E8F0]"
    >
      <motion.div className="flex flex-col gap-4">
        <motion.h1 {...fadeUp} className="text-3xl lg:text-4xl font-semibold">
          Join Us to Grow Your Career
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="text-lg text-gray-500 w-[90%]"
        >
          Are you a stylist, makeup artist, beautician, or salon manager? Join
          our verified network and get placed fast.
        </motion.p>

        <ul>
          {[
            "Verified placements",
            "Quick onboarding",
            "Better pay opportunities",
          ].map((item, index) => {
            return (
              <motion.li
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.5 * index + 1 }}
                key={index}
                className="flex gap-2 items-center text-base"
              >
                <SiTicktick className="text-sm text-[#843BEC]" />
                <span>{item}</span>
              </motion.li>
            );
          })}
        </ul>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 3 }}
          className="flex gap-4"
        >
          <HeroButton text="WhatsApp Us" url="/Contact" className="px-8" />
          <HeroButton
            text="Contact Us"
            url="/Contact"
            className="px-12"
            liner={true}
          />
        </motion.div>
      </motion.div>

      <motion.div {...fadeLeft} className="flex justify-center items-center ">
        <motion.div className="w-full rounded-lg flex flex-col gap-4 bg-[#FAFCFD] p-4 border-[1px] rounded-xl border-[#E2E8F0] hover:shadow-[0px_0px_20px_2px]  shadow-[#813BED]  transition-all cursor-pointer">
          <h2 className="text-lg font-semibold">Popular Roles</h2>
          <motion.div className="grid grid-cols-2 gap-2">
            {rolesList.map((item, index) => {
              return (
                <motion.div className="flex gap-2 items-center">
                  {item.icon}
                  <span>{item.title}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
