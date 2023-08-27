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
      name: "Rugged Devices",
      icon: faMobile,
      link: "/",
    },
    {
      id: 2,
      name: "Mobile Computers",
      icon: faPowerOff,
      link: "/",
    },
    {
      id: 3,
      name: "Mobile Printers",
      icon: faPrint,
      link: "/",
    },
    {
      id: 4,
      name: "Scanners",
      icon: faBarcode,
      link: "/",
    },
    {
      id: 5,
      name: "Supplies",
      icon: faShoppingCart,
      link: "/",
    },
    {
      id: 6,
      name: "Batteries",
      icon: faBattery,
      link: "/",
    },
  ];
  return (
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={"/images/solutions/mobile-workforce/banner.jpeg"}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-14">
          <div className="space-y-2">
            <h1 className="sm:text-4xl font-bold">
              MOVE YOUR ORGANIZATION WITH BETTER EQUIPMENT AND MOBILITY
              SOLUTIONS.
            </h1>
            <p className="sm:text-lg font-light">
              Our mobile solutions will keep your employees productive and
              on-the-go. Your workforce needs the right tools that will lead
              your business to an increase in performance and improvements on
              your bottom line no matter where they are working.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-medium border-primary ">
              SOLUTIONS FOR A MOBILE WORKFORCE
            </h1>
            <div className="flex gap-5 sm:gap-10 w-full sm:justify-start justify-center flex-wrap">
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
            <h1 className="sm:text-3xl font-medium border-primary">
              MOBILITY PRODUCTS FOR THE MOBILE WORKFORCE
            </h1>
            <div className="flex gap-5 sm:gap-10 w-full sm:justify-start justify-center flex-wrap">
              {products.map(({ id, name, icon, link }) => (
                <Link href={link} key={id}>
                  <div className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-10 w-[300px] h-[200px] text-primary">
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
