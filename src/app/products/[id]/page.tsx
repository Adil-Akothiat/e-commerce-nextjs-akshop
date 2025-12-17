"use client";
import ProductGrid from "@/features/products/components/detail/ProductGrid";
import { useEffect } from "react";

const ProductPage = () => {
  useEffect(()=>{
    window.scrollTo({ top:0, behavior:"smooth" });
  },[])
  return (
    <main className="my-10 px-4 md:px-10 lg:px-16 xl:px-24 min-h-screen">
      <ProductGrid />
    </main>
  );
};

export default ProductPage;