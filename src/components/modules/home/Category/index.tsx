import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/core/CategoryCard";
import { getAllCategories } from "@/services/Category";
import { ICategory } from "@/types";
import Link from "next/link";

const Category = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <div className="container mx-auto my-16 px-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        <h2 className="font-bold text-2xl text-center sm:text-left">
          Category
        </h2>
        <Link href={"/products"}>
          <Button variant="outline" className="rounded-full">
            View All
          </Button>
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
        {Array(12)
          .fill(categories?.[0])
          .map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
      </div>
    </div>
  );
};

export default Category;
