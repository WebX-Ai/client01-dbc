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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faAngleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const Links = [
    { id: 1, name: "Home", path: "/", subLinks: [] },
    {
      id: 2,
      name: "solutions",
      path: "/#",
      subLinks: [
        {
          name: "ASSET TRACKING & MANAGEMENT",
          path: "/solutions/asset-tracking-management",
        },
        {
          name: "CARD IDENTIFICATION",
          path: "/solutions/card-identification",
        },
        {
          name: "INVENTORY TRACKING",
          path: "/solutions/inventory-tracking",
        },
        {
          name: "MOBILE WORKFORCE",
          path: "/solutions/mobile-workforce",
        },
        {
          name: "PERSONAL TRACKING",
          path: "/solutions/personal-tracking",
        },
        {
          name: "PRINT AND APPLY",
          path: "/solutions/print-apply",
        },
        {
          name: "PRINT ON DEMAND",
          path: "/solutions/print-on-demand",
        },
        {
          name: "RFID",
          path: "/solutions/rfid",
        },
        {
          name: "RTLS",
          path: "/solutions/rtls",
        },
        {
          name: "TOOL TRACKING",
          path: "/solutions/tool-tracking",
        },
      ],
    },
    {
      id: 3,
      name: "Products",
      path: "/#",
      subLinks: [
        { name: "SAFETY SOLUTIONS", path: "/products/safety-solutions" },
        {
          name: "LABELS & PRINTING SUPPLIES",
          path: "/products/labels-printing-supplies",
        },
        {
          name: "BARCODE PRINTERS",
          path: "/products/barcode-printers",
        },
        {
          name: "CARD PRINTERS",
          path: "/products/card-printers",
        },
        {
          name: "BARCODE SCANNERS",
          path: "/products/barcode-scanners",
        },
        {
          name: "RFID",
          path: "/products/rfid",
        },

        {
          name: "SOFTWARE",
          path: "/products/software",
        },
        {
          name: "RUGGED TABLET COMPUTERS",
          path: "/products/rugged-tablets",
        },
        {
          name: "MOBILE COMPUTERS & MOBILE DEVICES",
          path: "/products/mobile-computer-mobile-devices",
        },
        {
          name: "BATTERIES & ACCESSORIES",
          path: "/products/batteries-accessories",
        },
      ],
    },
    {
      id: 4,
      name: "About us",
      path: "/#",
      subLinks: [
        {
          name: "WHO-WE-ARE",
          path: "/about-us/who-we-are",
        },
        {
          name: "CLIENTS",
          path: "/about-us/clients",
        },
      ],
    },
    {
      id: 5,
      name: "Contact us",
      path: "/contact-us",
      subLinks: [],
    },
  ];
  return (
    <div className="relative z-40 container m-auto w-full pt-5 flex flex-col border-b-[1px] border-b-black/20">
      <div className="flex gap-2 text-sm sm:text-lg self-end pr-5 sm:pr-0">
        {" "}
        <p className="text-primary">CALL US TODAY!</p>{" "}
        <a
          href="tel:+91 9967489992"
          className="hover:underline text-red-600 font-bold"
        >
          +91 9967489992
        </a>
        /{" "}
        <a
          href="tel:+91 9527376669"
          className="hover:underline text-red-600 font-bold"
        >
          +91 9527376669
        </a>
      </div>
      <div className="relative flex justify-between  items-center p-5 sm:p-0">
        <Link href={"/"} className="sm:pb-5 ">
          <div className="relative  h-[50px] sm:h-[75px] w-[200px] ">
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
        <div className="h-[88px] bg-white space-x-10 hidden sm:flex items-center text-gray-500 ">
          {Links.map(({ id, name, path, subLinks }) => (
            <Link
              key={id}
              href={path}
              className={`flex justify-center items-center h-full relative group  uppercase`}
            >
              <p
                className={
                  pathname == path
                    ? "border-b-2 border-primary"
                    : " border-b-2 border-transparent"
                }
              >
                {name}
              </p>
              {subLinks.length > 0 && (
                <div className="text-white backdrop-blur-sm bg-gray-900/80 hidden group-hover:flex flex-col absolute top-[90px] left-0 w-[200px] gap-3 p-4 shadow-lg font-normal text-sm">
                  {subLinks.map(({ path, name }) => (
                    <Link href={path} key={path} className=" hover:underline">
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {toggle ? (
          <div
            className="absolute top-[86px] left-0 bg-white w-full flex flex-col p-6  shadow-2xl "
            onClick={() => setToggle(false)}
          >
            {Links.map(({ id, name, path, subLinks }) => (
              <Collapseable key={id} title={name} subLinks={subLinks} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;

const Collapseable = ({
  title,
  subLinks,
}: {
  subLinks: {
    name: string;
    path: string;
  }[];
  title: string;
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" w-full uppercase text-base text-primary">
      {subLinks.length == 0 ? (
        <Link href={"/"}>
          <div className="border-b border-b-gray-400 py-4 w-full">{title}</div>
        </Link>
      ) : (
        <div
          className="flex justify-between border-b border-b-gray-400 items-center py-4"
          onClick={(e) => {
            e.stopPropagation();
            setToggle(!toggle);
          }}
        >
          <div className="">{title}</div>
          <div className="">
            <FontAwesomeIcon icon={toggle ? faAngleDown : faAngleRight} />
          </div>
        </div>
      )}
      {toggle && (
        <div className="pl-6 w-full">
          {subLinks.map(({ name, path }, index) => (
            <Link href={path} key={index}>
              <div className="py-4 border-b border-b-gray-400 w-full">
                {name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
