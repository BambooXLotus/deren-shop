"use client";

import { Currency } from "@/components/ui/Currency";
import { IconButton } from "@/components/ui/IconButton";
import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { type Product } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { type MouseEventHandler } from "react";

type ProductCardProps = {
  data: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter();
  const previewModal = usePreviewModal();
  const cart = useCart();

  function handleClick() {
    router.push(`/product/${data.id}`);
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      className="group cursor-pointer space-y-4 rounded-xl border bg-white p-3"
      onClick={handleClick}
    >
      <div className="relative aspect-square rounded-xl bg-gray-100">
        {data.images[0] && (
          <Image
            src={data.images[0].url}
            fill
            alt="Image"
            className="aspect-square rounded-md object-cover"
          />
        )}
        <div className="absolute bottom-5 w-full px-6 opacity-0 transition group-hover:opacity-100">
          <div className="flex justify-center gap-x-6">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};
