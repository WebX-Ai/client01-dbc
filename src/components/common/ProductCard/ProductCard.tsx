import Image from "next/image";

const ProductCard: React.FC<{
  company_name: string;
  company_image: string;
  company_tagline: string;
}> = ({ company_name, company_image, company_tagline }) => {
  return (
    <div className="relative w-72 h-56 shadow-md hover:shadow-lg overflow-hidden rounded-2xl p-5 space-y-2 bottom-1 border bg-white">
      <div className="relative h-28 w-full">
        <Image src={company_image} alt="img" fill className="object-contain" />
      </div>
      <div className="">
        <h5 className="text-2xl font-black text-primary">{company_name}</h5>
        <p className="w-full text-xs font-medium">{company_tagline} </p>
      </div>
    </div>
  );
};

export default ProductCard;
