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
  faTable,
  faSun,
  faCheck,
  faFile,
  faAmbulance,
  faCertificate,
  faStreetView,
  faUsers,
  faClipboard,
  faMobileAndroid,
  faCloudDownload,
  faTag,
  faTags,
  faUpload,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const page = () => {
  const solutions = [
    {
      id: 1,
      name: "STOCKROOM TECHNOLOGY",
      icon: faTable,
    },
    {
      id: 2,
      name: "SHIPMENT VERIFICATION",
      icon: faCheck,
    },
    {
      id: 3,
      name: "EMERGENCY MANAGEMENT & EVACUATION TRACKING",
      icon: faAmbulance,
    },
    {
      id: 4,
      name: "YARD MANAGEMENT",
      icon: faSun,
    },
    {
      id: 5,
      name: "DATA CENTER SOLUTIONS",
      icon: faFile,
    },
    {
      id: 6,
      name: "FORKLIFT SAFETY",
      icon: faCertificate,
    },
  ];
  const services = [
    {
      id: 1,
      name: "RFID SITE SURVEYS",
      icon: faStreetView,
      link: "/",
    },
    {
      id: 2,
      name: "SOLUTION ASSESSMENTS",
      icon: faClipboard,
      link: "/",
    },
    {
      id: 3,
      name: "CONFIGURATION & INSTALLATION",
      icon: faCloudDownload,
      link: "/",
    },
    {
      id: 4,
      name: "PROFESSIONAL SERVICES",
      icon: faUsers,
      link: "/",
    },
    {
      id: 5,
      name: "IOS, ANDROID, WINDOWS SOLUTIONS",
      icon: faMobileAndroid,
      link: "/",
    },
    {
      id: 6,
      name: "TAGGING SERVICES",
      icon: faTag,
      link: "/",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Fixed and Mobile Readers",
      icon: faMobile,
      link: "/",
    },
    {
      id: 2,
      name: "Tags",
      icon: faTags,
      link: "/",
    },
    {
      id: 3,
      name: "Sensors",
      icon: faMicrochip,
      link: "/",
    },
    {
      id: 4,
      name: "Printers",
      icon: faPrint,
      link: "/",
    },
    {
      id: 5,
      name: "Software",
      icon: faUpload,
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
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={"/images/solutions/rfid/banner.jpeg"}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-14">
          <div className="space-y-2">
            <h1 className="sm:text-4xl font-bold">
              ELEVATE YOUR SUPPLY CHAIN TO A WHOLE NEW FREQUENCY. RADIO
              FREQUENCY.
            </h1>
            <p className="sm:text-lg font-light">
              Dream Big Corporation works with large corporations and mid-size
              businesses that need systems in place to track and manage critical
              assets from the office, in the field, warehouse or distribution
              center, and throughout the entire supply chain process. Our RFID
              asset tracking systems and solutions include varying levels of
              technology and automation from a standalone system to fully
              interfaced/integrated system based on the complexities of your
              business.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-medium border-primary ">
              RFID SOLUTIONS
            </h1>
            <div className="flex gap-5 sm:gap-10 w-full justify-center sm:justify-start flex-wrap">
              {solutions.map(({ id, name, icon }) => (
                <div
                  className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-10 w-[300px] h-fit sm:h-[200px] text-primary"
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
              RFID SERVICES
            </h1>
            <div className="flex gap-5 sm:gap-10 w-full justify-center sm:justify-start flex-wrap">
              {services.map(({ id, name, icon, link }) => (
                <div
                  key={id}
                  className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-10 w-[300px] h-fit sm:h-[200px] text-primary"
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
              <li>Near 100% inventory accuracy</li>
              <li>Near 100% order and shipping accuracy</li>
              <li>Reduced out-of-stocks by up to 80%</li>
              <li>Reduced inventory carrying costs by up to 59%</li>
              <li>Reduced labor costs by as much as 30%</li>
              <li>Up to 40% faster order processing</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h1 className="sm:text-3xl font-medium border-primary">
              RFID PRODUCTS
            </h1>
            <p>
              Our solutions require many pieces working together and Dream Big
              Corporation has the knowledgeable professionals with the
              experience your business is looking for. We have the Tags,
              Printers, Encoders, Readers, and accessories to go with your
              current or future system.
            </p>
            <div className="flex gap-5 sm:gap-10 w-full justify-center sm:justify-start flex-wrap">
              {products.map(({ id, name, icon, link }) => (
                <div
                  key={id}
                  className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-10 w-[300px] h-[200px] text-primary"
                >
                  <FontAwesomeIcon icon={icon} size="3x" />
                  <h2 className="font-bold text-2xl ">{name}</h2>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
