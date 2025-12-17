"use client";
import CarouselLayout from "./Carousel";
import TypeIt from "typeit-react";
import Link from "next/link";
import { useStringCategoriesQuery } from "@/features/products/hooks/hooks";

const Banner = () => {
    const { data:categories } = useStringCategoriesQuery();
    return (
        <section className="relative">
            <CarouselLayout />
            <div className="absolute top-0 left-0 p-4 md:p-10 lg:p-16 xl:p-24 w-52 grid grid-cols-1 gap-y-1 md:w-96 lg:w-3/5 lg:gap-y-6">
                    <h1 
                        className="text-md text-white font-bold md:text-2xl lg:text-5xl xl:text-6xl  drop-shadow-lg"
                    >
                        Limited-time offers inside!
                    </h1>
                    <div 
                        className="min-h-20 md:min-h-24 lg:min-h-32 xl:min-h-36"
                    >
                        <h2 className="font-bold text-white md:text-xl lg:text-4xl xl:text-5xl drop-shadow-lg">
                            Browse our extensive selection of
                            <strong className="text-slate-700">
                                <TypeIt
                                    options={{ loop: true }}
                                    getBeforeInit={(instance) => {
                                        if(!categories || !categories.length) return instance;
                                        categories.forEach(c => {
                                            instance
                                                .type(" " + c)
                                                .pause(1500)
                                                .delete(c.length);
                                        })
                                        return instance;
                                    }}
                                />
                            </strong>
                        </h2>
                    </div>
                    <div>
                        <Link type="button" href="/products" className="btn btn-sm btn-neutral md:btn-md lg:btn-lg">Buy Now</Link>
                    </div>
            </div>
        </section>
    );
}

export default Banner;