import Link from "next/link";
import { motion } from "framer-motion";

export default function NormalButton({
  text,
  url,
  className = "",
  liner = false,
  icon = "",
}) {
  function buttonFun(text) {
    return (
      <button
        className={`  hover:shadow-lg  hover:shadow-gray-50  font-semibold text-xs md:text-sm lg:text-base cursor-pointer py-2 px-3 flex md:gap-2 items-center rounded-lg ${className} ${
          liner
            ? "text-black border-[#E2E8F0] border-[1px] bg-white hover:bg-gray-100"
            : "text-white  bg-gradient-to-br from-[#843BEC] to-[#C43AE5] hover:brightness-110"
        }`}
      >
        <span className="text-[#843BEC] text-base lg:text-lg">{icon}</span>
        {text}
      </button>
    );
  }

  return url[0] == "#" ? (
    <a href={url}>{buttonFun(text)}</a>
  ) : (
    <Link href={url}>{buttonFun(text)}</Link>
  );
}
