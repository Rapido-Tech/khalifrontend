import useSWR from "swr";
import { Product } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  });

export function useProducts() {
  const { data, error, isLoading } = useSWR<Product[]>(
    "/api/products",
    fetcher
  );

  return {
    products: data || [],
    isLoading,
    error,
  };
}
