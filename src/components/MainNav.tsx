"use client";

import { usePathname } from "next/navigation";

type MainNavProps = {
  data: any;
};

export const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  return <div>MainNav</div>;
};
