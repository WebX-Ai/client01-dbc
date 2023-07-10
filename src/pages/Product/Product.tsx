import Image from "next/image";

const Product = () => {
  return (
    <div className="px-6 py-10 space-y-10">
      <h1 className="text-center">Lenovo</h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 items-center">
        <div className="relative h-[180px] w-[250px] overflow-hidden rounded-xl shadow-lg border-2">
          <Image
            src={"/images/products/lenovo.png"}
            alt="product"
            fill
            className=" object-contain"
          />
        </div>
      <div className="flex flex-col items-center">
        <div className="relative h-[180px] w-[250px] overflow-hidden rounded-xl shadow-lg border-2">
          <Image
            src={"/images/products/lenovo.png"}
            alt="product"
            fill
            className=" object-contain"
          />
        </div>
      </div>
      </div>{" "}
    </div>
  );
};

export default Product;
