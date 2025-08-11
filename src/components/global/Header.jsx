"use client";

import Image from "next/image";
import NormalButton from "./Extra/NormalButton";
import HeroButton from "./Extra/HeroButton";
import Link from "next/link";

export default function Header() {
  const buttonList = [
    {
      text: "About",
      url: "#About",
    },
    {
      text: "Services",
      url: "#Services",
    },
    {
      text: "Feedback",
      url: "#Feedback",
    },
    {
      text: "Join Us",
      url: "#JoinUs",
    },
    {
      text: "Vision",
      url: "/OurVision",
    },
    {
      text: "Contact",
      url: "/Contact",
    },
  ];
  return (
    <div className="z-40 fixed top-0 left-0 w-full flex justify-between px-4 lg:px-8 h-12 lg:h-16 bg-white opacity-90 items-center border-b-[#E2E8F0] border-b-[1px]">
      <Link href="/">
        <div className="relative h-10 lg:h-14 aspect-square overflow-hidden">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
      </Link>
      <div className="gap-2 flex items-center">
        <div className="gap-2  items-center hidden lg:flex">
          {buttonList.map((item, index) => (
            <NormalButton key={index} item={item} />
          ))}
        </div>

        <HeroButton key={20} text="Hire Today" url="/Contact" />
      </div>
    </div>
  );
}
