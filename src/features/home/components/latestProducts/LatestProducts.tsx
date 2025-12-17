"use client";
import { useRef } from "react";
import ProductCard from "@/features/products/components/shared/ProductCard";
import { useProducts } from "@/features/products/hooks/hooks";

const LatestProducts = () => {
    const container = useRef<HTMLDivElement|null>(null);
    const { data:productsResponse } = useProducts(5, 189);
    const products = productsResponse.products;

    const scrollLeftHandler = () => {
        if(container?.current) {
            if (container.current.scrollLeft > 0) {
            scrollIt("l");
        }
        }
    }
    const scrollRightHandler = () => {
       if(container?.current) {
         var finalP = container.current.scrollWidth - container.current.clientWidth;
        if (container.current.scrollLeft < finalP) {
            scrollIt("r");
        }
       }
    }
    const scrollIt = (dir:string) => {
        var walk = 0;
        var breakP = 250;
        var time = setInterval(() => {
            if (walk <= breakP) {
                if (dir === 'l') {
                    if(container.current) {
                        container.current.scrollLeft -= 5;
                    }
                } else if (dir === "r") {
                    if(container.current) {
                        container.current.scrollLeft += 5;
                    }
                } else {
                    throw Error("Should be 'l' or 'r' and not '" + dir + "'");
                }
                walk += 5;
            } else {
                clearInterval(time);
            }
        }, 7.5)
    }

    return (
            <section 
                className="items-center md-gap-5 w-full px-4 md:px-10 lg:px-16 xl:px-24"
            >
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-700 pl-3 after relative after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-1 after:bg-slate-700">Latest Products</h3>
                    <div className="grid grid-cols-2 gap-x-3">
                        <button
                            className="btn btn-gosht rounded-full"
                            onClick={scrollLeftHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg>
                        </button>
                        <button
                            className="btn btn-gosht rounded-full"
                            onClick={scrollRightHandler}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg>
                        </button>
                    </div>
                </div>
                <div
                    className="flex flex-row flex-nowrap cust-scroll overflow-x-auto overflow-y-hidden items-stretch gap-x-6 smooth-scroll p-3"
                    ref={container}
                >
                    {
                        products.map((p, i)=> <ProductCard key={i} product={p} type="horizontal" />)
                    }
                </div>
            </section>
    );
}

export default LatestProducts;