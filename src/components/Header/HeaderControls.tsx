import { HEADER_CONTROLS } from "@/constants/header.config";
import Image from "next/image";
import Link from "next/link";

export const HeaderControls = () => {
  return (
    <div className="flex items-center gap-7">
      {HEADER_CONTROLS.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-1 hover:opacity-80 transition first:hidden md:first:flex"
        >
          <Image src={item.img} width={24} height={24} alt={item.name} />
          <span className="self-end">{item.name}</span>
        </Link>
      ))}
    </div>
  );
};
