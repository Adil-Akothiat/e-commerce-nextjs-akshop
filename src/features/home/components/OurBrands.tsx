import { useProducts } from "@/features/products/hooks/hooks";
import Marquee from "react-fast-marquee";

const OurBrands = () => {
  const { data:productResponse } = useProducts(0,0);
  const products = productResponse.products;
  
  return (
    <section
      className="grid grid-cols-1 gap-y-8 px-4 md:px-10 lg:px-16 xl:px-24"
    >
      <Marquee>
        {products.map((p, i) => (
          <h3
            key={"kwt-" + i}
            className="p-5 bg-slate-100 text-slate-800 text-xl font-bold mx-3 px-2.5 py-0.5 rounded text-capitalize"
          >
            {p.brand}
          </h3>
        ))}
      </Marquee>
    </section>
  );
};

export default OurBrands;