import ManageBrands from "@/components/modules/shop/brand";
import { getAllBrands } from "@/services/Brand";
import React from "react";

const ProductBrandPage = async () => {
  const { data, meta } = await getAllBrands();

  console.log(meta);
  return (
    <div>
      <ManageBrands brands={data} />
    </div>
  );
};

export default ProductBrandPage;
