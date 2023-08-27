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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const page = () => {
  const solutions = [
    {
      id: 1,
      name: "BARCODE TRACKING",
      icon: faIdBadge,
    },
    {
      id: 2,
      name: "RFID TRACKING",
      icon: faCode,
    },
    {
      id: 3,
      name: "VOICE-ENABLED",
      icon: faIdCard,
    },
  ];
  const products = [
    {
      id: 1,
      name: "Barcode Scanners",
      icon: faBarcode,
      link: "/",
    },
    {
      id: 2,
      name: "Printers",
      icon: faPrint,
      link: "/",
    },
    {
      id: 3,
      name: "Labels & Printing Supplies",
      icon: faTicket,
      link: "/",
    },
    {
      id: 4,
      name: "RFID",
      icon: faMicrochip,
      link: "/",
    },
    {
      id: 5,
      name: "Mobile Computers & Rugged Devices",
      icon: faLaptop,
      link: "/",
    },
    {
      id: 6,
      name: "Accessories",
      icon: faBattery,
      link: "/",
    },
  ];
  return (
    <div className="">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={
            "/images/solutions/inventory-tracking/Inventory-Tracking-Management-Final.jpg"
          }
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-14">
          <div className="space-y-2">
            <h1 className="sm:text-4xl font-bold">
              WHEN THE COST OF LOSING YOUR STUFF IS HURTING THE BOTTOM LINE OUR
              INVENTORY TRACKING & MANAGEMENT SOLUTIONS CAN SAVE YOU A TON
            </h1>
            <p className="sm:text-lg font-light">
              You&apos;ll find valuable information on all of the best tools,
              software, hardware, services, and solutions your business needs to
              be successful in managing and tracking inventory. We provide
              inventory management solutions with barcode and RFID technology
              using devices from corded to wireless, fixed mounted to mobile,
              and rugged for extreme environments. Dream Big Corporation offers
              free assessments to take a look at your entire business workflow
              to uncover your specific needs. Our products and services include
              everything from assessments and recommendations to development,
              configuration, installation, implementation, monitoring,
              management, and technical training, repair, and support. From
              picking/staging, put-away, to cross docking and returns our
              inventory management solutions can address any process challenge
              your business may be facing. We have the hardware, software, and
              supplies available as your go-to integrator and solution provider
              for all of your inventory management needs.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-medium border-primary ">
              SOLUTIONS FOR INVENTORY TRACKING & MANAGEMENT
            </h1>
            <div className="flex gap-5 sm:gap-10 w-full justify-center sm:justify-start flex-wrap">
              {solutions.map(({ id, name, icon }) => (
                <div
                  className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-10 w-[300px] f-fit sm:h-[200px] text-primary"
                  key={id}
                >
                  <FontAwesomeIcon icon={icon} size="3x" />
                  <h2 className="font-bold text-2xl ">{name}</h2>
                </div>
              ))}
            </div>{" "}
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-medium border-primary ">
              BENEFITS
            </h1>
            <ul className="list-disc ml-5">
              <li>Optimized inventory accuracy</li>
              <li>Increase in efficiency and productivity</li>
              <li>Time and cost savings</li>
              <li>Improvements in customer satisfaction</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-medium border-primary">PRODUCTS</h1>
            <div className="flex gap-5 sm:gap-10 w-full justify-center sm:justify-start flex-wrap">
              {products.map(({ id, name, icon, link }) => (
                <Link href={link} key={id}>
                  <div className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-10 w-[300px] h-fit sm:h-[200px] text-primary">
                    <FontAwesomeIcon icon={icon} size="3x" />
                    <h2 className="font-bold text-2xl ">{name}</h2>
                  </div>
                </Link>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
