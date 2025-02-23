import AllProducts from "@/components/modules/products";
import ProductBanner from "@/components/modules/products/banner";
import CategoryCard from "@/components/ui/core/CategoryCard";
import NMContainer from "@/components/ui/core/NMContainer";
import { getAllCategories } from "@/services/Category";
import { getAllProducts } from "@/services/Product";
import { ICategory } from "@/types";
import React from "react";

const AllProductPage = async () => {
  const { data: categories } = await getAllCategories();

  const {data: products} = await getAllProducts()

  return (
    <NMContainer>
      <ProductBanner title="All products" path="Home - Products" />
      <h2 className="text-xl font-bold my-5">Featured Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
        {Array(12)
          .fill(categories?.[0])
          .map((category: ICategory, idx: number) => (
            <CategoryCard key={idx} category={category} />
          ))}
      </div>
      <AllProducts products={products} />
    </NMContainer>
  );
};

export default AllProductPage;
