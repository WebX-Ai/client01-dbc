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
          src={
            "/images/products/rugged-tablet/Rugged-Tablet-Computers.jpg"
          }
          alt="contact"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Get the job done with the right equipment
        </h1>
        <p className="text-lg font-light">
          AB&R® partners with the best hardware providers to bring you the
          highest quality products. Rugged Tablet Computers from AB&R® include
          Android and Windows OS. Screen and memory size on these tablets are
          enterprise-grade with tested ruggedness for those harsh environments.
          To Learn More click on the model information of the products below. If
          you have questions on products, click on the contact us tab.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-20">
          <div className="flex items gap-20 w-full flex-wrap">
            {all_products.map((pro, index) => (
              <div className="space-y-2" key={index}>
                    <h2 className="font-medium text-lg">{pro.name}</h2>
                <Image src={pro.img} alt="" width={200} height={150} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
