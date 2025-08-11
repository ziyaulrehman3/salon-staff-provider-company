"use client";

import Image from "next/image";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeDown,
  fadeRight,
  fadeLeft,
} from "@/components/animation/animation";

export default function Contact() {
  const contactList = [
    {
      title: "Phone",
      icon: <FiPhoneCall />,
      text: "+91 9548421173",
    },
    {
      title: "Email",
      icon: <IoMailOutline />,
      text: "hello@saloonstaffprovider.com",
    },
    {
      title: "Office",
      icon: <IoLocationOutline />,
      text: "Moradabad, UP - 244001",
    },
  ];
  return (
    <div className="w-full py-16 pt-24 px-8   border-b-[1px] border-[#E2E8F0] flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.5 }}
          className="text-3xl font-semibold"
        >
          Contact Us
        </motion.h1>
        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 1 }}
          className="w-full md:w-[80%] lg:w-[70%] text-lg text-gray-500"
        >
          We're here to help you hire fast. Reach us via phone, email, or visit
          our office.
        </motion.p>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
        {contactList.map((item, index) => {
          return (
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.5 * index }}
              className="rounded-lg cursor-pointer border-[1px] border-gray-500 p-4 py-8 gap-4 hover:-translate-y-2 hover:shadow-[0px_0px_20px_2px]  shadow-[#813BED]  transition-all"
            >
              <h1 className="flex gap-2 items-center font-semibold text-lg">
                <span className="text-[#813BED]">{item.icon}</span>
                <span>{item.title}</span>
              </h1>
              <p className="text-gray-500">{item.text}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
