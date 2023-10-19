"use client";

import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

type NavbarActionsProps = {
  id?: string;
};

export const NavbarActions: React.FC<NavbarActionsProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-zinc-900 px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};
