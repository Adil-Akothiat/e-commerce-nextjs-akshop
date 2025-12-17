"use client";
import Unfound from "@/components/ui/notfound";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import { useProduct } from "../../hooks/hooks";
import { useParams } from "next/navigation";
import { SecondaryLoader } from "@/components/ui/loaders";
import RelatedProducts from "./RelatedProducts";

const ProductGrid = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isFetching, error } = useProduct({ id: Number(id) });
  if (isFetching) return <SecondaryLoader />;
  if (error || !product) {
    return <Unfound message="Product Not Found!" />;
  }
  return (
    <>
      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-none md:gap-x-6">
        <ProductImage product={product} />
        <ProductDetails product={product} />
      </div>
      <RelatedProducts category={product?.category} />
    </>
  );
};

export default ProductGrid;