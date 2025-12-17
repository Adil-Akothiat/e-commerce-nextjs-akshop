"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/store";
import type { ProductProps } from "@/features/products/api/types";
import { calculatePriceAfterDiscount } from "@/utils";

export default function HorizontalCard ({ product }:{ product:ProductProps }) {
    const dispatch = useDispatch();
    const priceAfterDiscount = calculatePriceAfterDiscount({ price:product.price, discountPercentage:product.discountPercentage });
    
    const addItemHandler = () => {
        dispatch(addItem({ ...product, quantity:1, price:priceAfterDiscount }));
    }

    return (
        <div className="flex flex-col justify-center">
            <div
                className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white" style={{ width: "550px" }}>
                <Link 
                    href={"/products/" + product?.title}
                    className="block w-full md:w-1/3 bg-white grid place-items-center"
                >
                    <Image
                        src={product?.thumbnail}
                        alt={product?.title}
                        width="0"
                        height="0"
                        className="rounded-xl w-full max-h-96 object-cover"
                        unoptimized={true}
                    />
                </Link>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">
                        <div className="flex items-center">
                            <p className="text-gray-500 font-medium hidden md:block">{product?.brand}</p>
                            <div className="flex items-center ml-3">
                                <FaStar className="text-yellow-500" />
                                <p className="text-gray-600 font-bold text-sm ml-1">
                                    {product?.rating}
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                            New</div>
                    </div>
                    <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                        <Link href={"/products/" + product?.title}>
                            {product?.title}
                        </Link>
                    </h3>
                    <div className="flex items-center justify-between">
                        <p>
                            <span className="font-bold">$</span>
                            <span className="text-3xl font-bold text-slate-900">{priceAfterDiscount.toFixed(2)}</span>
                            <span className="text-sm text-slate-900 line-through">{product?.price}</span>
                        </p>
                        <button
                            className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                            onClick={addItemHandler}
                            title="Add to Cart"
                        >
                            <FaCartShopping />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}