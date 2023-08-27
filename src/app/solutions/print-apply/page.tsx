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
          src={"/images/solutions/print-apply/banner.jpeg"}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-6">
          <h1 className="sm:text-4xl font-bold">
            ACCURACY AND QUALITY THAT ELIMINATES ERRORS AND DOWNTIME.
          </h1>
          <div className="">
            <p className="sm:text-lg font-light">
              Automated labeling solutions that improve accuracy and physical
              placement while eliminating, errors, costs, and downtime. Print
              and apply solutions can ensure consistency with the positioning of
              all labels. Regulatory and customer requirements are maintained
              with a high-level of certainty to reduce chargebacks and overall
              costs.
            </p>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="sm:text-3xl font-medium border-primary ">BENEFITS</h1>
              <ul className="list-disc ml-5">
                <li>
                  Compliance and Regulatory Standards met with consistency
                </li>
                <li>Tracking within the manufacturing facility</li>
                <li>Throughput is faster and errors are reduced</li>
                <li>Branding with high-quality labels</li>
                <li>
                  Productivity increases with printing as needed and not
                  in-advance
                </li>
                <li>Reduction of costs by preventing chargebacks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
