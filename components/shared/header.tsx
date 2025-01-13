import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// TODO: add moobile menu
const Header = () => {
  return (
    <div className="bg-[#05071acc] sticky top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <nav className="h[119px] py-8 flex items-center justify-between max-w-screen-xl mx-auto md:px-6 sm:px-4 sm:justify-around ">
        {/* logo */}
        <Link href={"/"}>
          <div>
            <Image
              src={"/assets/logo.svg"}
              alt="logo"
              width={203}
              height={57}
            />
          </div>
        </Link>

        {/* nav links */}
        <div className="sm:hidden">
          <ul className="flex items-center gap-[33px] text-body-16 text-neutral-2 font-sora text-center">
            {NAV_LINKS.map((link, key) => (
              <li key={key}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* contact us button */}
        <div className="sm:hidden">
          <button className="bg-custom-gradient px-6 py-4 rounded-xl border border-[#9ea3bf40] font-medium accent-neutral-1 md:px-4 md:py-2">
            Get Template for Free
          </button>
        </div>

        {/* mobile menu */}
        <div className="hidden sm:block">
          <Menu height={40} width={40} />
        </div>
      </nav>
    </div>
  );
};

export default Header;
