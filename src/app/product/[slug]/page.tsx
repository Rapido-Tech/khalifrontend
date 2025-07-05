"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/formatCurrency";
import {
  MessageCircle,
  ShoppingCart,
  Star,
  Minus,
  Plus,
  ArrowLeft,
} from "lucide-react";

import Link from "next/link";
import type { Product } from "@/types";
import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/cartSlice";

export default function ProductPage() {
  const params = useParams();
  const productSlug = params.slug;
  //const product = allProducts[productId];
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addItem(product));
  };

  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hi! I'm interested in ordering the ${
      product.name
    } for ${formatCurrency(product.price)}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/254123456789?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  //   if (!product) {
  //     return (
  //       <div className="min-h-screen bg-gray-50">
  //         <Header />
  //         <div className="container mx-auto px-4 py-16 text-center">
  //           <h1 className="text-2xl font-bold text-gray-900 mb-4">
  //             Product Not Found
  //           </h1>
  //           <Link href="/shop">
  //             <Button>Back to Shop</Button>
  //           </Link>
  //         </div>
  //         <Footer />
  //       </div>
  //     );
  //   }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/shop"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          {/* <div className="space-y-4">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                />
              ))}
            </div>
          </div> */}

          {/* Product Details */}
          {/* <div className="space-y-6">
            <div>
             
              <h1 className="text-3xl font-bold text-amber-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-gray-600">(24 reviews)</span>
              </div>
              <p className="text-3xl font-bold text-amber-800">
                {formatCurrency(product.price)}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-amber-900">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                This exquisite {product.name.toLowerCase()} is handcrafted from
                premium leather using traditional techniques. Each piece is
                unique and built to last, developing a beautiful patina over
                time. Perfect for daily use or as a special gift.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 text-amber-900">
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>100% genuine leather</li>
                <li>Handcrafted by skilled artisans</li>
                <li>Durable construction</li>
                <li>Develops beautiful patina over time</li>
                <li>Perfect for daily use</li>
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <span className="text-lg font-semibold text-amber-900">
                Quantity:
              </span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 font-semibold">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg rounded-none"
                onClick={handleAddToCart(product)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart - {formatCurrency(product.price * quantity)}
              </Button>
              <Button
                variant="outline"
                className="w-full border-green-500 text-green-600 hover:bg-green-50 py-3 text-lg bg-transparent rounded-none"
                onClick={handleWhatsAppOrder(product)}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Order via WhatsApp
              </Button>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h4 className="font-semibold text-amber-900 mb-2">
                Free Shipping
              </h4>
              <p className="text-sm text-gray-600">
                Free shipping on orders over {formatCurrency(10000)}. Delivery
                within 3-5 business days.
              </p>
            </div>
          </div> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
