"use client";
import type { CartItemProps } from "@/redux/types";
import { calculatePriceAfterDiscount } from "@/utils";

type TotalItemsProps = {
    items:CartItemProps[];
    count:number;
}

const TotalItems = ({ items, count }: TotalItemsProps) => {
    const shipping = 12.75;
    const productsPrices = items.map(item=> item.price * item.quantity).reduce((a,b)=> a+b, 0);
    const totalPrice = (productsPrices+shipping).toFixed(2);
    
    return (
        <div className="border rounded-md sticky top-0">
            <div className="p-4 border-b">
                <h5 className="font-semibold">Basket Total</h5>
            </div>
            <div className="p-4 grid grid-cols-1 gap-y-4">
                <div className="flex items-center justify-between">
                    <strong>{count} article{count > 1 ? "s" : ""}</strong>
                    <span>{productsPrices.toFixed(2)} USD</span>
                </div>
                {
                    count > 0 ? (
                        <>
                            <div className="flex items-center justify-between">
                                <strong>Shipping</strong>
                                <span>{shipping} USD</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <strong>Total</strong>
                                <strong>{totalPrice} USD</strong>
                            </div>
                        </>
                    ) : null
                }
                <div>
                    <button className="btn btn-neutral w-full">Order Now</button>
                </div>
            </div>
        </div>
    );
}

export default TotalItems;