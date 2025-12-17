import { fetcher } from "@/lib/fetcher";
import type { CategoryObjectProps, ProductProps, ProductsResponseProps } from "./types";
import type { ProductsFetchParamsProps } from "@/types/index";

const api = process.env.NEXT_PUBLIC_API_URL;

export const getProducts = async ({ limit=0, skip=0 }:ProductsFetchParamsProps)=> {
    return await fetcher<ProductsResponseProps>(`${api}/products?limit=${limit}&skip=${skip}`);
}

export const getProduct = async (id:number)=> {
    return await fetcher<ProductProps>(`${api}/products/${id}`);
}

export const getObjectCategories = async ()=> {
    return await fetcher<CategoryObjectProps[]>(`${api}/products/categories`);
}

export const getStringCategories = async ()=> {
    return await fetcher<string[]>(`${api}/products/category-list`);
}

export const getProductsByCategory = async ({category="",limit=0,skip=0}:ProductsFetchParamsProps)=> {
    return await fetcher<ProductsResponseProps>(`${api}/products/category/${category.toLowerCase()}?limit=${limit}&skip=${skip}`);
}

export const searchProductQuery = async (search:string)=> {
    return await fetcher<ProductsResponseProps>(`${api}/products/search?q=${search}`);
}