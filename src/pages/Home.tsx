import posterImage from "../assets/images/poster.png";
import Footer from "../components/Footer";
import RecommendedProducts from "../components/RecommendedProducts";

const Home = () => {
  return (
    <>
      <div className="relative pb-[41.67%]">
        <img
          src={posterImage}
          className="absolute left-0 top-0 h-full w-full"
        />
      </div>
      <div className="bg-mainColor py-[55px] text-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <p className="font-titleFont text-[40px] font-normal">500+</p>
            <p className="font-mainFont text-base font-medium">
              Partners and Franchise
            </p>
          </div>

          <div className="h-[77px] w-[1px] bg-white opacity-[24%]"></div>

          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <p className="font-titleFont text-[40px] font-normal">40k+</p>
            <p className="font-mainFont text-base font-medium">
              Orders Completed
            </p>
          </div>

          <div className="h-[77px] w-[1px] bg-white opacity-[24%]"></div>

          <div className="flex flex-col lg:flex-row items-center gap-[13px]">
            <p className="font-titleFont text-[40px] font-normal">32k+</p>
            <p className="font-mainFont text-base font-medium">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
      <RecommendedProducts />
      <Footer />
    </>
  );
};

export default Home;
