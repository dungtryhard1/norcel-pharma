import { Badge } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, openCartModal } from "../redux/slice/cartSlice";
import { useGetAllProductsQuery } from "../redux/slice/productApi";
import { RootState } from "../redux/store/Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const RecommendedProducts: React.FC = () => {
  const [isLoadingAddProduct, setisLoadingAddProduct] = useState(false);
  console.log("checkkkk", isLoadingAddProduct);

  const { items: products } = useSelector((state: RootState) => state.products);

  const { data, error, isLoading } = useGetAllProductsQuery(undefined);
  console.log("Api", data, error, isLoading);

  const dispatch = useDispatch();

  const handleAddToCart = (product: any) => {
    setisLoadingAddProduct(true);
    setTimeout(() => {
      dispatch(openCartModal());
      dispatch(addToCart(product));
      setisLoadingAddProduct(false);
    }, 500);
  };

  return (
    <div className="mt-14">
      <p className="text-center font-titleFont text-5xl leading-[62px] text-mainColor">
        Recommended Products
      </p>
      {isLoading ? (
        <div className="mt-16 text-center">
          <FontAwesomeIcon icon={faSpinner} spin />
        </div>
      ) : (
        <div className="container mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-item transform cursor-pointer transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
            >
              <div className="relative aspect-[4/5] w-full bg-gray-100">
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                  <img src={product.imageUrl} alt={product.name} />
                  <div className="absolute left-2 top-2 flex gap-1">
                    {product.labels.map((label, index) => {
                      let bgColor = "";

                      // Các logic khác cho từng label
                      switch (label.toLowerCase()) {
                        case "popular":
                          bgColor = "bg-[#FF9807]"; // màu cho "Popular"
                          break;
                        case "new":
                          bgColor = "bg-[#00C566]"; // màu cho "New"
                          break;
                        case "best seller":
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
                {product.haveMarquee && (
                  <div className="absolute bottom-0 w-full bg-mainColor">
                    <marquee>
                      <div className="px-3 py-2 text-xs font-light text-white">
                        Free shipping on kr 35+ <span className="mx-2">•</span>{" "}
                        SALE 30% ALL PRODUCTS
                      </div>
                    </marquee>
                  </div>
                )}
                <button
                  className={`add-to-cart-btn absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-[32px] bg-mainColor px-6 py-2 text-white transition-all ${
                    isLoadingAddProduct ? "cursor-not-allowed" : ""
                  }`}
                  onClick={() => handleAddToCart(product)}
                >
                  {isLoadingAddProduct ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                  ) : (
                    <p>Add to cart</p>
                  )}
                </button>
              </div>
              <p className="mt-6 text-lg font-bold text-mainColor">
                {product.name}
              </p>
              <div className="mb-5 flex gap-3 text-lg">
                <span className="font-bold text-red-600">
                  {product.salePrice} -kr
                </span>
                {product.originalPrice && (
                  <span className="font-medium text-gray-500 line-through">
                    {product.originalPrice} -kr
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedProducts;
