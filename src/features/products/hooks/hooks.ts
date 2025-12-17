"use client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getObjectCategories, getStringCategories, getProduct, getProducts, searchProductQuery, getProductsByCategory } from "../api/api";
import type { CategoryObjectProps, ProductProps, ProductsResponseProps } from "../api/types";
import type { ProductsFetchParamsProps } from "@/types";

export function useProducts(limit:number, skip:number) {
    return useSuspenseQuery<ProductsResponseProps>({
        queryFn: ()=> getProducts({limit, skip}),
        queryKey: ['products', limit, skip],
        staleTime: 1000*60*2,
    })
}

export function useProduct ({ id }: {id:number}) {
    return useQuery<ProductProps>({
        queryFn: ()=> getProduct(id),
        queryKey: ['product', id],
        staleTime: 1000*60*2
    });
}

export function useObjectCategoriesQuery () {
    return useSuspenseQuery<CategoryObjectProps[]>({
        queryFn: ()=> getObjectCategories(),
        queryKey: ['categories', 'objects'],
        staleTime: 1000*60*2,
    });
}

export function useStringCategoriesQuery () {
    return useSuspenseQuery<string[]>({
        queryFn: ()=> getStringCategories(),
        queryKey: ['categories', 'strings'],
        staleTime: 1000*60*2,
    });
}

export function useProductsByCategory ({category="", limit=0, skip=0}:ProductsFetchParamsProps) {
    return useQuery<ProductsResponseProps>({
         queryFn: ()=> getProductsByCategory({ category, limit, skip }),
        queryKey: ['products', 'category', category, skip, limit],
        staleTime: 1000*60*2
    });
}

export function useSearchProductsQuery (search:string) {
    return useQuery<ProductsResponseProps>({
        queryFn: ()=> searchProductQuery(search),
        queryKey: ['products', 'search', search],
        staleTime: 1000*60*2
    });
}