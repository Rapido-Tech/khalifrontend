// import { Product } from "@/types";
// import axios from "axios";
// import useSWR from "swr";

// // Fetch function for sections with products
// export const fetchProducts = async (): Promise<Product[]> => {
//   try {
//     const response = await axios.get(
//       `https://api.khalifacrafted.store/api/v1/products`,
//       {
//         withCredentials: true,
//       }
//     );
//     console.log("API Response from fetchProducts:", response.data); // Log data here
//     return response.data; // Ensure the response is returned as an array of Product objects
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     throw error; // Throw error so SWR can handle it
//   }
// };

// // Custom hook to fetch sections and manage loading/error states
// export const useSectionsWithProducts = () => {
//   const {
//     data: products,
//     error,
//     isLoading,
//   } = useSWR<Product[]>(fetchProducts, {
//     refreshInterval: 10000,
//   });

//   // Log data and error on each render to track updates
//   console.log("Product from SWR:", products, error);

//   // Loading state
//   const loading = isLoading || !products;

//   // To debug the flow
//   if (loading) {
//     console.log("Data is still loading...");
//   } else if (error) {
//     console.log("There was an error:", error);
//   } else {
//     console.log("Data loaded successfully:", products);
//   }

//   return {
//     products,
//     error,
//     loading,
//   };
// };

// export const products = [
//   {
//     _id: "1",
//     name: "Passport Holder",
//     price: 299.99,
//     discount: 15,
//     category: "Bags",
//     sizes: ["One Size"],
//     colors: ["#3E2C1C", "#000", "#B5651D"],
//     images: [
//       { url: "/images/products/leather-messenger-bag.jpg", main: false },
//       { url: "/assets/herosection/passport_holder.jpg", main: true },
//     ],
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
//   },
//   {
//     _id: "2",
//     name: "Handcrafted Leather Wallet",
//     price: 89.99,
//     category: "Wallets",
//     sizes: ["One Size"],
//     colors: ["#000", "#5B3A29", "#A0522D"],
//     images: [
//       { url: "/images/products/leather-messenger-bag.jpg", main: false },
//       { url: "/assets/images/watches.jpg", main: true },
//     ],
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
//   },
//   {
//     _id: "3",
//     name: "Leather Travel Duffle",
//     price: 449.99,
//     category: "Travel",
//     sizes: ["One Size"],
//     colors: ["#3B2F2F", "#7B3F00"],
//     images: [
//       { url: "/images/products/leather-travel-duffle.jpg", main: false },
//       { url: "/assets/images/watches.jpg", main: true },
//     ],
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
//   },
//   {
//     _id: "4",
//     name: "Leather Tech Organizer",
//     price: 129.99,
//     category: "Accessories",
//     sizes: ["One Size"],
//     colors: ["#6B4226", "#1C1C1C"],
//     images: [
//       { url: "/images/products/leather-tech-organizer.jpg", main: false },
//       { url: "/assets/images/watches.jpg", main: true },
//     ],
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
//   },
//   {
//     _id: "5",
//     name: "Leather Card Holder",
//     price: 49.99,
//     category: "Wallets",
//     sizes: ["One Size"],
//     colors: ["#000", "#4B3621"],
//     images: [
//       { url: "/images/products/leather-card-holder.jpg", main: false },
//       { url: "/assets/images/watches.jpg", main: true },
//     ],
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
//   },
//   {
//     _id: "6",
//     name: "Leather Laptop Sleeve",
//     price: 159.99,
//     discount: 10,
//     category: "Accessories",
//     sizes: ["13-inch", "15-inch"],
//     colors: ["#1E1E1E", "#5D3A00"],
//     images: [
//       { url: "/images/products/leather-laptop-sleeve.jpg", main: false },
//       { url: "/assets/images/watches.jpg", main: true },
//     ],
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.",
//   },
// ];

import { Product } from "@/types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://api.khalifacrafted.store/api/v1/products";
//const API_URL = "http://localhost:5000/api/v1/products";

// Fetch function for sections with products
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get(`${API_URL}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Custom hook to fetch sections and manage loading/error states

export const useSectionsWithProducts = () => {
  const {
    data: products,
    error,
    isLoading,
    isError,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["products"], // Unique query key
    queryFn: fetchProducts, // Fetch function
    refetchOnWindowFocus: true, // Refetch when window gains focus
    refetchOnMount: true, // Refetch when the component mounts
    retry: 3, // Optionally retry failed requests
    staleTime: 0, // Data is considered always stale
    //cacheTime: 1000 * 60 * 5, // Cache time (default 5 mins)
  });

  // Loading and error states
  const loading = isLoading;

  // if (loading) {
  //   console.log("Data is still loading...");
  // } else if (error) {
  //   console.log("There was an error:", error);
  // } else {
  //   console.log("Data loaded successfully:", products);
  // }

  return {
    products,
    error,
    loading,
  };
};
