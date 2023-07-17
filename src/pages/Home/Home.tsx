import Button from "@/components/common/Button/Button";
import Image from "next/image";

//assets
import HeroImage from "@/assets/Images/hero.webp";
import ProductCard from "@/components/common/ProductCard/ProductCard";
import Link from "next/link";
import { products } from "@/data/data";
const Home = () => {
  return (
    <div>
      <div className="w-full bg-secondary/10 h-[700px] relative">
        <div className="absolute h-full w-full">
          <div className="relative h-full w-full">
            <Image src={HeroImage} alt="hero" fill className="object-cover" />
          </div>
        </div>
        <div className="absolute h-full w-full bg-black/30"></div>
        <div className="w-full absolute bottom-0 p-6 flex flex-col items-center space-y-3 text-center text-white">
          <h1 className="text-white"> Dream Big Corporation</h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            accusamus incidunt, rerum debitis sed possimus molestias veniam
          </p>
          <Button label="Get in touch" />
        </div>
      </div>
      {/* product section */}
      <div className="px-6 py-10 space-y-8 flex flex-col items-center">
        <h1 className="text-center">Products</h1>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-8 ">
          {products.slice(0, 4).map(({ id, product_name, desc, thumbnail }) => (
            <Link href={`/products/${product_name}`} key={id}>
              <ProductCard
                company_name={product_name}
                company_image={thumbnail}
                company_tagline={desc}
              />
            </Link>
          ))}
        </div>
        <Link href={"/products"} className="">
          <Button label="And many more..." outlined />
        </Link>
      </div>
      {/* Brands we trust */}
      <div className="bg-[#FFEEDD] p-6 w-full space-y-4">
        <h1 className="text-white text-center">Brands we trust</h1>
        <div className="flex gap-4 w-full items-center justify-center ">
          <div className="flex items-center justify-center sm:w-9/12 gap-5 flex-wrap">
            {products.map(({ id, product_name, thumbnail }, index) => (
              <div
                className="relative h-[60px] sm:h-[100px] sm:w-[200px] w-[100px] overflow-hidden "
                key={index}
              >
                <Image
                  src={thumbnail}
                  alt={product_name}
                  fill
                  className=" object-contain  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
