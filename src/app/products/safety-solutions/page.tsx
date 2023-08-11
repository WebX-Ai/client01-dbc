import Image from "next/image";

import banner from "@/assets/Images/products/safety/safety-banner.jpg";
import tempDevice from "@/assets/Images/products/safety/Temperature-Screening.png";
import uvcDevice from "@/assets/Images/products/safety/UVC-device.png";
import automatedLocker from "@/assets/Images/products/safety/AssetTracer-Locker.png";
const page = () => {
  return (
    <div className="p-6 container m-auto space-y-6">
      <div className="relative h-[250px] w-full ">
        <Image src={banner} alt="contact" fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Keep your employees safe, keep business going.
        </h1>
        <p className="text-lg font-light">
          The safety of your employees is a high priority, especially these
          days. These devices are the tools that can help you maintain worker
          safety while getting back to the office, warehouse, or wherever you
          work.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-medium border-b border-primary pb-4">
          DEVICES SUPPORTING THE RETURN TO WORK
        </h1>
        <div className="flex space-x-20">
          <div className="space-y-2">
            <h2 className="font-medium">TEMPERATURE SCANNING</h2>
            <Image src={tempDevice} alt="" />
          </div>{" "}
          <div className="space-y-2">
            <h2 className="font-medium"> UV-C LIGHT</h2>
            <Image src={uvcDevice} alt="" />
          </div>{" "}
          <div className="space-y-2">
            <h2 className="font-medium"> AUTOMATED LOCKERS</h2>
            <Image src={automatedLocker} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
