"use client";
import MyCart from "../../features/cart";

const MyCartPage = () => {
    return (
        <main className="md:h-screen md:overflow-hidden flex flex-col">
            <div className="px-4 md:px-10 lg:px-16 xl:px-24 py-6 flex-shrink-0">
                <h1 className="text-3xl font-bold">Shopping Cart</h1>
            </div>
            <div className="flex-1 min-h-0 px-4 md:px-10 lg:px-16 xl:px-24 overflow-hidden">
                <MyCart />
            </div>
        </main>
    );
}

export default MyCartPage;