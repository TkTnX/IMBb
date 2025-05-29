"use client";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HEADER_NAV } from "@/constants/header.config";

export const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="xl:hidden  text-white flex items-center gap-1 md:px-4 md:py-1 rounded-md hover:bg-background-light-transparent-100 ">
          <Menu />
          <span className="hidden md:block">Menu</span>
        </button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="h-full container border-none overflow-y-auto"
      >
        <SheetHeader className="flex items-center flex-row justify-between w-full px-0">
          <Link href={"/"}>
            <Image
              src={"/images/icons/imbb.svg"}
              width={100}
              height={50}
              alt="logo"
            />
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="w-[50px] h-[50px] rounded-full bg-main-yellow flex items-center justify-center hover:opacity-80 transition"
          >
            <X color="#000" />
          </button>
        </SheetHeader>
        <SheetTitle />
        <nav className="grid grid-cols-2  sm:grid-cols-3 gap-10">
          {HEADER_NAV.map((item) => (
            <div className="flex-1" key={item.name}>
              <h6 className="text-white text-2xl font-semibold">{item.name}</h6>
              <ul className="flex flex-col gap-2 mt-2">
                {item.items.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
