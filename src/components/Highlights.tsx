import { useEffect, useState } from "react";
import Button from "./Button";
import productsData from "../data/products.json";
import { Product } from "../interfaces/interfaces";
import Card from "./Card";

const Highlights = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    return setProducts(productsData.products as Product[]);
  }, []);

  return (
    <section className="max-w-4xl mx-auto px-4 py-6 lg:pt-40">
      <header className="flex items-center justify-between flex-col gap-y-3 lg:flex-row">
        <h2 className="font-heading text-5xl font-medium">
          This week specials!
        </h2>
        <Button text="Online Menu" onClick={() => {}} />
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-9">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </section>
    </section>
  );
};

export default Highlights;
