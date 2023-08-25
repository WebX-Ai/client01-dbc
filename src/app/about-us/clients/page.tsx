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
import { products } from "@/data/data";
import { CLIENTS } from "@/data/clients";
const page = () => {
  return (
    <div className="">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={"/images/aboutus/clients/banner.jpeg"}
          alt="contact"
          fill
          className="object-contain"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-6">
          <h1 className="sm:text-4xl font-bold">
            WE WORK WITH SOME OF THE LARGEST COMPANIES IN THE WORLD.
          </h1>
          <div className="">
            <p className="sm:text-lg font-light">
              Dream Big Corporation works with clients in warehouse,
              transportation, logistics, and distribution center facilities
              nationwide for all types of industries from medium to large
              enterprises. We have been providing a range of products, services,
              and solutions for over 40 years. This is simply a sample of
              companies we work with on a regular basis.
            </p>
          </div>
          <div className="flex gap-4 w-full items-center justify-center ">
            <div className="flex items-center justify-center sm:w-3/4 gap-10 flex-wrap">
              {CLIENTS.map((link, index) => (
                <div
                  className="relative h-[60px] sm:h-[100px] sm:w-[140px] w-[120px] overflow-hidden "
                  key={index}
                >
                  <Image
                    src={link}
                    alt={"client"}
                    fill
                    className=" object-contain  "
                  />
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
