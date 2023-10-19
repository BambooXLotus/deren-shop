"use client";

import { currencyFormatter } from "@/lib/utils";
import { useEffect, useState } from "react";

type CurrencyProps = {
  value?: string | number;
};

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="font-semibold">
      {currencyFormatter.format(Number(value))}
    </div>
  );
};
