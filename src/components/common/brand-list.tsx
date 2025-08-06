"use client";

import Image from "next/image";
import Link from "next/link";

const BrandList = () => {
  const brands = [
    { name: "Nike", logo: "/nike-brand.svg" },
    { name: "Adidas", logo: "/adidas-brand.svg" },
    { name: "Puma", logo: "/puma-brand.svg" },
    { name: "New Balance", logo: "/newbalance-brand.svg" },
    { name: "Converse", logo: "/converse-brand.svg" },
    { name: "Polo", logo: "/ralph-lauren-brand.svg" },
    { name: "Zara", logo: "/zara-brand.svg" },
  ];

  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">Marcas parceiras</h3>
      <div className="flex w-full gap-6 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center gap-y-4">
            <div className="h-[82px] w-[82px] rounded-3xl border-1 p-6">
              <Link href="/">
                <Image
                  className="h-full"
                  src={brand.logo}
                  alt={brand.name}
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <p className="truncate text-sm font-medium">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandList;
