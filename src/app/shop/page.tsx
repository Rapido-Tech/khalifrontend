"use client";

import React, { useEffect, useState, ChangeEvent } from "react";
import ListProductItem from "@/components/ListProductItem";
import Title from "@/components/Title";
import { ChevronLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//import { useProducts } from "@/hooks/useProducts";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import products from "@/utils/data/products";
import { Card } from "@/components/ui/card";
import categories from "@/utils/data/category";
import { addItem } from "@/lib/features/cartSlice";
import { Product } from "@/types";

const Collection: React.FC = () => {
  //const { products, isLoading, error } = useProducts();
  const dispatch = useDispatch();

  const search = useSelector((state: RootState) => state.search.searchQuery);
  const showSearch = useSelector(
    (state: RootState) => state.search.isSearchOpen
  );

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);
  const [category, setCategory] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("name");

  const toggleCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...products];

    if (showSearch && search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    setFilterProducts(filtered);
  };

  const sortProduct = () => {
    const sorted = [...filterProducts];
    switch (sortBy) {
      case "price-low":
        setFilterProducts(sorted.sort((a, b) => a.price - b.price));
        break;
      case "price-high":
        setFilterProducts(sorted.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addItem(product));
  };

  const clearFilters = () => {
    setCategory([]);
  };

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortBy]);

  //   if (isLoading) return <div>Loading...</div>;
  //   if (error) return <div>Error loading products: {error.message}</div>;

  return (
    <div className="flex flex-col gap-1 pt-10 sm:flex-row sm:gap-10 container mx-auto px-4 border-b pb-8 border-amber-600">
      {/* FILTERS */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="flex items-center gap-2 my-2 text-xl cursor-pointer"
        >
          FILTERS
          <div className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}>
            <ChevronLeft className="h-6 w-6" />
          </div>
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {categories.map((cat) => (
              <label key={cat.id} className="flex gap-2 cursor-pointer">
                <input
                  className="w-3"
                  type="checkbox"
                  value={cat.name}
                  onChange={toggleCategory}
                  checked={category.includes(cat.name)}
                />
                {cat.name}
              </label>
            ))}
          </div>
        </div>

        <button
          className={`px-4 py-2 mt-1 text-white bg-black rounded hover:bg-gray-900 ${
            showFilter ? "block" : "hidden"
          } sm:block`}
          onClick={clearFilters}
        >
          Clear Filters
        </button>
      </div>

      {/* PRODUCTS */}
      <div className="flex-1 ">
        <div className="flex justify-between mb-4 text-base sm:text-2xl">
          <h1 className="text-3xl font-bold text-amber-900 font-neoteric">
            Products
          </h1>
          <div className="flex items-center space-x-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          {filterProducts.map((item) => (
            <Card
              key={item._id}
              className="overflow-hidden hover:shadow-lg rounded-none py-0 transition-shadow duration-300 border-amber-600"
            >
              <ListProductItem item={item} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
