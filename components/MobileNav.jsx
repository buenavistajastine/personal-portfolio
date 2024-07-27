"use client";

import { useState } from "react"; // Import useState
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to manage Sheet open/close

  const handleLinkClick = () => {
    // Delay closing the Sheet by 2 seconds (2000 milliseconds)
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center" onClick={() => setIsOpen(true)}>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Earl <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* navs */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleLinkClick} // Close the Sheet on link click
              className={`${
                link.path === pathname && "text-accent border-b-2 border-accent"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
