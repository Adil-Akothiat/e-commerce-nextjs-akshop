"use client";
import Link from "next/link";
import { useEffect } from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { useAppSelector } from "@/redux/hooks";

const ShopCardBar = () => {
    const count = useAppSelector((state) => state.cart.count);
    const items = useAppSelector((state) => state.cart.items);
    const productsPrices = items.map(({price, quantity})=> price * quantity);
    const totalPrice = productsPrices.reduce((a,b)=> a+b,0);

    useEffect(()=> {
        const addAnimation = ()=> {
            const basketBtn = document.getElementById("basket-shop");
            basketBtn?.classList.add("move-up");
            basketBtn?.addEventListener("animationend", ()=> basketBtn?.classList.remove("move-up"));
        }
        if(count) {
            addAnimation();
        }
    }, [count])

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" id="basket-shop">
                <div className="indicator">
                    <span className="text-2xl text-slate-600"><MdOutlineShoppingBag /></span>
                    <span className="badge badge-neutral badge-sm indicator-item">{count}</span>
                </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[80] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body">
                    <span className="font-bold text-lg">{count.toFixed(2)} Items</span>
                    <span className="text-info">Subtotal: {totalPrice.toFixed(2)} USD</span>
                    <div className="card-actions">
                        <Link href="/mycart" className="btn btn-primary btn-block">View cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopCardBar;