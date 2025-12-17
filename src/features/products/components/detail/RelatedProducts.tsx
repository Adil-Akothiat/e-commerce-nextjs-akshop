import { SecondaryLoader } from "@/components/ui/loaders";
import ProductCard from "../../components/shared/ProductCard";
import { useProductsByCategory } from "../../hooks/hooks";

export default function RelatedProducts({ category }: { category: string }) {
  const {
    data: productsResponse,
    isFetching,
    error,
  } = useProductsByCategory({ category, limit: 4, skip: 0 });

  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-700 pl-3 after relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-slate-700 my-8">
        Related Products
      </h3>
      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4 relative">
        {isFetching ? (
          <SecondaryLoader />
        ) : (
          <>
            {error ? (
              <p>Failed to fetch.</p>
            ) : (
              productsResponse?.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}