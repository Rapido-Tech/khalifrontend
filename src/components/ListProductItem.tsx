//import { some } from "lodash";

import Link from "next/link";

import type { Product } from "@/types";

import Image from "next/image";
import { MessageCircle, ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/cartSlice";
import { formatCurrency } from "@/utils/formatCurrency";
import { CardContent } from "./ui/card";

const ListProductItem = ({ item }: { item: Product }) => {
  //const { favProducts } = useSelector((state: RootState) => state.user);

  //const isFavourite = some(favProducts, (productId) => productId === id);

  //   const toggleFav = () => {
  //     dispatch(
  //       toggleFavProduct({
  //         id,
  //       })
  //     );
  //   };

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

  const mainImage =
    item.images.find((img) => img.main)?.url || item.images[0].url;

  return (
    <div className="product-item">
      <div className="relative group">
        <Link href={`/product/${name}`}>
          <Image
            width={300}
            height={200}
            src={mainImage}
            alt={item.name}
            className="aspect-auto object-cover w-full h-48  group-hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </Link>
        <button
          //onClick={() => handleWhatsAppOrder(product)}
          className="absolute top-2 right-2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          title="Order via WhatsApp"
        >
          <MessageCircle className="h-4 w-4" />
        </button>
      </div>
      <CardContent className="p-4">
        <Link href={`/product/${item.name}`}>
          <h3 className="text-lg font-semibold mb-2 text-amber-900 hover:text-amber-700 cursor-pointer line-clamp-2 font-neoteric">
            {item.name}
          </h3>
        </Link>
        <p className="text-xl font-bold text-amber-800 mb-3">
          {formatCurrency(item.price)}
        </p>
        <div className="flex flex-col gap-2">
          <Button
            className="w-full bg-amber-600 hover:bg-amber-700 rounded-none text-white"
            onClick={() => handleAddToCart(item)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button
            variant="outline"
            className="w-full border-green-500 rounded-none text-green-600 hover:bg-green-50 bg-transparent"
            onClick={() => handleWhatsAppOrder(item)}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
        </div>
      </CardContent>
    </div>
  );
};

export default ListProductItem;
