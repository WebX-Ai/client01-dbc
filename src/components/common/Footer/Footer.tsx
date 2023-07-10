"use client";
import Image from "next/image";
import Link from "next/link";

//assets
import FbIcon from "@/assets/Icons/facebook.svg";
import TwitterIcon from "@/assets/Icons/twitter.svg";
import LinkedinIcon from "@/assets/Icons/linkedin.svg";
import InstaIcon from "@/assets/Icons/instagram.svg";

//assets
import Logo from "@/assets/Images/logo.png";

const Footer = () => {
  return (
    <div className="p-6 bg-primary text-white flex flex-col sm:flex-row sm:justify-between gap-8 ">
      <div className="space-y-6">
        <div className="flex justify-between items-center sm:gap-5">
          <Link href={"/"}>
            <div className="relative h-[50px] w-[130px] ">
              <Image src={Logo} alt="logo" fill className="object-contain" />
            </div>
          </Link>
          <div className="flex gap-5">
            <Link href={""}>
              <FbIcon />
            </Link>
            <Link href={""}>
              <TwitterIcon />
            </Link>
            <Link href={""}>
              <LinkedinIcon />
            </Link>
            <Link href={""}>
              <InstaIcon />
            </Link>
          </div>
        </div>
        <p>Copyright 2022 Deam Big Corporation.</p>
      </div>
      <div className="space-y-5 sm:flex flex-col items-end">
        <p className="w-1/2 text-left sm:text-right">
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
        </p>
        <div className=" flex flex-col sm:flex-row gap-4">
          <Link href={"/"}>Cookie Policy</Link>
          <Link href={"/"}>Contact </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
