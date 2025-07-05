import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { BannerImages } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import Image from "next/image";

interface HeroSectionProps {
  products: BannerImages[];
}

export function HeroSection({ products }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
        setFadeIn(true);
      }, 500);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
      setFadeIn(true);
    }, 500);
  };

  const prevSlide = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide - 1 + products.length) % products.length
      );
      setFadeIn(true);
    }, 500);
  };

  return (
    <section className="relative  h-64 md:h-[400px] 2xl:h-[600px]  text-white py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex ">
          <div className="mb-8 md:mb-0 z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-neoteric tracking-wider text-nowrap">
              Handcrafted Leather Excellence
            </h1>
            <div className="h-20">
              <p
                className={`text-lg mb-6 transition-opacity duration-1000 ${
                  fadeIn ? "opacity-100" : "opacity-0"
                }`}
              >
                {products[currentSlide].name}: Crafted with passion and
                precision
              </p>
            </div>
            <Button
              variant="secondary"
              size="lg"
              className="rounded-none bg-black text-white hover:bg-amber-600 font-bold text-lg cursor-pointer"
            >
              Shop Now <ChevronRight className="ml-2 h-5 w-5 " />
            </Button>
          </div>
          <div className="absolute h-full overflow-hidden top-0 left-0 z-0">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <Image
                    width={1000}
                    height={600}
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    priority
                    className="w-full h-full aspect-18/6 object-cover "
                  />
                  <div className="absolute inset-0 bg-black/30 " />
                </div>
              ))}
            </div>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full"
            >
              <ChevronRight className="h-6 w-6" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
