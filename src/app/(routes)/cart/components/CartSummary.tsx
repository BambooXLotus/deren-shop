import Button from "@/components/ui/Button";
import { Currency } from "@/components/ui/Currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

type CartSummaryProps = {
  id?: string;
};

type CheckoutResponse = {
  url: string;
};

export const CartSummary: React.FC<CartSummaryProps> = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed.");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Payment error.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  async function onCheckout() {
    const productIds = items.map((item) => item.id);

    const response = await axios.post<CheckoutResponse>(
      `${process.env.API_URL}/checkout`,
      {
        productIds,
      },
    );

    window.location = response.data.url;
  }

  return (
    <div className="mt-16 rounded-lg bg-gray-200 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="mt-6 w-full" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};
