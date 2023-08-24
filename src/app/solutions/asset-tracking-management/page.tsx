import Image from "next/image";

import {
  faMicrochip,
  faBarcode,
  faServer,
  faPeopleCarryBox,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const page = () => {
  const solutions = [
    {
      id: 1,
      name: "BARCODE TRACKING",
      icon: faBarcode,
    },
    {
      id: 2,
      name: "RFID TRACKING",
      icon: faMicrochip,
    },
    {
      id: 3,
      name: "AUTOMATED LOCKER SYSTEMS",
      icon: faServer,
    },
  ];

  return (
    <div className="p-6 container m-auto space-y-6">
      <div className="relative h-[250px] w-full ">
        <Image
          src={
            "/images/solutions/asset-tracking-management/Asset-Tracking-Management-final.jpg"
          }
          alt="contact"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">
          NEVER LOSE SIGHT OF YOUR MOST VALUABLE ASSETS
        </h1>
        <p className="text-lg font-light">
          Dream Big Corporation provides Barcode and RFID Asset Tracking and Management
          Solutions to include software, hardware, supplies, service, and
          support based on the needs of your business. Dream Big Corporation works with large
          corporations and mid-size businesses that need systems in place to
          track and manage critical assets from the office, in the field,
          warehouse or distribution center, and throughout the entire supply
          chain process. Our asset tracking solutions include varying levels of
          technology and automation from a standalone system to fully
          interfaced/integrated system whether your business needs to track
          Barcodes and/or RFID tags.
        </p>
        <div className="space-y-5">
          <h1 className="text-3xl font-medium border-primary pb-4">
            SOLUTIONS FOR ASSET TRACKING & MANAGEMENT
          </h1>
          <div className="flex gap-10 w-full flex-wrap">
            {solutions.map(({ id, name, icon }) => (
              <div
                className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-10 w-[300px] h-[200px] text-primary"
                key={id}
              >
                <FontAwesomeIcon icon={icon} size="3x" />
                <h2 className="font-bold text-2xl ">{name}</h2>
              </div>
            ))}
          </div>{" "}
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-medium border-primary pb-4">BENEFITS</h1>
          <div className="flex space-x-10 text-lg">
            <ul className="list-disc ml-5">
              <li>Increased visibility into your business</li>
              <li>Informed decision making</li>
              <li>Planning for the future</li>
              <li>Better communication</li>
            </ul>
            <ul className="list-disc">
              <li>Improved record keeping</li>
              <li>Capturing knowledge of staff</li>
              <li>Overall increased business agility</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
