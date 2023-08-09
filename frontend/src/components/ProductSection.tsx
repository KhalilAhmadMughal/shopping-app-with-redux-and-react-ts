import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

import { IProduct } from "../utilities/types";

const ProductSection = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/products").then((res) =>
      res.json().then((data) => setProducts(data))
    );
  }, []);

  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.map((currentProduct: IProduct, index: number) => (
        <ProductCard key={currentProduct.id} product={currentProduct} />
      ))}
    </section>
  );
};

export default ProductSection;

// {props.products.map((currProduct) => (
//     <div
//       key={currProduct.id + "-" + currProduct.type}
//       className="flex justify-center my-4"
//     >
//       <ProductCard product={currProduct} />
//     </div>
//   ))}
