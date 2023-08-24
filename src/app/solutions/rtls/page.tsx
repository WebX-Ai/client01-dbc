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
    <div className="p-6 container m-auto space-y-6">
      <div className="relative h-[250px] w-full ">
        <Image
          src={"/images/solutions/rlts/banner.jpeg"}
          alt="contact"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-14">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">
            The Important Things Can’t Wait{" "}
          </h1>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-normal">
            WITH RTLS THEY DON’T HAVE TO.
          </h1>
          <p className="text-lg font-light">
            When you can track everything and immediately put insights derived
            from real-time data to work, you can accomplish anything. RTLS
            enables you to put that into practice, whether it be for your
            assets, yard, materials, or personnel.
            <br />
            By pinpointing asset location, status and motion, you can increase
            control, minimize downtime and maximize performance. By having
            visibility to goods, you can streamline workflows, ensure
            replenishment and expedite shipping. And by monitoring your
            workforce, you can better ensure safety, increase connectivity and
            enhance compliance processes.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-normal">WHAT IS RTLS?</h1>
          <p className="text-lg font-light">
            Real-time locating systems (RTLS) are used to automatically identify
            and track the location of objects or people in real time within a
            defined area, allowing you to manage the flow of things through your
            business. With the use of RFID technology, the system and tracked
            item communicate in real time, or near real time, to provide you
            exceptional visibility.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-medium border-primary">
            DID YOU KNOW? RTLS CAN BE USED FOR…
          </h1>
          <div className="flex gap-10 w-full flex-wrap">
            {products.map(({ id, name, icon, link }) => (
              <Link href={link} key={id}>
                <div className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-10 w-[300px] h-[200px] text-primary">
                  <Image src={icon} height={100} width={100} alt="img" />
                  <h2 className="font-bold text-2xl ">{name}</h2>
                </div>
              </Link>
            ))}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
