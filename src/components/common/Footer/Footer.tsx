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
    <div className=" bg-primary w-full">
      <div className="container m-auto p-6  text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-8 ">
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-5">
            <Link href={"/"} className="w-fit h-fit">
              <div className="relative h-[50px] w-[130px]  ">
                <Image src={Logo} alt="logo" fill className="object-contain" />
              </div>
            </Link>
            <div className="flex gap-5">
              <Link
                href={""}
                className="hover:bg-white hover:text-primary transition-all ease-in p-3 rounded-full"
              >
                <FbIcon />
              </Link>
              <Link
                href={""}
                className="hover:bg-white hover:text-primary transition-all ease-in p-3 rounded-full"
              >
                <TwitterIcon />
              </Link>
              <Link
                href={""}
                className="hover:bg-white hover:text-primary transition-all ease-in p-3 rounded-full"
              >
                <LinkedinIcon />
              </Link>
              <Link
                href={""}
                className="hover:bg-white hover:text-primary transition-all ease-in p-3 rounded-full"
              >
                <InstaIcon />
              </Link>
            </div>
          </div>
          <p>© Copyright 2022 Deam Big Corporation.</p>
        </div>
        <div className="space-y-5 sm:space-y-2 sm:flex flex-col items-end">
          <p className="w-full text-left sm:text-right">
            <span className="font-bold text-lg">Corporate Office Address</span>
            <br />
            Ground Floor Hari Om Building,
            <br />
            Opp.Kalyan Bhiwandi Road, Water Supply Road,
            <br /> Kon-Bhiwandi, Kalyan West Dist.Thane,
            <br /> Mumbai - 421311
          </p>
          <div className="">
            <a href="tel:+91 9967489992" className="hover:underline">
              +91 9967489992
            </a>{" "}
            /{" "}
            <a href="tel:+91 9527376669" className="hover:underline">
              +91 9527376669
            </a>{" "}
            /{" "}
            <a href="tel:+91 9657777948" className="hover:underline">
              +91 9657777948
            </a>
          </div>
          <div className=" flex flex-col sm:flex-row gap-4  text-lg">
            <Link href={"/contact-us"} className="hover:underline">
              About us
            </Link>
            <Link href={"/contact-us"} className="hover:underline">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
