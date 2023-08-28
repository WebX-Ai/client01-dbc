import Image from "next/image";

import {
  faMicrochip,
  faBarcode,
  faServer,
  faPeopleCarryBox,
  faIdBadge,
  faCode,
  faIdCard,
  faPrint,
  faLaptop,
  faTicket,
  faBattery,
  faCheck,
  faForward,
  faGlobe,
  faMobile,
  faPowerOff,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const page = () => {
  const solutions = [
    {
      id: 1,
      name: "PROOF OF DELIVERY (POD)",
      icon: faCheck,
    },
    {
      id: 2,
      name: "PACKAGE TRACKING",
      icon: faForward,
    },
    {
      id: 3,
      name: "GLOBAL ASSET TRACKING",
      icon: faGlobe,
    },
  ];
  const products = [
    {
      id: 1,
      name: "MATERIAL MANAGEMENT",
      icon: "/images/solutions/rlts/material-circle.png",
      link: "/",
    },
    {
      id: 2,
      name: "INVENTORY TRACKING",
      icon: "/images/solutions/perosnal-tracking-solutions/inventory-tracking.png",
      link: "/",
    },
    {
      id: 3,
      name: "YARD MANAGEMENT",
      icon: "/images/solutions/perosnal-tracking-solutions/Yard-management.png",
      link: "/",
    },
    {
      id: 4,
      name: "PERSONNEL TRACKING",
      icon: "/images/solutions/rlts/personal-tracking.png",
      link: "/",
    },
    {
      id: 5,
      name: "PROXIMITY TRACKING",
      icon: "/images/solutions/rlts/proximity-tracking.png",
      link: "/",
    },
    {
      id: 5,
      name: "SPORT TRACKING",
      icon: "/images/solutions/rlts/RTLS-Sport.png",
      link: "/",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={"/images/solutions/rlts/banner.jpeg"}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-14">
          <div className="space-y-2">
            <h1 className="sm:text-4xl font-bold">IT&apos;S WORKING TIME</h1>
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-normal">
              DO YOU KNOW WHERE YOUR TOOLS ARE?
            </h1>
            <p className="sm:text-lg font-light">
              In the construction industry, it is essential to always have the
              right tools on hand to remain on schedule. But throughout daily
              operations, it is easy for your workers to misplace these tools,
              costing you time, money and resources.
              <br />
              Dream Big Corporation provides barcode and RFID tracking solutions
              and software that can address your company&apos;s needs and save you
              precious resources. We&apos;re all about making you better, so you can
              keep doing what you do best!
            </p>
          </div>
          <div className="space-y-5">
            <h1 className="sm:text-3xl font-normal">
              DO YOU KNOW WHERE YOUR TOOLS ARE?
            </h1>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-20">
              <div className="space-y-2">
                <h1 className="sm:text-2xl font-normal border-primary ">
                  RFID TOOL TRACKING
                </h1>
                <ul className="list-disc ml-5">
                  <li>
                    RFID Tags: Place these tags on tools you would like to
                    track.
                  </li>
                  <li>
                    RFID Readers: Mount these readers at designated site areas
                    to read the RFID tags.
                  </li>
                  <li>
                    RFID Antennas: Place these on your site to enable tag and
                    reader communication.
                  </li>
                  <li>
                    RFID Cables: Use these cables to enable communication
                    between the readers and antennas.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="sm:text-2xl font-normal border-primary ">
                  BARCODE TOOL TRACKING
                </h1>
                <ul className="list-disc ml-5">
                  <li>
                    Labels: Stick these labels on the tools you would like to
                    track.
                  </li>
                  <li>
                    Barcode scanners: These scanners will read data encoded in
                    each barcode.
                  </li>
                  <li>
                    Barcode Printers: Choose from top-of-the-line barcode
                    printers to meet your printing needs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-normal">TOOL TRACKING SOFTWARE</h1>
            <p className="sm:text-lg font-light">
              Whether you&apos;re looking to incorporate barcodes or want an RFID
              solution, we have the that can organize the data collected,
              providing full visibility of all tagged tools&apos; locations, repair
              history, and assigned employee.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-normal">
              HOW TOOL TRACKING CAN HELP YOU:
            </h1>
            <div className="">
              <div className="">
                <h2 className="text-xl font-black text-primary">
                  Save Time, Increase Productivity
                </h2>
                <p>
                  A tool tracking system allows employees to quickly locate lost
                  items, allowing them to stay on schedule and stay productive.
                </p>
              </div>
              <div className="">
                <h2 className="text-xl font-black text-primary">
                  Save Money, Reduce Theft
                </h2>
                <p>
                  Knowing what tools you have prevents duplicate purchases and
                  reduces the chance of your tools being stolen.
                </p>
              </div>
              <div className="">
                <h2 className="text-xl font-black text-primary">
                  Take Control
                </h2>
                <p>
                  A tool tracking system gives you full visibility of where your
                  tools are on the jobsite, reducing the time it takes for your
                  employees to locate them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
