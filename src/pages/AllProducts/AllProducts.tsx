import ProductCard from "@/components/common/ProductCard/ProductCard";
import Link from "next/link";

const AllProducts = () => {
  return (
    <div className="px-6 py-10 space-y-10">
      <h1 className="text-center sm:text-left">Products</h1>
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:flex-wrap">
        {Array(5)
          .fill(0)
          .map((d, index) => (
            <Link href={"/products/lenovo"} key={index}>
              <ProductCard />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
