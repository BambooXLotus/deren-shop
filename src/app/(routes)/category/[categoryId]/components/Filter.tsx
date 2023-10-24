"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { type Color, type Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

type FilterProps = {
  data: (Size | Color)[];
  label: string;
  valueKey: string;
};

export const Filter: React.FC<FilterProps> = ({ data, label, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  function onClick(id: string) {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{label}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md border border-gray-300 bg-white p-2 text-sm text-gray-800",
                selectedValue === filter.id && "bg-black text-white",
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};