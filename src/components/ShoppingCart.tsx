import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import closeImage from "../assets/images/close.png";
import emptyCart from "../assets/images/shopping-bag.svg";
import {
  closeCartModal,
  getTotals,
  removeFromCart,
} from "../redux/slice/cartSlice";
import { RootState } from "../redux/store/Store";
import "../scss/components/modal.scss";
import Button from "./Button";
import NumberInput from "./NumberInput";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ShoppingCart = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showModalCart = useSelector(
    (state: { cart: { showCartModal: boolean } }) => state.cart.showCartModal,
  );
  const cart = useSelector((state: RootState) => state.cart);

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  console.log("cartItems", cartItems);

  const cartTotalAmount = useSelector(
    (state: RootState) => state.cart.cartTotalAmount,
  );

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleBuyNow = () => {
    navigate("/");
    dispatch(closeCartModal());
  };

  const handleRemoveCart = (id: any) => {
    setLoading(true);
    setTimeout(() => {
      dispatch(removeFromCart(id));
      setLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Nền mờ khi modal mở */}
      {showModalCart && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => dispatch(closeCartModal())}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full bg-white font-mainFont shadow-lg transition-transform duration-300 md:w-[485px] ${
          showModalCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Nội dung giỏ hàng */}
        <div className="flex h-screen flex-col">
          <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-white px-9 pt-6 text-mainColor">
            <h2 className="font-titleFont text-[40px] font-normal">
              Shopping Cart
            </h2>
            <button
              className="text-mainColor"
              onClick={() => dispatch(closeCartModal())}
            >
              <img src={closeImage} alt="Close" />
            </button>
          </div>

          {/* body */}
          {cartItems.length > 0 ? (
            <div
              className={`flex-1 overflow-y-auto px-9 pt-32 text-mainColor transition-opacity duration-300 ${
                loading ? "pointer-events-none opacity-50" : ""
              }`}
            >
              {loading && (
                <div className="text-center">
                  <FontAwesomeIcon icon={faSpinner} spin />
                </div>
              )}
              <div className="flex flex-col gap-8">
                {cartItems?.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="relative flex gap-6"
                    >
                      <div
                        className="absolute right-[-14px] h-6 w-6 cursor-pointer rounded-full bg-[#878690] p-1"
                        onClick={() => handleRemoveCart({ id: item.id })}
                      >
                        <img src={closeImage} className="invert" />
                      </div>
                      <div className="flex-shrink-0 basis-1/5 border border-[#F6F6F6]">
                        <img src={item.imageUrl} alt={item.name} />
                      </div>
                      <div className="flex flex-col gap-6">
                        <p className="text-[16px] font-bold">{item.name}</p>
                        <div className="flex items-center gap-7">
                          <NumberInput
                            inputValue={item.cartQuantity}
                            cartItem={item}
                            setLoading={setLoading} 
                          />
                          <p className="font-bold text-secondColor">
                            {item.salePrice} -kr
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center">
              <div className="flex h-60 w-60 items-center justify-center rounded-[50%] border bg-[#f6f6f6]">
                <img src={emptyCart} alt="" />
              </div>
              <p className="my-8">Empty Cart ...</p>
              <Button
                className="w-52 bg-mainColor text-white"
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </div>
          )}

          {/* footer cố định */}
          {cartItems.length > 0 && (
            <div className="bg-white p-6 font-mainFont">
              <div className="mb-10 flex justify-between font-extrabold">
                <p className="text-2xl text-mainColor">Sub Total:</p>
                <p className="text-secondColor">{cartTotalAmount} -kr</p>
              </div>
              <div className="flex gap-3">
                <Button className="bg-mainColor text-white">Checkout</Button>
                <Button>View Cart</Button>
              </div>
            </div>
          )}
        </div>

        {/* Nút đóng */}
        <button
          className="absolute right-6 top-9 text-mainColor"
          onClick={() => dispatch(closeCartModal())}
        >
          <img src={closeImage} alt="Close" />
        </button>
      </div>
    </>
  );
};

export default ShoppingCart;
