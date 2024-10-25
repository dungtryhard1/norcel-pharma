import closeImage from "../assets/images/close.png";
import { products } from "../data/products";
import "../scss/components/modal.scss";
import Button from "./Button";
import NumberInput from "./NumberInput";

interface ShoppingCartProps {
  showModalCart: boolean;
  setShowModalCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  showModalCart,
  setShowModalCart,
}) => {
  return (
    <>
      {/* Nền mờ khi modal mở */}
      {showModalCart && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setShowModalCart(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-screen w-full bg-white font-mainFont shadow-lg transition-transform duration-300 md:w-[485px] ${
          showModalCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Nội dung giỏ hàng */}
        <div className="flex h-screen flex-col">
          {/* header cố định */}
          <div className="absolute left-0 right-0 top-0 z-10 flex items-center justify-between bg-white px-9 pt-6 text-mainColor">
            <h2 className="font-titleFont text-[40px] font-normal">
              Shopping Cart
            </h2>
            <button
              className="text-mainColor"
              onClick={() => setShowModalCart(false)}
            >
              <img src={closeImage} alt="Close" />
            </button>
          </div>

          {/* body */}
          <div className="flex-1 overflow-y-auto px-9 pt-32 text-mainColor">
            <div className="flex flex-col gap-8">
              {products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="relative flex justify-start gap-6"
                  >
                    <div className="absolute h-6 w-6 rounded-full bg-[#878690] right-[-14px] p-1">
                      <img src={closeImage} className="invert"/>
                    </div>
                    <div className="basis-1/5 border border-[#F6F6F6]">
                      <img src={product.imageUrl} alt={product.name} />
                    </div>
                    <div className="flex flex-col gap-6">
                      <p className="text-[16px] font-bold">{product.name}</p>
                      <div className="flex items-center gap-7">
                        <NumberInput />
                        <p className="text-secondColor font-bold">
                          {product.salePrice}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* footer cố định */}
          <div className="bg-white p-6 font-mainFont">
            <div className="mb-10 flex justify-between font-extrabold">
              <p className="text-2xl text-mainColor">Sub Total:</p>
              <p className="text-secondColor">1234</p> 
            </div>
            <div className="flex gap-3">
              <Button className="bg-mainColor text-white">Checkout</Button>
              <Button>View Cart</Button>
            </div>
          </div>
        </div>

        {/* Nút đóng */}
        <button
          className="absolute right-6 top-9 text-mainColor"
          onClick={() => setShowModalCart(false)}
        >
          <img src={closeImage} alt="Close" />
        </button>
      </div>
    </>
  );
};

export default ShoppingCart;
