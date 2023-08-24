import Image from "next/image";

import banner from "@/assets/Images/products/barcode-printers/Barcode-printers-banner.jpeg";
import tempDevice from "@/assets/Images/products/safety/Temperature-Screening.png";
import uvcDevice from "@/assets/Images/products/safety/UVC-device.png";
import automatedLocker from "@/assets/Images/products/safety/AssetTracer-Locker.png";
const page = () => {
  const all_products = [
    {
      name: "ET8X",
      img: "/images/products/rugged-tablet/et80.png",
    },
    {
      name: "L10",
      img: "/images/products/rugged-tablet/l10.png",
    },
    {
      name: "ET5X",
      img: "/images/products/rugged-tablet/ET5x.png",
    },
    {
      name: "EDA71",
      img: "/images/products/rugged-tablet/EDA71.png",
    },
  ];
  return (
    <div className="p-6 container m-auto space-y-6">
      <div className="relative h-[250px] w-full ">
        <Image
          src={"/images/products/Batteries-Accessories-banners.jpeg"}
          alt="contact"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Expect the unexpected. Be prepared with spare batteries and
          performance-enhancing accessories
        </h1>
        <p className="text-lg font-light">
          Spare batteries, additional charging stations, charging cradles, belt
          clips, and other hands-free accessories are available from Dream Big Corporation ®.
        </p>
      </div>
    </div>
  );
};

export default page;
