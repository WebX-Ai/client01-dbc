import Image from "next/image";

import banner from "@/assets/Images/products/barcode-printers/Barcode-printers-banner.jpeg";
import tempDevice from "@/assets/Images/products/safety/Temperature-Screening.png";
import uvcDevice from "@/assets/Images/products/safety/UVC-device.png";
import automatedLocker from "@/assets/Images/products/safety/AssetTracer-Locker.png";
const page = () => {
  const all_products = [
    {
      name: "ZC10L",
      img: "/images/products/card-printers/ZC10L-150x150.png",
    },
    {
      name: "ZC10L-PRO (RFID)",
      img: "/images/products/card-printers/ZC10L-rfid-150x150.png",
    },
    {
      name: "ZXP SERIES 9",
      img: "/images/products/card-printers/ZXP-series-9-150x150.png",
    },
    {
      name: "ZXP SERIES 7",
      img: "/images/products/card-printers/ZXP-series-7-150x150.png",
    },
    {
      name: "ZXP SERIES 3",
      img: "/images/products/card-printers/ZXP-series-3-150x150.png",
    },
    {
      name: "ZXP SERIES 1",
      img: "/images/products/card-printers/ZXP-series-3-150x150.png",
    },
  ];
  return (
    <div className="p-6 container m-auto space-y-6">
      <div className="relative h-[250px] w-full ">
        <Image
          src={"/images/products/card-printers/card-printer-banner.jpeg"}
          alt="contact"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Cards for safety, access control, and identification start with a
          quality card printer
        </h1>
        <p className="text-lg font-light">
          In addition to improved quality and security, card printers help to
          lower costs and lead to better customer service. Choose from full
          color or monochrome printers. Options range from Ethernet
          connectivity, smart card, and magnetic stripe encoding, to lamination
          for higher security and card durability. There is a printer to meet
          all your business needs and we can help you find the right one; from
          payment cards to driver&apos;s licenses, membership cards to employee
          identification badges, gift cards to ski pass IDs, and much more.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-medium border-b border-primary pb-4">
          CARD PRINTERS
        </h1>
        <div className="space-y-20">
          <div className="flex items-center gap-20 w-full flex-wrap">
            {all_products.map((pro, index) => (
              <div className="space-y-2" key={index}>
                    <h2 className="font-medium text-lg">{pro.name}</h2>
                <Image src={pro.img} alt="" width={150} height={150} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
