import Image from "next/image";

import banner from "@/assets/Images/products/barcode-printers/Barcode-printers-banner.jpeg";
import tempDevice from "@/assets/Images/products/safety/Temperature-Screening.png";
import uvcDevice from "@/assets/Images/products/safety/UVC-device.png";
import automatedLocker from "@/assets/Images/products/safety/AssetTracer-Locker.png";
const page = () => {
  const all_products = [
    {
      type: "RUGGED MOBILE DEVICES",
      products: [
        {
          name: "TC53/TC58",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/tc53.png",
        },
        {
          name: "TC52X/TC57",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/tc5x-series-spec-sheet-asset-photo-300x300.png",
        },
        {
          name: "EC50/EC55",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/ec50-ec55-photography-product-group-150x94.png",
        },
        {
          name: "TC75",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/TC75-150x150.png",
        },
        {
          name: "CT30 XP",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/CT30-XP-mobile-computer-300x300.png",
        },
        {
          name: "TC72/TC77",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/tc72-photography-product-front-300x300.png",
        },
        {
          name: "TC70",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/TC70-150x150.png",
        },
        {
          name: "TC20",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/TC20-150x150.png",
        },
        {
          name: "CT45/CT45 XP",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/ct45-ct45xp-10.29-300x300.png",
        },
        {
          name: "CT60",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/CT60-150x150.png",
        },
        {
          name: "CT50",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/CT50-150x150.png",
        },
        {
          name: "CN75",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/CN75-150x150.png",
        },
        {
          name: "CN80",
          img: "/images/products/mobile-computers/RUGGED MOBILE DEVICES/CN80-Printer-300x300.png",
        },
      ],
    },
    {
      type: "MOBILE COMPUTERS",
      products: [
        {
          name: "MC3390XR",
          img: "/images/products/mobile-computers/MOBILE COMPUTERS/mc3390xr-spec-sheet-asset-photography-200x133.png",
        },
        {
          name: "TC8300",
          img: "/images/products/mobile-computers/MOBILE COMPUTERS/tc8300-dpm-photography-product-300x300.png",
        },
        {
          name: "MC9300",
          img: "/images/products/mobile-computers/MOBILE COMPUTERS/mc9300-photography-website-front-right-1280x720-1-500x500.png",
        },
        {
          name: "MC3200",
          img: "/images/products/mobile-computers/MOBILE COMPUTERS/MC3200-150x150.png",
        },
        {
          name: "CK75",
          img: "/images/products/mobile-computers/MOBILE COMPUTERS/CK75-150x150.png",
        },
        {
          name: "CK65",
          img: "/images/products/mobile-computers/MOBILE COMPUTERS/Honeywell-CK65-scan-handle_right-angle-screen_lowres-e1569957697931.png",
        },
      ],
    },
    {
      type: "WEARABLE MOBILE COMPUTERS & SCANNERS",
      products: [
        {
          name: "RS6000 RING SCANNER",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/RS6000-ring-scanner-150x150.png",
        },
        {
          name: "RS4000 RING SCANNER",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/rs4000-ring-scanner-150x150.png",
        },
        {
          name: "RS5100 BLUETOOTH RING SCANNER",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/RS5100-SINGLE-FINGER-BLUETOOTH-RING-SCANNER-1-300x298.png",
        },
        {
          name: "8675I RING SCANNER",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/8675i-Wearable-Scanner-by-Honeywell-300x300.png",
        },
        {
          name: "8680I RING SCANNER",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/8680i-150x150.png",
        },
        {
          name: "MARK DISPLAY",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/B-ProGlove-Display-Packshot-copy-scaled-e1592490336154-500x500.jpg",
        },
        {
          name: "MARK 2",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/MARK-2-white-bg-e1576532055107-500x500.png",
        },
        {
          name: "WT6000 WEARABLE TERMINAL",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/wt6000-wearable-terminal-150x150.png",
        },
        {
          name: "HS3100 BLUETOOTH HEADSET",
          img: "/images/products/mobile-computers/WEARABLE MOBILE COMPUTERS & SCANNER/hs3100-bluetooth-headset-150x150.png",
        },
      ],
    },
    {
      type: "FIXED/MOUNTED MOBILE COMPUTER DEVICES",
      products: [
        {
          name: "VC8300",
          img: "/images/products/mobile-computers/FIXED:MOUNTED MOBILE COMPUTER DEVICES/vc8300-photography-product-front-facing-standard-319x319-1-300x300.png",
        },
        {
          name: "THOR VM1A",
          img: "/images/products/mobile-computers/FIXED:MOUNTED MOBILE COMPUTER DEVICES/line_honeywell-thor-vm1a_1-300x300.png",
        },
        {
          name: "THOR VM3",
          img: "/images/products/mobile-computers/FIXED:MOUNTED MOBILE COMPUTER DEVICES/VM3-150x150.png",
        },
      ],
    },
    {
      type: "ACCESSORIES",
      products: [
        {
          name: "SLEDS & RFID MOBILE ATTACHMENTS",
          img: "/images/products/mobile-computers/ACCESSORIES/mobile-readers-150x150.png",
        },
      ],
    },
  ];
  return (
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={
            "/images/products/mobile-computers/Mobile-Computers-Mobile-Devices_v2.jpg"
          }
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-2">
          <h1 className="sm:text-4xl font-bold">
            Durable, Portable, & Data Collecting Mobile Computer Devices
          </h1>
          <p className="sm:text-lg font-light">
            Dream Big Corporation mobile computers include options for
            durability, portability, accessories, and batteries to get the most
            return on investment. They are ready for all types of challenging
            environments, business types, and sizes. We&apos;ve provided several
            of our most popular products listed below and there are more
            available. Dream Big Corporation can work with you to determine
            which device is suitable for your business. If you&apos;re looking
            for durability, portability, and integration with your current
            systems we have the product to fit your needs.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-20">
            {all_products.map(({ products, type }, index) => (
              <div className="space-y-5" key={index}>
                <h1 className="sm:text-2xl font-normal border-b-primary border-b pb-2">
                  {type}
                </h1>
                <div className="flex gap-5 sm:gap-10 w-full flex-wrap">
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
    </div>
  );
};

export default page;
