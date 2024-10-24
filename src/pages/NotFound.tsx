import Footer from "../components/Footer"
import notFoundImage from "../assets/images/No Data Found.png";


const NotFound = () => {
  return (
    <>
    <div className="flex justify-center my-28">
      <img src={notFoundImage} alt="" />
    </div>
    <Footer />
    </>
  )
}

export default NotFound;
