import Button from "@/components/common/Button/Button";
import Image from "next/image";

//assets
import HeroImage from "@/assets/Images/hero.jpeg";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import Link from "next/link";
import { products } from "@/data/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faPrint,
  faCloudDownload,
  faMobileAndroid,
} from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const solutions = [
    {
      id: 1,
      name: "ASSET MANAGEMENT & TRACKING",
      icon: faCog,
    },
    {
      id: 2,
      name: "PRINTING & LABELING",
      icon: faPrint,
    },
    {
      id: 3,
      name: "CONFIGURATION & DEVELOPMENT",
      icon: faCloudDownload,
    },
    {
      id: 4,
      name: "MIGRATION & LIFECYCLE MANAGEMENT",
      icon: faMobileAndroid,
    },
  ];
  return (
    <div>
      <div className="w-full bg-secondary/10 h-[700px] relative">
        <div className="absolute h-full w-full">
          <div className="relative h-full w-full">
            <Image src={HeroImage} alt="hero" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute w-1/2 right-0 top-1/2 ">
          <p className="absolute bg-black/50 text-white p-4 text-lg">
            Serving businesses from across all industries with advanced
            technology to identify, track, and manage inventory and assets
            throughout the supply chain. These solutions include product
            identification with high-performance printing and compliance
            labeling, health and safety through real-time visibility and
            traceability, and managing all solutions from preventative
            maintenance to software support.
          </p>
        </div>
      </div>
      {/* product section */}
      <div className="px-6 py-10 space-y-8 w-full">
        <h1 className="text-primary text-center text-2xl font-normal">
          SUCCESSFULL <span className="font-bold">SOLUTIONS </span>
        </h1>{" "}
        <div className="flex items-center justify-center gap-10 w-full flex-wrap">
          {solutions.map(({ id, name, icon }) => (
            <div
              className="flex flex-col items-center justify-center text-center space-y-5 hover:shadow-lg rounded-lg p-5 h-[250px] w-[250px] text-primary"
              key={id}
            >
              <FontAwesomeIcon icon={icon} size="3x" />
              <h2 className="font-bold text-2xl ">{name}</h2>
            </div>
          ))}
        </div>
      </div>
      {/* Brands we trust */}
      <div className="p-6 w-full space-y-4">
        <h1 className="text-primary text-center text-2xl font-normal">
          BRANDS <span className="font-bold">WE TRUST </span>
        </h1>
        <div className="flex gap-4 w-full items-center justify-center ">
          <div className="flex items-center justify-center sm:w-9/12 gap-5 flex-wrap">
            {products.map(({ id, product_name, thumbnail }, index) => (
              <div
                className="relative h-[60px] sm:h-[80px] sm:w-[130px] w-[100px] overflow-hidden "
                key={index}
              >
                <Image
                  src={thumbnail}
                  alt={product_name}
                  fill
                  className=" object-contain  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
