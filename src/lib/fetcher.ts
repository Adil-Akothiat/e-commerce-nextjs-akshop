import { ApiError } from "./api-errors";

export async function fetcher<TResponse>(url:string, config?:RequestInit) {
    const response = await fetch(url, config);
    if(!response.ok) {
        throw new ApiError(response.status, 'Failed to fetch');
    }
    return response.json() as Promise<TResponse>;
}