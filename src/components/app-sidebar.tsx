"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/icons/Logo.svg";
import Gear from "../../public/icons/Gear.svg";
import House from "./nav-icons/House";
import WhiteChat from "./nav-icons/WhiteChat";
import UsersFour from "./nav-icons/UsersFour";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/home",
    icon: House,
  },
  {
    title: "Chat",
    url: "#",
    icon: WhiteChat,
  },
  {
    title: "Users",
    url: "#",
    icon: UsersFour,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 min-w-[60px] flex h-screen flex-col justify-between bg-[#115E56]">
      <div>
        <div className="flex items-center justify-center h-[60px]">
          <Image src={Logo} height={32} width={32} alt="logo" />
        </div>

        <div className="w-full h-[1px] bg-gray-600 mb-3" />

        <div className="flex flex-col gap-4 items-center">
          {items.map(({ title, url, icon: Icon }) => {
            const isActive = pathname === url;

            return (
              <Link
                key={title}
                href={url}
                className={`flex items-center justify-center p-3 rounded ${
                  isActive ? "bg-white text-teal-700" : "text-white"
                } hover:bg-teal-400`}
              >
                <Icon
                  height={20}
                  width={20}
                  color={isActive ? "#115E56" : "#fff"}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center h-[60px]">
        <Link
          href="/settings"
          className={`flex items-center justify-center p-3 rounded ${
            pathname === "/settings" ? "bg-white text-teal-700" : "text-white"
          }`}
        >
          <Image src={Gear} height={20} width={20} alt="settings" />
        </Link>
      </div>
    </div>
  );
}
