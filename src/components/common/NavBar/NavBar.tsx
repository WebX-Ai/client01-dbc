"use client";
import MenuIcon from "@/assets/Icons/menu.svg";
import MenuCloseIcon from "@/assets/Icons/menu-close.svg";
import PhoneIcon from "@/assets/Icons/phone.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//assets
import Logo from "@/assets/Images/logo.png";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  return (
    <div className="w-full border-b-2 border-primary">
      <div className="relative w-full flex justify-between p-5 items-center  z-50 container m-auto">
        <Link href={"/"}>
          <div className="relative h-[45px] w-[150px] ">
            <Image src={Logo} alt="logo" fill className="object-contain" />
          </div>
        </Link>
        <div className="flex gap-3 sm:hidden">
          <PhoneIcon />
          {!toggle ? (
            <button onClick={() => setToggle(!toggle)}>
              <MenuIcon />
            </button>
          ) : (
            <button onClick={() => setToggle(!toggle)}>
              <MenuCloseIcon />
            </button>
          )}
        </div>
        <div className=" bg-white space-x-10 hidden sm:flex items-center ">
          <Link
            href={"/"}
            className={
              pathname == "/"
                ? "border-b-2 border-primary"
                : " border-b-2 border-transparent"
            }
          >
            Home
          </Link>
          <Link
            href={"/products"}
            className={
              pathname == "/products"
                ? "border-b-2 border-primary"
                : " border-b-2 border-transparent"
            }
          >
            Products
          </Link>
          <Link
            href={"/about-us"}
            className={
              pathname == "/about-us"
                ? "border-b-2 border-primary"
                : " border-b-2 border-transparent"
            }
          >
            About Us
          </Link>
          <Link
            href={"/contact-us"}
            className={
              pathname == "/contact-us"
                ? "border-b-2 border-primary"
                : " border-b-2 border-transparent"
            }
          >
            Contact
          </Link>
          <button className="bg-primary text-white px-4 py-2 rounded-md font-medium w-fit">
            Get in touch
          </button>
        </div>
        {toggle ? (
          <div
            className="absolute top-[86px] left-0 bg-white w-full flex flex-col p-6 space-y-5 shadow-2xl "
            onClick={() => setToggle(false)}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/products"}>Products</Link>
            <Link href={"/about-us"}>About Us</Link>
            <Link href={"/contact-us"}>Contact</Link>
            <button className="bg-primary text-white px-4 py-2 rounded-md font-medium w-fit">
              Get in touch
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
