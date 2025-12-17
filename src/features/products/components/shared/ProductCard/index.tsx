"use client";
import type { ProductProps } from "@/features/products/api/types";
import VerticalCard from "./VerticalCard";
import HorizontalCard from "./HorizontalCard";

type ProductCardProps = {
  product:ProductProps;
  type?:"vertical"|"horizontal";
}

const ProductCard = ({ type="vertical", product }:ProductCardProps) => {
    if(type=="vertical") return <VerticalCard product={product}/>;
    return <HorizontalCard product={product} />
};

export default ProductCard;