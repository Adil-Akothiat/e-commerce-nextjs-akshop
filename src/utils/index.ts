import type { ProductProps } from "@/features/products/api/types";
import type { FilterByCategoryProps, FilterByPriceProps, PriceAfterDiscountProps } from "./types";

const filterByCategory = ({ categoryP, products }:FilterByCategoryProps) => {
    return products.filter(({ category }) => category.trim() == categoryP.trim());
}
const filterByPrice = ({ products, maxPrice, minPrice }:FilterByPriceProps) => {
    return products.filter(({ price }) => price >= minPrice && price <= maxPrice);
}
const calculatePriceAfterDiscount = ({ price, discountPercentage }:PriceAfterDiscountProps)=> price - ((price * discountPercentage) / 100)

export {
    filterByCategory,
    filterByPrice,
    calculatePriceAfterDiscount
}