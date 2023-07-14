"use client";
import { products } from "@/data/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";

const Product = () => {
  const params = useParams();
  const product = products.find(
    ({ product_name }) => product_name === params?.id
  );
  return (
    <div className="px-6 py-10 space-y-10">
      <h1 className="text-center first-letter:capitalize">
        {product?.product_name}
      </h1>
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-5 items-center">
        {products[0].products.map((d, index) => (
          <div
            className="relative h-[180px] w-[250px] overflow-hidden rounded-xl shadow-lg border-2"
            key={index}
          >
            <Image src={d} alt="product" fill className=" object-contain" />
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default Product;
