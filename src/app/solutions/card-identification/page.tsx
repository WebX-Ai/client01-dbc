import Image from "next/image";

import {
  faMicrochip,
  faBarcode,
  faServer,
  faPeopleCarryBox,
  faIdBadge,
  faCode,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const page = () => {
  const solutions = [
    {
      id: 1,
      name: "SCANSMART ID BADGE",
      icon: faIdBadge,
    },
    {
      id: 2,
      name: "SCANSMART INVENTORY",
      icon: faCode,
    },
    {
      id: 3,
      name: "SCANSMART ID CARD",
      icon: faIdCard,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={"/images/solutions/card-identification/Card-identification.jpg"}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-6">
          <h1 className="sm:text-4xl font-bold">
            INSTANTLY IDENTIFY YOUR EMPLOYEES, VISITORS, AND CUSTOMERS WITH OUR
            PROPRIETARY CARD ID SOLUTION.
          </h1>
          <div className="">
            <h1 className="sm:text-3xl font-medium border-primary pb-4">
              CARD IDENTIFICATION WITH SCANSMART ID
            </h1>
            <p className="sm:text-lg font-light">
              ID Cards with Built-in Technology Dream Big Corporation card
              identification delivers card-based solutions addressing issues
              relating to controlled access, visitor management, employee ID,
              time and attendance, healthcare visitor management, loyalty cards,
              membership cards, and student badging. Dream Big Corporation card
              solutions let you print customized, secure and cost-effective
              cards on demand. Cards can be printed in color or monochrome and
              can be encoded with multiple features like barcodes, magnetic
              stripes or radio frequency identification (RFID) to extend their
              use from highly secure employee IDs to gift card applications.
            </p>
          </div>
          <div className="">
            <h1 className="sm:text-3xl font-medium border-primary pb-4">
              Dream Big Corporation CARD IDENTIFICATION SOLUTIONS
            </h1>
            <p className="sm:text-lg font-light">
              We will work with you to configure, setup, and train your users on
              your new card identification system. Maintenance, supplies, and
              repair services are available by Dream Big Corporation specialists
              that are trained specifically on your model printer. Our card
              identification solutions include finding the right supplies for
              your business.
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex gap-5 sm:gap-10 w-full justify-center flex-wrap">
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
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="sm:text-3xl font-medium border-primary ">BENEFITS</h1>
              <ul className="list-disc ml-5">
                <li>
                  Scansmart ID is a customizable solution for your organization.
                  You decide which mobile device, card printer, service, and
                  accessories will work best for your needs.
                </li>
                <li>
                  Choose from a variety of mobile devices to add to your
                  solution in order to scan ID badges at varies points of entry.
                  If a workstation application is what you want, don&apos;t
                  worry, it comes standard with Scansmart ID.
                </li>
                <li>
                  In the event of an evacuation, Scansmart ID can be used
                  off-site to determine which scanned employees were in your
                  facility. This is a lifesaving resource for emergency
                  responders.
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-medium border-primary ">
                APPLICATIONS FOR SCANSMART ID
              </h1>
              <ul className="list-disc ml-5">
                <li>Control access to your facility</li>
                <li>
                  Confirm the identity of each person as they enter your
                  location
                </li>
                <li>
                  Remote access to the database allows you to view, access and
                  make changes through a secure Internet connection.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
