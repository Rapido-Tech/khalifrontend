import useSWR from "swr";
import { Product } from "@/types";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  });

//const API_URL = "https://api.khalifacrafted.store/api/v1";
const API_URL = "http://localhost:4000/api/v1";

export function useProducts() {
  const { data, error, isLoading } = useSWR<Product[]>(`${API_URL}`, fetcher);

  return {
    products: data || [],
    isLoading,
    error,
  };
}
