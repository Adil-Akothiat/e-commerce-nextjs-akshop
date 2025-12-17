"use client";
import Image from "next/image";
import Link from "next/link";
import { calculatePriceAfterDiscount } from "@/utils";
import type { CartItemProps } from "@/redux/types";

type ItemsProps = {
    items: CartItemProps[];
    addItemHandler: (id:number)=> void;
    removeItemHandler: (id:number)=> void;
    count: number;
}

const Items = ({ items, addItemHandler, removeItemHandler, count }: ItemsProps) => {
    if (count === 0) {
        return (
            <div className="border rounded-md h-full flex flex-col">
                <div className="p-4 border-b sticky top-0 bg-white z-10">
                    <h5 className="font-semibold">Basket</h5>
                </div>
                <div className="flex-1 flex items-center justify-center p-4">
                    <div className="text-center">
                        <p className="text-stone-400 font-semibold mb-4">
                            You didn&apos;t have any product in cart.
                        </p>
                        <Link href="/products" className="btn btn-neutral">Buy Now</Link>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="border rounded-md h-96 flex flex-col">
            <div className="p-4 border-b sticky top-0 bg-white z-10">
                <h5 className="font-semibold">Basket</h5>
            </div>
            <div className="flex-1 overflow-y-auto">
                {items.map((item, i) => (
                    <div key={"cart-" + i} className={`grid grid-cols-1 gap-y-3 p-4 md:grid-cols-2 md:gap-x-6 ${items.length === (i + 1) ? "" : "border-b"}`}>
                        <div className="grid grid-cols-1 gap-y-1 md:grid-cols-2 md:items-center">
                            <Link href={"/products/"+item.title}>
                                <Image
                                    src={item.thumbnail}
                                    alt={item.title}
                                    width="0"
                                    height="0"
                                    className="w-24 h-24 object-contain"
                                    unoptimized={true}
                                />
                            </Link>
                            <Link href={"/products/"+item.title}>
                                <h4 className="text-sm font-bold">{item.title}</h4>
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-2 lg:items-center">
                            <div className="flex items-center max-w-60 border">
                                <button className="py-1 px-2 hover:bg-slate-700 hover:text-white"
                                    onClick={() => removeItemHandler(item.id)}
                                >-</button>
                                <input type="number" name={"quantity"} id={"qt-"+item.id} value={item.quantity} className="text-center border-l border-r w-full outline-none py-1 px-2" readOnly={true} min="1" max={`${item.stock}`}/>
                                <button className="py-1 px-2 hover:bg-slate-700 hover:text-white"
                                    onClick={() => addItemHandler(item.id)}
                                >+</button>
                            </div>
                            <div className="text-left lg:text-right">
                                <strong>{(item.price * item.quantity).toFixed(2)} USD</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-4 border-t flex-shrink-0">
                <Link href="/products" className="btn btn-ghost w-full">Continue Shopping</Link>
            </div>
        </div>
    );
}

export default Items;