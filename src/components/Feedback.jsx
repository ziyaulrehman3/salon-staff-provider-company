"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeDown, fadeRight, fadeLeft } from "./animation/animation";

export default function Feedback() {
  const feedbackList = [
    {
      msg: "“We hired a Unisex Hair Stylist in less than 24 hours. Great experience and verified talent.”",
      name: "— Meera, Salon Owner",
    },
    {
      msg: "“Professional, punctual and skilled. Our clients noticed the difference immediately.”",
      name: "— Arjun, Studio Manager",
    },
    {
      msg: "“Reliable staffing partner. We scaled our team quickly during festival season.”",
      name: "— Kavita, Boutique Salon",
    },
  ];
  return (
    <div
      id="Feedback"
      className="px-4 py-16 flex flex-col gap-4 border-b-[1px] border-[#E2E8F0]"
    >
      <motion.h1 {...fadeUp} className="text-4xl font-semibold">
        Feedback from Salon Owners
      </motion.h1>

      <div className="w-full  flex gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {feedbackList.map((item, index) => {
          return (
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.5 * index }}
              className="rounded-lg border-[1px] border-[#E2E8F0] p-4 flex flex-col gap-2 "
            >
              <p>{item.msg}</p>
              <p className="text-gray-500">{item.name}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
