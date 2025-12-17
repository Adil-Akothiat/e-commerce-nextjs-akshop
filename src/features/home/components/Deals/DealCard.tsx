"use client";
import { useState } from "react";
import { FaCartShopping, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import type { ProductProps } from "@/features/products/api/types";

const DealCard = ({ product }: { product:ProductProps }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = product.images || [];

    const handlePrev = () => {
        setCurrentImageIndex((prev) => 
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => 
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="container bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-6 items-center">
            <div className="relative flex items-center justify-center">
                {images.length > 0 && (
                    <>
                        <div className="h-80 w-80 flex items-center justify-center">
                            <Image
                                src={images[currentImageIndex]||""}
                                alt={product.title || "Product image"}
                                width={320}
                                height={320}
                                className="w-80 h-80 object-cover"
                                unoptimized={true}
                            />
                        </div>
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                                    aria-label="Previous image"
                                >
                                    <FaChevronLeft className="text-2xl" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                                    aria-label="Next image"
                                >
                                    <FaChevronRight className="text-2xl" />
                                </button>
                            </>
                        )}
                    </>
                )}
            </div>
            <div>
                <div className="text-3xl font-bold mb-4">Special Offer!</div>
                <div className="text-lg mb-4 xl:text-2xl">Get <span className="text-yellow-400 font-bold xl:text-3xl">{product.discountPercentage}% OFF</span></div>
                <div className="text-base mb-4">{product.title}</div>
                <div className="text-sm mt-4">
                    <p>
                        {product.description}
                    </p>
                </div>
                <div className="mt-5">
                    <Link href={"/products/" + product.id} className="inline-flex overflow-hidden text-white bg-gray-900 rounded group hover:bg-slate-700">
                        <span className="px-3.5 py-2 text-white bg-slate-700 flex items-center justify-center">
                            <FaCartShopping />
                        </span>
                        <span className="pl-4 pr-5 py-2.5">Add to Cart</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DealCard;