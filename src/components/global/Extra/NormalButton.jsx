import Link from "next/link";
import { motion } from "framer-motion";

export default function NormalButton({ item }) {
  function buttonFun(text) {
    return (
      <button className="bg-[#F1F5F9] hover:shadow-lg hover:brightness-105 hover:shadow-gray-50 text-black text-base cursor-pointer py-1 px-2 rounded-lg">
        {text}
      </button>
    );
  }

  return item.url[0] == "#" ? (
    <a href={item.url}>{buttonFun(item.text)}</a>
  ) : (
    <Link href={item.url}>{buttonFun(item.text)}</Link>
  );
}
