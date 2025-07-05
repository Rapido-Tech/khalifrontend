import type { Category } from "@/types";

interface CategoriesSectionProps {
  categories: Category[];
}

export function CategoriesSection({ categories }: CategoriesSectionProps) {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 border-b pb-8 border-amber-600">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-800 font-neoteric tracking-wider">
          Our Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full border-2 border-amber-600 overflow-hidden mb-2">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full aspect-square object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-center text-amber-900 font-neoteric tracking-wider">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
