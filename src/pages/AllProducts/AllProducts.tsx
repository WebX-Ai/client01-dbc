import ProductCard from "@/components/common/ProductCard/ProductCard";
import { products } from "@/data/data";
import Link from "next/link";

const AllProducts = () => {
  return (
    <div className="bg-[#fbf7f5] w-full">
      <div className="px-6 py-10 space-y-10 container m-auto">
        <h1 className="text-center sm:text-left">Products</h1>
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap">
          {products.map(({ id, product_name, thumbnail,desc }) => (
            <Link href={`/products/${product_name.toLocaleLowerCase()}`} key={id}>
              <ProductCard
                company_name={product_name}
                company_image={thumbnail}
                company_tagline={desc}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
