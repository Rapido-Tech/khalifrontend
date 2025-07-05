import React from "react";
import { RootState } from "@/lib/store";
import Title from "./Title";
import { useSelector } from "react-redux";
import { CartItem } from "@/lib/features/cartSlice";
import { formatCurrency } from "@/utils/formatCurrency";

const CartTotal = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  function calculateTotals(items: CartItem[]) {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return { total, itemCount };
  }

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p className="text-lg font-medium">Sub Total</p>
          <p className="text-lg font-medium">
            {formatCurrency(calculateTotals(cartItems).total)}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-lg font-medium">Shipping Fee</p>
          <p className="text-lg font-medium">{formatCurrency(0)}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p className="text-2xl font-semibold">Total Amount</p>
          <p className="text-2xl font-semibold">
            {formatCurrency(calculateTotals(cartItems).total + 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
