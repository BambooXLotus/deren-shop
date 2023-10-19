import { type Product } from "@/types";
import { NoResults } from "./NoResults";
import { ProductCard } from "./ProductCard";

type ProductListProps = {
  title: string;
  items: Product[];
};

export const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-3xl font-bold">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((product) => (
          // <div key={product.id}>{product.name}</div>
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
