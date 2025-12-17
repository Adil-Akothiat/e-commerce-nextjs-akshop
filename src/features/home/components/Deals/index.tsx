import DealCard from "./DealCard";
import { useProducts } from "@/features/products/hooks/hooks";

const Deals = () => {
  const { data:productsResponse } = useProducts(0,0);
  const products = productsResponse.products;
  const discountPercentages = products.map(product=> product.discountPercentage);
  const maxDiscount = Math.max(...discountPercentages);
  const product = products.find(product=> product.discountPercentage === maxDiscount);
  if(!product) return null;
  
  return (
    <section
      className="grid grid-cols-1 gap-y-8 px-4 md:px-10 lg:px-16 xl:px-24"
    >
      <DealCard product={product} />
    </section>
  );
};

export default Deals;