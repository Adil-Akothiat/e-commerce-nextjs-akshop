"use client";
import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import type { ProductProps } from "@/features/products/api/types"

type ProductImageProps = {
    product: ProductProps;
}

const ProductImage = ({ product }: ProductImageProps) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const images = product.images || [];

    if (!images || images.length === 0) {
        return null;
    }

    const handlePrevious = () => {
        setActiveImageIndex((prev) => 
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setActiveImageIndex((prev) => 
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const handleThumbnailClick = (index: number) => {
        setActiveImageIndex(index);
    };

    return (
        <div className="h-fit p-4 rounded-md md:border">
            {/* Main Image Display */}
            <div className="relative bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center min-h-96">
                <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 transition-all opacity-40 hover:opacity-100"
                    aria-label="Previous image"
                    disabled={images.length <= 1}
                >
                    <FaChevronLeft className="text-2xl text-gray-700" />
                </button>

                {images[activeImageIndex] && (
                    <Image
                        src={images[activeImageIndex]}
                        alt={product.title}
                        width={500}
                        height={500}
                        className="w-full h-full object-contain max-h-96"
                        unoptimized={true}
                        priority={activeImageIndex === 0}
                    />
                )}

                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-3 transition-all opacity-40 hover:opacity-100"
                    aria-label="Next image"
                    disabled={images.length <= 1}
                >
                    <FaChevronRight className="text-2xl text-gray-700" />
                </button>

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                        {activeImageIndex + 1} / {images.length}
                    </div>
                )}
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
                    {images.map((img, index) => (
                        <button
                            key={`thumb-${index}`}
                            onClick={() => handleThumbnailClick(index)}
                            className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                                activeImageIndex === index
                                    ? "border-blue-500 opacity-100"
                                    : "border-gray-200 opacity-60 hover:opacity-100"
                            }`}
                        >
                            <Image
                                src={img}
                                alt={`${product.title} - thumbnail ${index + 1}`}
                                width={80}
                                height={80}
                                className="w-20 h-20 object-cover"
                                unoptimized={true}
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ProductImage;