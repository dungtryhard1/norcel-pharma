import { Badge } from "antd";
import React from "react";

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  salePrice: string;
  originalPrice?: string;
  labels: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Nordic Seal Omega 3 S1 Nordic Seal Omega 3 S1",
    imageUrl: "/src/assets/images/product 10.png",
    salePrice: "165,- kr",
    originalPrice: "200,- kr",
    labels: ["Popular"],
  },
  {
    id: 2,
    name: "Nordic Seal Omega 3 Kids Nordic Seal Omega 3 S1",
    imageUrl: "/src/assets/images/product 11.png",
    salePrice: "312,- kr",
    labels: ["New"],
  },
  {
    id: 3,
    name: "Nordic Seal Omega 2 S4 Nordic Seal Omega 3 S1",
    imageUrl: "/src/assets/images/product 12.png",
    salePrice: "250,- kr",
    originalPrice: "300,- kr",
    labels: ["Best Seller"],
  },
  {
    id: 4,
    name: "Nordic Bone Strength Plus Nordic Seal Omega 3 S1",
    imageUrl: "/src/assets/images/product 13.png",
    salePrice: "180,- kr",
    originalPrice: "200,- kr",
    labels: ["-15%"],
  },
];

const RecommendedProducts: React.FC = () => {
  return (
    <div className="mt-14">
      <p className="text-center font-titleFont text-5xl leading-[62px] text-mainColor">
        Recommended Products
      </p>
      <div className="list-products container mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-body relative aspect-[4/5] w-full bg-gray-100">
              <div className="product-image-wrapper absolute left-0 top-0 flex h-full w-full items-center justify-center">
                <img
                  className="product-image"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <div className="product-label-wrapper absolute left-2 top-2 flex flex-col gap-1">
                  {product.labels.map((label, index) => {
                    let bgColor = "";
                    switch (label) {
                      case "Popular":
                        bgColor = "bg-[#FF9807]"; // màu cho "Popular"
                        break;
                      case "New":
                        bgColor = "bg-[#00C566]"; // màu cho "New"
                        break;
                      case "Best Seller":
                        bgColor = "bg-[#1580FA]"; // màu cho "Best Seller"
                        break;
                      default:
                        bgColor = "bg-[#FF4747]"; // màu mặc định
                    }

                    return (
                      <Badge
                        key={index}
                        className={`${bgColor} rounded-full px-3 py-[6px] text-xs font-medium uppercase text-white`}
                      >
                        {label}
                      </Badge>
                    );
                  })}
                </div>
              </div>
              {product.id === 1 && (
                <div className="absolute bottom-0 w-full bg-mainColor">
                  <marquee>
                    <div className="px-3 py-2 text-xs font-light text-white">
                      Free shipping on kr 35+ <span className="mx-2">•</span>{" "}
                      SALE 30% ALL PRODUCTS
                    </div>
                  </marquee>
                </div>
              )}
            </div>
            <p className="product-name mt-6 text-lg font-bold text-mainColor">
              {product.name}
            </p>
            <div className="product-info mb-5 flex gap-3 text-lg">
              <span className="product-sale font-bold text-red-600">
                {product.salePrice}
              </span>
              {product.originalPrice && (
                <span className="product-before-sale font-medium text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
