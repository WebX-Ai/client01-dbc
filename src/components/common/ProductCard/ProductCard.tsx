import Image from "next/image";

const ProductCard: React.FC<{
  company_name: string;
  company_image: string;
  company_tagline: string;
}> = ({ company_name, company_image, company_tagline }) => {
  return (
    <div className="relative w-80 h-32  ">
      <div className="absolute h-full w-[80%] right-0 shadow-md hover:shadow-lg overflow-hidden rounded-2xl p-4">
        <div className="relative h-full w-full">
          <Image
            src={company_image}
            alt="img"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute bottom-2">
        <h5 className="text-2xl font-black text-primary">{company_name}</h5>
        <p className="w-[150px] text-xs font-medium">{company_tagline} </p>
      </div>
    </div>
  );
};

export default ProductCard;
