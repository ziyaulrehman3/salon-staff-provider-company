"use client";

import { SlPeople } from "react-icons/sl";
import { BsShieldCheck } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeDown, fadeRight, fadeLeft } from "./animation/animation";

export default function About() {
  const aboutList = [
    {
      title: "Expert Team Network",
      paragraph:
        "Our extensive network includes top-tier professionals across all salon specialties, each verified for skills and reliability.",
      icon: <SlPeople />,
    },
    {
      title: "Rigorous Verification",
      paragraph:
        "Every professional undergoes comprehensive background checks, skill assessments, and etiquette training before joining our network.",
      icon: <BsShieldCheck />,
    },
    {
      title: "Rapid Deployment",
      paragraph:
        "Whether you need a last-minute replacement or want to scale your team, we make hiring effortless with our 24-hour guarantee.",
      icon: <MdOutlineTimer />,
    },
  ];

  return (
    <div id="About" className="px-4 py-12  border-b-[1px] border-[#E2E8F0]">
      <div className="text-center flex flex-col gap-4 items-center">
        <motion.h1 {...fadeUp} className="text-5xl font-semibold">
          About Our Company
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="w-[90%] lg:w-[70%] mx-auto text-xl text-gray-500"
        >
          Saloon Staff Provider Company is a specialized staffing company for
          salons. We connect you with trusted, pre-verified professionals —
          ensuring skills, etiquette, and reliability.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 py-8 items-center gap-4 lg:gap-0">
        <div className="col-span-3 flex flex-col gap-4 lg:gap-8 px-4">
          {aboutList.map((item, index) => {
            return (
              <motion.div
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: 0.5 * index + 1 }}
                key={index}
                className="flex gap-2 w-full border-[1px] rounded-xl border-[#E2E8F0] p-2 hover:shadow-[0px_0px_40px_2px] cursor-pointer shadow-[#813BED] hover:-translate-y-2 transition-all "
              >
                <div className="h-8 lg:h-12 aspect-square bg-gradient-to-b from-[#813BED] to-[#C539E4] text-white text-2xl rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="w-[90%]">
                  <h1 className="font-semibold text-xl">{item.title}</h1>
                  <p className="text-lg text-gray-500">{item.paragraph}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="col-span-2 flex flex-col gap-4 px-4 items-center">
          <motion.div
            {...fadeLeft}
            transition={{ ...fadeUp.transition, delay: 0.5 }}
            className="relative w-[90%] rounded-xl aspect-[16/9] overflow-hidden  hover:shadow-[0px_0px_40px_2px]  shadow-[#813BED]  transition-all "
          >
            <Image
              src="/img2.jpg"
              alt="Image two"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            {...fadeLeft}
            transition={{ ...fadeUp.transition, delay: 1 }}
            className="relative w-[90%] rounded-xl aspect-[16/9] overflow-hidden  hover:shadow-[0px_0px_40px_2px]  shadow-[#813BED]  transition-all "
          >
            <Image
              src="/img3.jpg"
              alt="Image two"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
