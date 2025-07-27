"use client";

import Head from "next/head";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import type { BannerImages, Category, Product } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { useSectionsWithProducts } from "@/utils/data/products";
import MainCarousel from "@/components/HeroCarousel/MainCarousel";

/* sample data … */
const BannerImages: BannerImages[] = [
  {
    name: "Leather Wallet",
    image: "/assets/herosection/belts_wallet.jpg",
  },
  {
    name: "Handcrafted Belt",
    image: "/assets/herosection/belts.jpg",
  },
  {
    name: "Leather Watch Strap",
    image: "/assets/herosection/passport.jpg",
  },
  {
    name: "Leather Bag",
    image: "/assets/herosection/wallet.jpg",
  },
  {
    name: "Laptop Sleeve",
    image: "/assets/images/craftedwatchstrips.jpg",
  },
  {
    name: "Leather Umbrella",
    image: "/assets/images/craftedwallet.jpg",
  },
  {
    name: "Custom Piece",
    image: "/assets/images/craftedbelts.jpg",
  },
];

const categories: Category[] = [
  { name: "Belts", image: "/assets/images/belts.jpg" },

  {
    name: "Wallets",
    image: "/assets/images/wallets.jpg",
  },
  { name: "Bags", image: "/assets/images/bags.jpg" },
  {
    name: "Clothes",
    image: "/assets/images/laptopsleeves.jpg",
  },

  {
    name: "Watch Straps",
    image: "/assets/images/customproducts.jpg",
  },
  {
    name: "Umbrellas",
    image: "/assets/images/umbrella.jpg",
  },
];

export default function HomePage() {
  const { products, error, loading } = useSectionsWithProducts();

  return (
    <div className="min-h-screen ">
      <Head>
        <title>Khalifa Crafted - Handcrafted Leather Excellence</title>
        <meta
          name="description"
          content="Discover handcrafted leather goods of exceptional quality at Khalifa Crafted. From wallets to bags, each piece is crafted with passion and precision."
        />
      </Head>

      {/* <HeroSection products={BannerImages} /> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden ">
        <video
          className=" h-[80vh] object-cover
           z-10 aspect-video box-border"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/khalif01.mp4" type="video/mp4" />
        </video>
        <video
          className=" h-[80vh] object-cover
           z-10 aspect-video box-border"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/khalifa02.mp4" type="video/mp4" />
        </video>{" "}
        <video
          className=" h-[80vh] object-cover
           z-10 aspect-video box-border"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/khalifa03.mp4" type="video/mp4" />
        </video>{" "}
        <video
          className=" h-[80vh] object-cover
           z-10 aspect-video box-border"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/videos/khalif01.mp4" type="video/mp4" />
        </video>
      </div> */}

      <MainCarousel />

      <CategoriesSection categories={categories} />

      <FeaturedProducts products={products || []} />

      <WhyChooseUsSection />

      {/* Custom order section */}
      <section className="py-20 md:py-36 2xl:py-52 bg-gradient-to-br from-amber-800 via-amber-700 to-amber-600 text-white relative overflow-hidden bg-[url('/assets/images/watches.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 drop-shadow-lg font-neoteric tracking-wider cursor-default">
              Create Your Custom Piece
            </h2>
            <p className="mb-8 md:text-xl text-amber-600 drop-shadow-md leading-relaxed cursor-default">
              Have a unique idea? Let's bring it to life together.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-amber-50 font-semibold px-8 py-3 rounded-none cursor-pointer"
            >
              Start Custom Order
            </Button>
          </div>
        </div>
      </section>
      {/* 
      <TestimonialsSection /> */}

      {/* Social links */}
      <section className="py-8 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 text-center">followUs</h2>
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com/khalifacrafted"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-amber-600"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com/khalifacrafted"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-amber-600"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com/khalifacrafted"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-800 hover:text-amber-600"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
