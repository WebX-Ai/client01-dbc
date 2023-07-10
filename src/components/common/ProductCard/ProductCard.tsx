import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="relative w-80 h-32  ">
      <div className="absolute h-full w-[80%] right-0 shadow-md overflow-hidden rounded-2xl">
        <div className="relative h-full w-full">
          <Image
            src={"/images/products/lenovo.png"}
            alt="img"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-2">
        <h5 className="text-2xl font-black text-primary">Lenovo</h5>
        <p className="w-[100px] text-xs font-medium">
          Laptop, Desktop and tablets
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
