import Image from "next/image";

const page = () => {
  const all_products = [
    {
      type: "LABELING SOFTWARE",
      products: [
        {
          name: "BARTENDER BY SEAGULL SCIENTIFIC",
          img: "/images/products/software/labeling-software/BarTender-software-pro-edition-150x150.png",
        },
        {
          name: "NICELABEL SOFTWARE",
          img: "/images/products/software/labeling-software/Loftware_Nicelabel_Logo_Stacked-160x75.png",
        },
      ],
    },
    {
      type: "MATERIAL HANDLING SOFTWARE",
      products: [
        {
          name: "ACCUVITI™ BY Dream Big Corporation ",
          img: "/images/products/software/handleing-software/Accuviti-by-ABR-340x150.png",
        },
      ],
    },
  ];
  return (
    <div className="space-y-6">
      <div className="relative h-[80px] sm:h-[250px] w-full ">
        <Image
          src={"/images/products/software/Software-banner.jpeg"}
          alt="contact"
          fill
          className="object-contain sm:object-fill"
        />
      </div>
      <div className="p-6 container m-auto space-y-6">
        <div className="space-y-2">
          <h1 className="sm:text-4xl font-bold">
            Making your life easier with enterprise-ready software
          </h1>
          <p className="sm:text-lg font-light">
            We offer software products to simplify the everyday business
            complexities and allow you to focus on more important business
            decisions. Software from Dream Big Corporation includes barcode,
            RFID, and card label/tag designers. We are here to assist you every
            step of the way to make sure your software is up and running
            effectively. Ask us about basic setup and training services with
            your software purchase.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-20">
            {all_products.map(({ products, type }, index) => (
              <div className="space-y-5" key={index}>
                <h1 className="sm:text-2xl font-normal border-b-primary border-b pb-2">
                  {type}
                </h1>
            <div className="flex gap-10 sm:gap-16 w-full flex-wrap">
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
    </div>
  );
};

export default page;
