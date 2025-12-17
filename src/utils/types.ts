import type { ProductProps } from "@/features/products/api/types"

export type FilterByCategoryProps = {
    products:ProductProps[];
    categoryP:string;
}

export type FilterByPriceProps = {
    products:ProductProps[];
    minPrice:number;
    maxPrice:number;
}

export type PriceAfterDiscountProps = {
    price:number;
    discountPercentage:number;
}