// src/data/productsData.ts

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  salePrice: string;
  originalPrice?: string;
  labels: string[];
}

export const products: Product[] = [
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
    labels: ["New", "best seller"],
  },
  {
    id: 3,
    name: "Nordic Seal Omega 2 S4 Nordic Seal Omega 3 S1",
    imageUrl: "/src/assets/images/product 12.png",
    salePrice: "250,- kr",
    originalPrice: "300,- kr",
    labels: ["Best Seller", "-25%"],
  },
  {
    id: 4,
    name: "Nordic Bone Strength Plus Nordic Seal Omega 3 S1",
    imageUrl: "/src/assets/images/product 13.png",
    salePrice: "180,- kr",
    originalPrice: "200,- kr",
    labels: ["-15%", "popular"],
  },
];
