"use client";
import { useEffect, useState, type ChangeEvent } from "react";
import ProductCard from "./components/shared/ProductCard";
import Pagination from "./components/list/Pagination";
import FilterProducts from "./components/list//Filter";
import { SecondaryLoader } from "@/components/ui/loaders";
import { useProductsByCategory, useStringCategoriesQuery } from "./hooks/hooks";
import { useSearchParams } from "next/navigation";

const ITEM_PER_PAGE = 6;
const ProductList = () => {
  const { data:categories } = useStringCategoriesQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<string|"">(searchParams.get("category")||categories[0]||"")
  const { data:productResponse, isFetching } = useProductsByCategory({ skip:(currentPage-1) * ITEM_PER_PAGE, limit:ITEM_PER_PAGE, category });
  const total = productResponse?.total||1;
  const products = productResponse?.products||[];
  
  const totalPages = Math.ceil(total / ITEM_PER_PAGE);

  const nextPageHandler = ()=> {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage+1);
    }
  }
  const previousPageHandler = ()=> {
    if(currentPage > 1) {
      setCurrentPage(currentPage-1);
    }
  }
  const setCategoryHandler = (e: ChangeEvent)=> {
    const select = e.target as HTMLSelectElement;
    setCategory(select.value);
    setCurrentPage(1);
    }
  useEffect(()=> {
    window.scrollTo({ top:0, behavior:"smooth" });
  } ,[currentPage, category])
  return (
    <div className="md:flex justify-between gap-x-6 my-10 px-4 md:px-10 lg:px-16 xl:px-24">
      <FilterProducts 
        category={category}
        categories={categories}
        setCategoryHandler={setCategoryHandler} 
        resetHandler={()=> {setCategory(categories[0]||"")}}
      />
      <div className="flex-initial md:w-9/12 relative min-h-64">
        <p className="w-fit ml-auto my-3">Total Items: {total}</p>
        {isFetching ? (
          <SecondaryLoader />
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 mb-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product?.id} product={product} />
              ))
            ) : <p>The products doesn't exist!</p> 
            }
          </div>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          nextPageHandler={nextPageHandler}
          previousPageHandler={previousPageHandler}
        />
      </div>
    </div>
  );
};
export default ProductList;