import ProductCard from "@/features/products/components/shared/ProductCard";
import { useProducts } from "@/features/products/hooks/hooks";
import Link from "next/link";

const PopularProducts = () => {
    const { data:productsResponse } = useProducts(0,0);
    const products = productsResponse.products;
    const popularProducts = products.filter(product=> product.rating>=4.9);
    return (
        <section className="px-4 md:px-10 lg:px-16 xl:px-24">
            <h3 className="text-2xl font-bold text-slate-700 pl-3 after relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-slate-700 mb-6">Top Products</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {
                    popularProducts.map((product, i) => <ProductCard key={"pkey-" + i} product={product} />)
                }
            </div>
            <div className="mx-auto mt-10" style={{width:"fit-content"}}>
                <Link type="button" href="/products" className="btn btn-outline btn-neutral">
                    View All Products
                </Link>
            </div>
        </section>
    );
}

export default PopularProducts;