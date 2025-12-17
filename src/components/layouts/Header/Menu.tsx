"use client";
import { useStringCategoriesQuery } from "@/features/products/hooks/hooks";
import Link from "next/link";
import { LuMenu } from "react-icons/lu";

const MenuBar = () => {
    let { data:categories } = useStringCategoriesQuery();

    return (
        <>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-xl">
                        <LuMenu />
                    </div>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 p-2 z-[100] shadow bg-base-100 rounded-box w-52">
                        {/* <li> */}
                        <Link href="/">Home</Link>
                        {/* </li> */}
                        <li>
                            <Link href="#categories">Categories</Link>
                            <ul className="p-2 max-h-64 overflow-y-scroll my-search-scroll">
                                {
                                    categories.map((category, i) => (
                                        <li key={"cat-" + i}>
                                            <Link href={"/products?category=" + category}>{category}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li>
                            <Link href="/products">Products</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <Link href="/" className="text-md md:text-xl font-bold text-slate-700">
                    Ak-Shop
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 z-[100]">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <details>
                            <summary>Categories</summary>
                            <ul className="p-2 max-h-64 overflow-y-scroll my-search-scroll">
                                {
                                    categories.map((category, i) => (
                                        <li key={"cat-" + i}>
                                            <Link href={"/products?category=" + category}>{category}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </details>
                    </li>
                    <li>
                        <Link href="/products">Products</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default MenuBar;