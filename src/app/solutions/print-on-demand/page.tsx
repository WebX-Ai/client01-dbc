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
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const page = () => {
  const solutions = [
    {
      id: 1,
      name: "KIOSK PRINTERS",
      icon: faHandPointer,
    },
    {
      id: 2,
      name: "LABELSMART PRINT ON DEMAND",
      icon: faPrint,
    },
  ];
  return (
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={"/images/solutions/print-on-demand/banner.jpeg"}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-6">
          <h1 className="sm:text-4xl font-bold">
            PROFESSIONAL LABELS AT A FRACTION OF A COST? YES, PLEASE.
          </h1>
          <div className="">
            <p className="sm:text-lg font-light">
              Dream Big Corporation offers Print On Demand solutions for any
              type of business. Decrease your company’s footprint by only using
              the supplies you need when you need them, lessening your impact on
              the environment and lowering costs.
            </p>
          </div>
        </div>
        <div className="space-y-2">
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
      </div>
    </div>
  );
};

export default page;
