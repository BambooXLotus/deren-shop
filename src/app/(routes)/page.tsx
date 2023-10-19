import getBillboard from "@/actions/GetBillboard";
import getProducts from "@/actions/GetProducts";
import { Billboard } from "@/components/Billboard";
import { ProductList } from "@/components/ProductList";
import { Container } from "@/components/ui/Container";

export default async function HomePage() {
  const billboard = await getBillboard("clmiegu480009kaycu7e4gvym");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
