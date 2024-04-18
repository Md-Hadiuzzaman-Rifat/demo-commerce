import Products from "../../components/Products/Products.jsx";
import Blogs from "../../components/Blogs/Blogs.jsx";
import Popup from "../../components/Popup/Popup.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import Category from "../../components/Category/Category.jsx";
import Category2 from "../../components/Category/Category2.jsx";
import Services from "../../components/Services/Services.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Partners from "../../components/Partners/Partners.jsx";
import headphone from "../../assets/hero/headphone.png";
import smartwatch2 from "../../assets/category/smartwatch2-removebg-preview.png";
import SampleProduct from "../../components/SampleProduct/SampleProduct.jsx";
// import AppStore from "../../components/AppStore/AppStore.jsx";
import FooterBanner from "../../components/FooterBanner/FooterBanner.jsx";
import ShoppingCartForm from "../../components/ShoppingCartForm/ShoppingCartForm.jsx";
// import QuickView from "../../components/QuickView/QuickView.jsx";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
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
  bgColor: "#2dcc6f",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <SampleProduct></SampleProduct>
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
