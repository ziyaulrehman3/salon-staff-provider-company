"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeDown,
  fadeRight,
  fadeLeft,
} from "@/components/animation/animation";

export default function OurVision() {
  return (
    <motion.div className="w-full py-16 pt-24 px-8   border-b-[1px] border-[#E2E8F0] flex flex-col gap-8">
      <motion.div className="flex flex-col gap-2">
        <h1 {...fadeUp} className="text-3xl font-semibold">
          Our Vision
        </h1>
        <p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="w-full md:w-[80%] lg:w-[70%] text-lg text-gray-500"
        >
          We envision a salon industry where hiring is instant, trustworthy and
          skill-first. By combining rigorous verification with a human touch, we
          help salons hire in one day and enable professionals to grow
          meaningful careers.
        </p>
      </motion.div>

      <motion.div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
        <motion.div
          {...fadeRight}
          transition={{ ...fadeUp.transition, delay: 1 }}
          className="col-span-1  relative aspect-square rounded-xl overflow-hidden border-[1px] border-[#E2E8F0] hover:shadow-[0px_0px_40px_2px]  shadow-[#813BED]  transition-all cursor-pointer"
        >
          <Image
            src="/photo.jpeg"
            alt="Founder"
            fill
            className="object-cover hover:scale-105 transition-all"
          />
        </motion.div>

        <motion.div className="justify-center flex flex-col gap-4 p-4 col-span-3  rounded-xl overflow-hidden border-[1px] border-[#E2E8F0]">
          <motion.h1
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.5 }}
            className="text-2xl font-semibold"
          >
            A Message from Our Founder
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 2 }}
            className="text-lg text-gray-500"
          >
            "Talent is everywhere, but opportunity is not. Saloon Staff Provider
            Company bridges this gap for salons and professionals alike. Our
            promise is simple: verified staff, fast hiring, and long-term
            success for everyone."
          </motion.p>

          <motion.div>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 2 }}
              className="font-semibold"
            >
              Sanib
            </motion.p>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 2 }}
              className="text-gray-500"
            >
              Founder & CEO, Salon Staff Provider
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
