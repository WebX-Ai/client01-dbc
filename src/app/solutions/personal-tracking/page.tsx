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
      name: "ASSET TRACKING",
      icon: "/images/solutions/perosnal-tracking-solutions/asset-tracking.png",
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
      name: "SHIPMENT VERIFICATION",
      icon: "/images/solutions/perosnal-tracking-solutions/Shipping-verification.png",
      link: "/",
    },
    {
      id: 5,
      name: "DATA CENTERS",
      icon: "/images/solutions/perosnal-tracking-solutions/data-centers.png",
      link: "/",
    },
  ];
  return (
    <div className="p-6 container m-auto space-y-6">
      <div className="relative h-[250px] w-full ">
        <Image
          src={"/images/solutions/perosnal-tracking-solutions/banner.png"}
          alt="contact"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-14">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">
            Dream Big Corporation PERSONNEL TRACKING SOLUTIONS
          </h1>
          <p className="text-lg font-light">
            Whether you’re a mid-size business or a national corporation, you
            share the same goal: ensuring the safety and security of your
            employees. Over the years, Dream Big Corporation ®’s RFID solutions for personnel
            tracking have provided numerous benefits for companies looking to
            increase the safety of their facility, monitor employee
            productivity, and design emergency preparedness procedures in the
            event of an incident. Additionally, our tracking solutions help
            event planners and sports venues with RFID personnel tracking to
            create a unique experience for attendees.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-normal">
            EMPLOYEE AND ASSET PRODUCTIVITY
          </h1>
          <p className="text-lg font-light">
            With Dream Big Corporation ®’s RFID personnel tracking solutions, you can manage
            employee productivity with ease. By using RFID employee ID cards,
            you can easily track when your employees start and end their shift,
            eliminating the need for time clocks. What’s more, RFID can be used
            for employee and asset tracking using solutions like automated
            locker systems. These help track when and where equipment is being
            used.
            <br />
            Unlike GPS tracking, which can track items via global positioning,
            RFID is only effective when tags are in range of RFID readers. This
            means that personnel, employees or event attendees will not be
            tracked with this technology once they leave the RFID-enabled area.
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-normal">
            MUSTERING: RFID FOR EMERGENCY SITUATIONS
          </h1>
          <p className="text-lg font-light">
            In the unlikely event of a workplace emergency, we understand that
            the safety and security of your employees is your top priority. RFID
            mustering can be a life-saving technology, allowing you to locate
            personnel during an emergency. In a typical scenario, employees exit
            your facility and meet at a mustering location. A fixed RFID reader
            is installed at the location, confirming who has safely left the
            building. Emergency personnel can use this system in real-time to
            determine which employees have exited, and which ones may still be
            in the building.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-normal">
            EVENTS AND SPECIAL OCCASIONS{" "}
          </h1>
          <p className="text-lg font-light">
            Our RFID personnel tracking goes beyond the workplace by providing
            solutions for sporting events, concerts, and corporate shows. If
            you’ve ever attended an event, you likely received an event badge or
            ID that you still hang on to. With our solutions and the enhanced
            ZC10L Card Printer with RFID, ID badges serve multiple purposes. For
            event organizers, they become a strategic tool. These enable the
            ability to track attendees throughout an event to identify high
            traffic areas, popular breakout sessions etc. For the attendees,
            they serve the standard identification purpose, but also become a
            keepsake post-event.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-medium border-primary">
            DID YOU KNOW? RFID CAN ALSO BE USED FOR…
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
