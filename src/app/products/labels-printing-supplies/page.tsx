import Image from "next/image";
import banner from "@/assets/Images/products/printing-supplies/Labels-Printing-Supplies.jpg";

import {
  faBookmark,
  faFileText,
  faFileAlt,
  faExclamationTriangle,
  faGears,
  faBuilding,
  faEyeDropper,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const page = () => {
  const solutions = [
    {
      id: 1,
      name: "BLANK LABELS",
      icon: faBookmark,
    },
    {
      id: 2,
      name: "PRE-PRINTED LABELS",
      icon: faFileText,
    },
    {
      id: 3,
      name: "CUSTOM PRE-PRINTED LABELS",
      icon: faFileAlt,
    },
    {
      id: 4,
      name: "COMPLIANCE LABELS",
      icon: faExclamationTriangle,
    },
  ];
  const industries = [
    {
      id: 1,
      name: "Manufacturing",
      icon: faGears,
    },
    {
      id: 2,
      name: "Distribution",
      icon: faBuilding,
    },
    {
      id: 3,
      name: "Healthcare",
      icon: faHeartbeat,
    },
    {
      id: 4,
      name: "Laboratory",
      icon: faEyeDropper,
    },
  ];
  return (
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={banner}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-6">
          <h1 className="sm:text-4xl font-bold">
            CUSTOM LABELS AND PRINTING SOLUTIONS TO FIT ANY APPLICATION YOU
            COULD IMAGINE.
          </h1>
          <p className="sm:text-lg font-light">
            Equipment and asset accountability/tracking can be maintained
            utilizing a high quality, durable barcode label. Keeping track of
            company assets such as machinery, office equipment, furniture,
            fixtures, tooling, and vehicles is a high priority in today&apos;s
            high tech environment. We offer blank, pre-printed, and custom
            labels along with additional media supplies and accessories. With
            labeling solutions to fit any requirement large or small, our
            in-house team of label specialists can assist you in selecting the
            materials, adhesives, and barcode/rfid technology you&apos;re
            looking for. Additionally, we can even provide assessments, setup,
            installation, and management services.
          </p>
          <div className="flex gap-10 w-full justify-center sm:justify-start flex-wrap">
            {solutions.map(({ id, name, icon }) => (
              <div
                className="flex items-center justify-center text-center space-x-5 hover:shadow-lg rounded-lg p-5 h-fit w-[300px] text-primary"
                key={id}
              >
                <FontAwesomeIcon icon={icon} size="3x" />
                <h2 className="font-bold text-2xl ">{name}</h2>
              </div>
            ))}
          </div>{" "}
          <div className="space-y-4">
            <h1 className="sm:text-3xl font-medium border-primary pb-4">
              LABEL SOLUTIONS FOR ANY INDUSTRY
            </h1>
            <div className="flex gap-5 sm:gap-10 w-full justify-center sm:justify-start flex-wrap">
              {industries.map(({ id, name, icon }) => (
                <div
                  className="flex items-center  space-x-5 hover:shadow-lg rounded-lg p-5 h-fit w-[600px] text-primary hover:text-white hover:bg-primary group"
                  key={id}
                >
                  <FontAwesomeIcon icon={icon} size="3x" />
                  <h2 className="font-bold text-2xl group-hover:text-white">
                    {name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
