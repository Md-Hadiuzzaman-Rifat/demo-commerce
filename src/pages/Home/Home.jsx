import Products from "../../components/Products/Products.jsx";
import Blogs from "../../components/Blogs/Blogs.jsx";
import Popup from "../../components/Popup/Popup.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Category from "../../components/Category/Category.jsx";
import Category2 from "../../components/Category/Category2.jsx";
import Services from "../../components/Services/Services.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import headphone from "../../assets/red-shirt.png";
import smartwatch2 from "../../assets/show.png";
import SampleProduct from "../../components/SampleProduct/SampleProduct.jsx";
// import AppStore from "../../components/AppStore/AppStore.jsx";
import FooterBanner from "../../components/FooterBanner/FooterBanner.jsx";
import ShoppingCartForm from "../../components/ShoppingCartForm/ShoppingCartForm.jsx";
import NewCategory from "../../components/NewCategory/NewCategory.jsx";
import Bars from "../../components/Bars/Bars.jsx";
// import QuickView from "../../components/QuickView/QuickView.jsx";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#ff848a",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#cccccc",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="container">
        <div className="mt-8 mb-2 py-2 px-4 bg-[#E0F7FA]">
          {" "}
          <span className="font-bold">
            Event T-shirt <IoMdArrowDropright className="inline" />{" "}
          </span>{" "}
          T-shirt/Clothing with your brand logo or design? We are delivering
          worldwide at unbeatable prices.{" "}
          <span className="font-bold">
            Click here <FaArrowAltCircleRight className="inline" />
          </span>{" "}
        </div>
      </div>
      <Bars></Bars>
      <NewCategory></NewCategory>
      <Category />
      <Category2 />
      <Services />

      <SampleProduct></SampleProduct>
      <Banner data={BannerData} />
      <Products />

      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      {/* <AppStore></AppStore> */}
      {/* <QuickView></QuickView> */}
      <FooterBanner></FooterBanner>
      <ShoppingCartForm></ShoppingCartForm>
      <Popup />
    </div>
  );
};

export default Home;
