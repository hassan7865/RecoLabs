import Image from "next/image";
import React from "react";

const brandsData: { id: string; srcUrl: string }[] = [
  {
    id: "versace",
    srcUrl: "/icons/versace-logo.svg",
  },
  {
    id: "zara",
    srcUrl: "/icons/zara-logo.svg",
  },
  {
    id: "gucci",
    srcUrl: "/icons/gucci-logo.svg",
  },
  {
    id: "prada",
    srcUrl: "/icons/prada-logo.svg",
  },
  {
    id: "calvin-klein",
    srcUrl: "/icons/calvin-klein-logo.svg",
  },
];

const Brands = () => {
  return (
    <div className="bg-[#74E291] py-8">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
          {brandsData.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center h-14 sm:h-16"
            >
              <Image
                priority
                src={brand.srcUrl}
                alt={brand.id}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
