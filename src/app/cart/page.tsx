"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store";
import { useRouter } from "next/navigation";
import { updateQuantity, removeItem } from "@/lib/features/cartSlice";
import Title from "@/components/Title";
import { formatCurrency } from "@/utils/formatCurrency";
import { FaTrash } from "react-icons/fa";
import CartTotal from "@/components/CartTotal";

const Cart = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isCartEmpty = cartItems.length === 0;

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="container mx-auto px-4 border-b pb-8 border-amber-600 pt-14">
      <div className="mb-3 text-2xl">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartItems.map((item, index) => {
          const mainImage =
            item.images?.find((img) => img.main)?.url ||
            item.images?.[0]?.url ||
            "";

          return (
            <div
              key={index}
              className="grid py-4 text-gray-700 border-t border-b grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={mainImage} alt={item.name} />
                <div>
                  <p className="text-sm font-medium sm:text-lg">{item.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{formatCurrency(item.price)}</p>
                    {/* {item.size && (
                      <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50">
                        {item.size}
                      </p>
                    )} */}
                  </div>
                </div>
              </div>

              <input
                className="px-1 py-1 border max-w-10 sm:max-w-20 sm:px-2"
                type="number"
                min={1}
                defaultValue={item.quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val) handleQuantityChange(item.id, val);
                }}
              />

              <div
                className="w-4 mr-4 cursor-pointer sm:w-5"
                onClick={() => handleRemove(item.id)}
              >
                <FaTrash />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => router.push("/place-order")}
              className={`px-8 py-3 my-8 text-sm text-white bg-black active:bg-gray-700 ${
                isCartEmpty ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isCartEmpty}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
