import type { ChangeEvent } from "react";
import ByCategory from "./ByCategory";

type FilterProductsProps = {
    categories:string[];
    category:string;
    setCategoryHandler: (e:ChangeEvent)=> void;
    resetHandler: ()=> void;
}

const FilterProducts = ({ setCategoryHandler, resetHandler, categories, category}: FilterProductsProps) => {
    return (
        <div className="flex-initial md:w-3/12">
            <button className="bg-slate-100 float-end p-1 rounded border text-xs font-bold btn btn-xs" onClick={resetHandler}>Reset</button>
            <ByCategory setCategoryHandler={setCategoryHandler} categories={categories} category={category}/>
        </div>
    );
}
export default FilterProducts;