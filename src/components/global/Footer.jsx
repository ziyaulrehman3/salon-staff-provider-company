"use client";

import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { LuPhoneCall } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocationOn } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const contactList = [
    {
      icon: <LuPhoneCall />,
      text: "+91 9548421173",
    },
    {
      icon: <IoMailOutline />,
      text: "shanibalvi114@gmail.com",
    },
    {
      icon: <MdOutlineLocationOn />,
      text: "Moradabad, UP - 244001",
    },
  ];
  return (
    <motion.div className="px-4 grid grid-cols-1 md:grid-cols-3 py-12 gap-6 lg:gap-0">
      <motion.div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">Saloon Staff Provider Company</h3>
        <p className="text-gray-500 text-lg">
          Hire verified salon professionals in just 1 day.
        </p>
      </motion.div>
      <motion.div className="flex flex-col gap-2">
        <h4 className="font-semibold text-lg">Quick Links</h4>
        <ul className="flex flex-col gap-2">
          {["Home", "Our Vision", "Contact"].map((item, index) => (
            <Link
              key={index}
              href={index == 0 ? "/" : "/" + item.split(" ").join("")}
            >
              <li key={index} className="cursor-pointer">
                {item}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>

      <motion.div className="flex flex-col gap-2">
        <h4 className="font-semibold text-lg">Connect</h4>
        <motion.div className="flex gap-4 text-3xl">
          <a href="https://www.facebook.com/share/16z6TraL4X/" target="__blank">
            <FiFacebook />
          </a>
          <a
            href="https://www.instagram.com/sanib_alvi114?utm_source=qr&igsh=MTQwNXF4enVxem43eA=="
            target="__blank"
          >
            <FaInstagram />
          </a>
        </motion.div>

        <ul className="flex flex-col gap-2">
          {contactList.map((item, index) => {
            return (
              <li key={index} className="flex gap-2 items-center">
                {item.icon}
                <span>{item.text}</span>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </motion.div>
  );
}
