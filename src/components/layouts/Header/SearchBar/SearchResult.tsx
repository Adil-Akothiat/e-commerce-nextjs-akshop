"use client";
import type { ProductProps } from "@/features/products/api/types";
import Image from "next/image";
import Link from "next/link";

type SearchResultProps = {
    searchInput:string;
    products:ProductProps[];
    closeSearch: ()=> void;
    loading:boolean;
    error:Error|null;
}

const SearchResult = ({ products, closeSearch, loading, searchInput, error}: SearchResultProps) => {
    const notFound = products.length == 0 && searchInput != "";

    if (loading) {
        return (
            <div className="fixed left-0 top-36 w-full bg-white border-t z-[100]">
                <div className="w-4/5 mx-auto p-2">
                    <span className="block loading loading-spinner loading-md mx-auto"></span>
                </div>
            </div>
        )
    }

    return (
        <div className="fixed left-0 top-36 w-full h-full bg-white z-[100]">
            <div className={`my-search-scroll grid grid-cols-2 absolute h-full w-4/5 mx-auto gap-4 md:grid-cols-3 mb-20 ${!notFound ? "overflow-y-scroll":""} left-1/2 p-4`} style={{transform:"translateX(-50%)"}}>
                {
                    error ? <p className="text-red-700">Failed to fetch.</p> : notFound ? <p>Item is not exists in AkShop!</p> :
                        products.map((p, i) => (
                            <Link 
                                href={"/products/" + p.id} key={"prd-" + i}
                                onClick={closeSearch}
                                className={i===products.length-1?"mb-64":""}
                            >
                                <div className="grid grid-cols-1 gap-y-3">
                                    <div className="border p-2 rounded-md">
                                        <Image
                                            src={p.thumbnail}
                                            alt={p.title}
                                            width="0"
                                            height="0"
                                            className="w-4/5 h-32 object-contain mx-auto"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="">{p.title}</h4>
                                        <h5 className="font-bold">{(p.price -  ((p.price * p.discountPercentage) / 100)).toFixed(2)} USD</h5>
                                        <h5 className="font-bold line-through text-stone-300">{p.price.toFixed(2)}</h5>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </div>
        </div>
    );

}

export default SearchResult;