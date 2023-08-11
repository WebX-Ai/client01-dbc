import Image from "next/image";

import banner from "@/assets/Images/products/barcode-printers/Barcode-printers-banner.jpeg";
import tempDevice from "@/assets/Images/products/safety/Temperature-Screening.png";
import uvcDevice from "@/assets/Images/products/safety/UVC-device.png";
import automatedLocker from "@/assets/Images/products/safety/AssetTracer-Locker.png";
const page = () => {
  const all_products = [
    {
      type: "INDUSTRIAL PRINTERS",
      desc: "When your supply chain requires a higher level of performance and efficiency, our industrial printers offer top-of-the-line versatility to keep your operations running smooth. Industrial printers are built for performance as they provide a wide range of media and applications, multiple connectivity options, easy media loading, and high throughput. Many industrial printers are built to support RFID tags and can be user-upgradable to support multiple tags. In addition, our line of industrial printers is currently being used in a wide range of industries helping to improve the supply chain through identifying and label important assets.  ",
      products: [
        {
          name: "ZE500",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/ze500-200x133.png",
        },
        {
          name: "ZT600 SERIES",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/ZT600-150x150.png",
        },
        {
          name: "ZT510",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/ZT510Printer-150x150.png",
        },
        {
          name: "ZT400 SERIES",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/zt400series-150x150.png",
        },
        {
          name: "ZT200 SERIES",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/zt200-150x150.png",
        },
        {
          name: "ZT200 SERIES",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/zt200-150x150.png",
        },
        {
          name: "PM45/PM45C",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/PM45-Printer-1-300x300.png",
        },
        {
          name: "PD45/PD45S",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/Honeywell-PD45-1-500x500.png",
        },
        {
          name: "PX940",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/px940v-e1570479620395-150x150.png",
        },
        {
          name: "PX SERIES",
          img: "/images/products/barcode-printers/INDUSTRIAL-PRINTERS/PX-Series-150x150.png",
        },
      ],
    },
    {
      type: "DESKTOP PRINTERS",
      des: "",
      products: [
        {
          name: "PC43",
          img: "/images/products/barcode-printers/DESKTOP-PRINTERS/pc43.jpg",
        },
        {
          name: "G-SERIES",
          img: "/images/products/barcode-printers/DESKTOP-PRINTERS/G-Series-150x150.png",
        },
        {
          name: "ZD620",
          img: "/images/products/barcode-printers/DESKTOP-PRINTERS/zd620-150x150.png",
        },
        {
          name: "ZD421/621",
          img: "/images/products/barcode-printers/DESKTOP-PRINTERS/zd421zd621-300x300.png",
        },
        {
          name: "HC100",
          img: "/images/products/barcode-printers/DESKTOP-PRINTERS/HC100-150x150.png",
        },
        {
          name: "PC-SERIES",
          img: "/images/products/barcode-printers/DESKTOP-PRINTERS/PC-Series-150x150.png",
        },
        {
          name: "KIOSK PRINTER",
          img: "/images/products/barcode-printers/DESKTOP-PRINTERS/Kiosk-printer-150x150.png",
        },
      ],
    },
    {
      type: "MOBILE PRINTERS",
      desc: "Throughout many industries, mobile printers allow an endless array of documentation, ticketing, and labeling tasks—from traditional barcodes to radio frequency identification (RFID) tags. Mobile printers include many of the same features found on stationary machines. The progress made in mobile printing gives end users the flexibility to print materials on demand, when and where they need them. Uninterrupted mobility drives new business processes that take advantage of point-of-transaction printing to improve productivity, labeling accuracy, and responsiveness time.",
      products: [
        {
          name: "ZQ500 SERIES",
          img: "/images/products/barcode-printers/MOBILE-PRINTERS/ZQ510-150x150.png",
        },
        {
          name: "QLN-SERIES",
          img: "/images/products/barcode-printers/MOBILE-PRINTERS/QLn420-150x150.png",
        },
        {
          name: "ZQ300",
          img: "/images/products/barcode-printers/MOBILE-PRINTERS/zq300-150x150.png",
        },
        {
          name: "ZQ110",
          img: "/images/products/barcode-printers/MOBILE-PRINTERS/ZQ110-150x150.png",
        },
        {
          name: "RL4E",
          img: "/images/products/barcode-printers/MOBILE-PRINTERS/E-class-150x150.png",
        },
        {
          name: "PB50",
          img: "/images/products/barcode-printers/MOBILE-PRINTERS/PB50-150x150.png",
        },
      ],
    },
  ];
  return (
    <div className="p-6 container m-auto space-y-6">
      <div className="relative h-[250px] w-full ">
        <Image src={banner} alt="contact" fill className="object-cover" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          HIGH-QUALITY BARCODES ARE SECONDS AWAY WITH OUR WIDE RANGE OF BARCODE
          PRINTERS
        </h1>
        <p className="text-lg font-light">
          Dream Big coorporation offers printer types to meet the demands of
          your business. Whether you&apos;re looking for an industrial printer
          or mobile printer, a printer that is thermal or a thermal transfer
          printer, we have the barcode printers your business needs. Dream Big
          coorporation offers a short list of top barcode printers below but
          works with many partners to bring you the printer to fit your
          facilities specific needs.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-medium border-b border-primary pb-4">
          TYPES OF BARCODE PRINTERS
        </h1>
        <div className="space-y-20">
          {all_products.map(({ products, type, desc }, index) => (
            <div className="space-y-5" key={index}>
              <h1 className="text-2xl font-normal border-b-primary border-b pb-2">
                {type}
              </h1>
              <p className="text-lg font-light">{desc}</p>
              <div className="flex items-center gap-10 w-full flex-wrap">
                {products.map((pro, index) => (
                  <div className="space-y-2" key={index}>
                    <h2 className="font-medium text-lg">{pro.name}</h2>
                    <Image src={pro.img} alt="" width={150} height={150} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
