"use client";

import { useState } from "react";
import { ShoppingCart, Search, Menu, X, User2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <header className=" shadow-sm">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            <Link href="/" className="text-2xl font-bold">
              <Image
                src="/assets/khalidLogo.png"
                alt="Khalid Crafted Logo"
                width={120}
                height={80}
              />
            </Link>
          </div>
          <nav
            className={`lg:flex items-center space-x-8 ${
              isMenuOpen
                ? "block absolute top-16 left-0 right-0 bg-amber-800 p-4 z-50"
                : "hidden"
            } lg:relative lg:top-0 lg:bg-transparent lg:p-0`}
          >
            <Link
              href="/"
              className="block py-2 hover:text-amber-200 text-lg font-bold"
            >
              HOME
            </Link>
            <Link
              href="/shop"
              className="block py-2 hover:text-amber-200 text-lg font-bold"
            >
              SHOP
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-amber-200 text-lg font-bold"
            >
              ABOUT
            </Link>
            <Link
              href="/about"
              className="block py-2 hover:text-amber-200 text-lg font-bold"
            >
              GARALLEY
            </Link>
            <Link
              href="/contact"
              className="block py-2 hover:text-amber-200 text-lg font-bold"
            >
              CONTACT
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Search className="h-5.5 w-5.5" />
            <User2 className="h-5.5 w-5.5" />
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5.5 w-5.5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
