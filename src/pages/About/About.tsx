"use client";
import Image from "next/image";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

//assets
import Logo from "@/assets/Images/logo.png";
import { useContext, useState } from "react";
import { products } from "@/data/data";

const About = () => {
  //   const [products, setProducts] = useState();
  return (
    <div className="space-y-5 flex flex-col items-center pt-6 font-normal text-sm">
      <h1 className="text-center">About Us</h1>
      <div className="sm:flex sm:gap-5 px-6 w-full">
        <div className="hidden sm:block space-y-2">
          <p>
            We, at DBC, started our journey with the only mission to provide
            customer delight by understanding the customer specific
            requirements, designing & developing solutions and giving best
            possible products and services in industry to reduce cost and
            increase profitability and at the same time generating value and
            profit to the stakeholder. Our vision includes providing quality
            which is second to none and that too, at lowest possible price to
            earn value in deal.
          </p>
          <p>
            With such clear vision and mission, DBC is managed by professionals
            with more than 12 years of experience in AIDC (Barcode/RFid)
            industry and provided innovative customized solution to the industry
            verticals like PHARMACEUTICALS, LOGISTICS, GARMENTS, FOOD &
            BEVERAGES HOSPITALITY, ENTERTAINMENT and ELECTRICAL IRON STEEL,
            CHEMICAL AND SO ON.
          </p>
        </div>
        <div className="h-[150px] sm:h-[100px] w-10/12 sm:w-[800px]  relative">
          <Image src={Logo} alt="logo" fill className="object-contain" />
        </div>
      </div>
      <div className=" space-y-2 px-6">
        <p className="block sm:hidden">
          We, at DBC, started our journey with the only mission to provide
          customer delight by understanding the customer specific requirements,
          designing & developing solutions and giving best possible products and
          services in industry to reduce cost and increase profitability and at
          the same time generating value and profit to the stakeholder. Our
          vision includes providing quality which is second to none and that
          too, at lowest possible price to earn value in deal.
        </p>
        <p className="sm:hidden">
          With such clear vision and mission, DBC is managed by professionals
          with more than 12 years of experience in AIDC (Barcode/RFid) industry
          and provided innovative customized solution to the industry verticals
          like PHARMACEUTICALS, LOGISTICS, GARMENTS, FOOD & BEVERAGES
          HOSPITALITY, ENTERTAINMENT and ELECTRICAL IRON STEEL, CHEMICAL AND SO
          ON.
        </p>
        <p>
          We are committed to provide one window solution for all your Barcode
          Project / IT project requirement and provide entire range of products
          from our principles like TSC / ZEBRA / HONEYWELL
          /CITIZEN/LENOVO/DELL/HP/ZEBRONICS/CISCO / SATO / ARGOX / COGNEX/GODEX
          and so on which includes entire range of Barcode readers, fixed
          mount/un attended scanners, Presentation, Flatbed Scanners, Batch &
          wireless (RF) Portable Data Terminals/Hand Held Computers, Direct
          Thermal, Thermal Transfer, Portable Barcode & RFiD printers and
          wireless infrastructure products,Laptop,Desktop and All accessories.
        </p>
        <p>
          We deal with wide variety of consumables (Labels & ribbons) of various
          sizes & shapes with the required quality of glue to suit the
          application requirement. Ribbons of Rico, Inkanto & Armor brand are
          provided to get quality print & safe guarding the print head life of
          the printer.
        </p>
        <p>
          We are committed to provide unmatched quality support for after sale
          service and have a round the clock helps lines to ensure that your
          production is not hampered. Onsite/ offsite support is available by
          technically sound professional having experience of more than 18 years
          with in the industry and with the products.
        </p>

        <p>
          Once again thank you for the opportunity give to us to associate with
          you.
        </p>
      </div>
      <div className="bg-secondary p-6 space-y-16 w-full">
        <div className="space-y-4">
          <h2 className="text-white text-center">
            For Mobile Computing, Data Capture, RFID & Thermal Printers.
          </h2>
          <div className="flex gap-4 w-full items-center justify-center ">
            <div className="flex items-center justify-center w-9/12 gap-5 flex-wrap">
              {products.slice(0, 4).map(({ id, product_name, thumbnail }) => (
                <div
                  className="relative h-[100px] w-[200px] overflow-hidden "
                  key={id}
                >
                  <Image
                    src={thumbnail}
                    alt="product"
                    fill
                    className=" object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-center">
            For Barcode Designing Software{" "}
          </h2>
          <div className="flex gap-4 w-full items-center justify-center ">
            <div className="flex items-center justify-center w-9/12 gap-5 flex-wrap">
            {products.slice(0, 4).map(({ id, product_name, thumbnail }) => (
                <div
                  className="relative h-[100px] w-[200px] overflow-hidden "
                  key={id}
                >
                  <Image
                    src={thumbnail}
                    alt="product"
                    fill
                    className=" object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-white text-center">For Consumables </h2>
          <div className="flex gap-4 w-full items-center justify-center ">
            <div className="flex items-center justify-center w-9/12 gap-5 flex-wrap">
            {products.slice(0, 4).map(({ id, product_name, thumbnail }) => (
                <div
                  className="relative h-[100px] w-[200px] overflow-hidden "
                  key={id}
                >
                  <Image
                    src={thumbnail}
                    alt="product"
                    fill
                    className=" object-contain"
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

export default About;
// const getItems = () =>
//   Array(20)
//     .fill(0)
//     .map((_, ind) => ({ id: `element-${ind}` }));

// function LeftArrow() {
//   const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

//   return (
//     <button disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
//       Left
//     </button>
//   );
// }

// function RightArrow() {
//   const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

//   return (
//     <button disabled={isLastItemVisible} onClick={() => scrollNext()}>
//       Right
//     </button>
//   );
// }
