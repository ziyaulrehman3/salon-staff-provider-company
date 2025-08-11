"use client";

import HeroButton from "./global/Extra/HeroButton";
import { HiOutlineBolt } from "react-icons/hi2";
import { BsShieldCheck } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import { LuSparkles } from "react-icons/lu";
import { motion } from "framer-motion";

import { fadeUp, fadeDown, fadeRight, fadeLeft } from "./animation/animation";

import Image from "next/image";

export default function Hero() {
  return (
    <motion.div className="px-4 py-16 pt-24 grid grid-cols-1 lg:grid-cols-2 border-b-[1px] border-[#E2E8F0]">
      <motion.div className="flex flex-col gap-4 lg:gap-6 items-start w-full">
        <motion.div className="inline-flex gap-2 px-4 py-1 rounded-full text-sm font-semibold items-center border-[1px] border-[#E2E8F0] text-[#813BED]">
          <HiOutlineBolt />
          <span className="">24 Hour Hiring Process</span>
        </motion.div>

        <motion.h1
          {...fadeUp}
          className="flex flex-col text-6xl font-bold leading-16 w-[80%] lg:w-[60%]"
        >
          <span className="bg-gradient-to-b from-[#813BED] from-[10%] to-[#C539E4] bg-clip-text text-transparent">
            Saloon Staff Provider
          </span>
          <span>Company</span>
        </motion.h1>

        <motion.p
          {...fadeRight}
          transition={{ ...fadeRight.transition, delay: 0.5 }}
          className="text-lg font-semibold text-gray-500"
        >
          Get verified salon professionals in just 1 day. We place top talent —
          from stylists to managers — so your salon never slows down.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 1 }}
          className="flex flex-col lg:flex-row gap-4 lg:gap-8"
        >
          <HeroButton text="Hire Today" url="/Contact" className="px-8" />
          <HeroButton
            text="Join as Professional"
            url="#JoinUs"
            className="px-12"
            liner={true}
          />
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 1.5 }}
          className="flex justify-between w-full gap-4 overflow-hidden"
        >
          <HeroButton
            text="Verified Staff"
            url=""
            className="px-2 lg:pr-10"
            liner={true}
            icon={<BsShieldCheck />}
          />
          <HeroButton
            text="1-Day Hiring"
            url=""
            className="px-2 lg:pr-10"
            liner={true}
            icon={<MdOutlineTimer />}
          />
          <HeroButton
            text="Full Support"
            url=""
            className="px-2 lg:pr-10"
            liner={true}
            icon={<LuSparkles />}
          />
        </motion.div>
      </motion.div>
      <motion.div className="flex items-center justify-center  py-8 ">
        <motion.div
          {...fadeLeft}
          transition={{ ...fadeLeft.transition, delay: 1, duration: 1 }}
          className="w-[90%] aspect-[16/9] relative rounded-xl overflow-hidden shadow-[0px_0px_40px_2px] shadow-[#813BED]"
        >
          <Image src="/img1.jpg" alt="Hero Img" fill className="object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
