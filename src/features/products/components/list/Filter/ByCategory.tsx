"use client";
import type { ChangeEvent } from "react";

type ByCategoryProps = {
    categories:string[];
    category:string;
    setCategoryHandler:(e:ChangeEvent)=>void;
}

const ByCategory = ({ setCategoryHandler, categories, category }: ByCategoryProps) => {
    return (
        <div className="mb-4">
            <h4 className="font-bold mb-4">Category:</h4>
            <select
                className="select w-full max-w-xs bg-slate-100"
                onChange={setCategoryHandler}
                value={category}
            >
                {
                    categories.map((category, i) => <option key={i} value={category}>{category}</option>)
                }
            </select>
        </div>
    );
}

export default ByCategory;