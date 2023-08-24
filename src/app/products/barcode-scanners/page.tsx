import Image from "next/image";

const page = () => {
  const all_products = [
    {
      type: "HANDHELD BARCODE SCANNERS",
      products: [
        {
          name: "DS3600-KD",
          img: "/images/products/barcode-scanners/handheld/ds3600-kd-spec-sheet-asset-photography-200x133.png",
        },
        {
          name: "DS8100",
          img: "/images/products/barcode-scanners/handheld/ds8100-150x150.png",
        },
        {
          name: "DS9900",
          img: "/images/products/barcode-scanners/handheld/DS9900-series-retail-spec-sheet-asset-photography-1280x1280-1-150x150.png",
        },
        {
          name: "DS2200",
          img: "/images/products/barcode-scanners/handheld/ds2200-150x150.png",
        },
        {
          name: "DS4208",
          img: "/images/products/barcode-scanners/handheld/DS4208-150x150.png",
        },
        {
          name: "DS6878",
          img: "/images/products/barcode-scanners/handheld/DS6787-150x150.png",
        },
        {
          name: "GRANIT-1990/91IXR",
          img: "/images/products/barcode-scanners/handheld/Granit-XP-1990i-150x150.png",
        },
        {
          name: "GRANIT 1980I/81I",
          img: "/images/products/barcode-scanners/handheld/granit1980i-150x150.png",
        },
        {
          name: "XENON 1900G/1902",
          img: "/images/products/barcode-scanners/handheld/Xenon-1900g-150x150.png",
        },
        {
          name: "VOYAGER 1200G/1202G",
          img: "/images/products/barcode-scanners/handheld/Voyager-1202g-150x150.png",
        },
      ],
    },
    {
      type: "FIXED SCANNERS",
      products: [
        {
          name: "FIXED INDUSTRIAL SCANNERS AND MACHINE VISION",
          img: "/images/products/barcode-scanners/fixed/fis-mv-photography-product-family-200x200-1-150x150.png",
        },
        {
          name: "GENESIS XP 7680G",
          img: "/images/products/barcode-scanners/fixed/Genesis-xp-7680g-resized-150x150.png",
        },
        {
          name: "AUTOCUBE DIMENSIONING",
          img: "/images/products/barcode-scanners/fixed/autocube-150x150.png",
        },
      ],
    },
  ];
  return (
    <div className="p-6 container m-auto space-y-6">
      <div className="relative h-[250px] w-full ">
        <Image
          src={"/images/products/barcode-scanners/barcode-scanner-banner.jpeg"}
          alt="contact"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">
          Master the art of scanning with our top-of-the-line barcode scanners
        </h1>
        <p className="text-lg font-light">
          Barcode scanners from Dream Big Corporation range from many styles including;
          Handheld, USB, Industrial, Bluetooth, Portable, and more. We carry all
          types of scanners from 1D to 2D and feature just a short list of our
          top products below.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-3xl font-medium border-b border-primary pb-4">
          TYPE OF BARCODE SCANNERS
        </h1>
        <div className="space-y-20">
          {all_products.map(({ products, type }, index) => (
            <div className="space-y-5" key={index}>
              <h1 className="text-2xl font-normal border-b-primary border-b pb-2">
                {type}
              </h1>
              <div className="flex items-center gap-16 w-full flex-wrap">
                {products.map((pro, index) => (
                  <div className="space-y-2" key={index}>
                    <h2 className="font-medium text-lg w-[200px]">
                      {pro.name}
                    </h2>
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
