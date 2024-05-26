import Products from "../../components/Products/Products.jsx";
import Blogs from "../../components/Blogs/Blogs.jsx";
import Popup from "../../components/Popup/Popup.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import CategoryItem from "../../components/CategoryItem/CategoryItem.jsx";
import CategoryItem2 from "../../components/CategoryItem/CategoryItem2.jsx";
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

import RightCart from "../../components/RightCart/RightCart.jsx";
import Notice from "../../components/Notice/Notice.jsx";

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

const bars = [
  {
    style: "text-[#cc8119] bg-[#fcf4e9]",
    heading: "NEW ARRIVAL",
    text: "",
  },
  {
    style: "text-[#009688] bg-[#ccf7f1]",
    text: "THE BEST QUALITY OUTFIT",
    heading: "TOP RATED",
    textStyle: "mb-[-14px] mt-[4px]",
  },
  {
    style: "text-[#9059a1] bg-[#d5c1dc]",
    text: "THE BEST QUALITY OUTFIT",
    heading: "FREE DELIVERY",
    textStyle: "mb-[-14px] mt-[4px]",
  },
];
const Home = () => {
  return (
    <div>
      <RightCart></RightCart>
      <Hero />
      <Notice></Notice>
      <Bars item={bars[0]}></Bars>
      <NewCategory></NewCategory>
      <CategoryItem />
      <CategoryItem2 />
      <Services />
      <Bars item={bars[1]}></Bars>
      <SampleProduct></SampleProduct>
      <Banner data={BannerData} />
      <Bars item={bars[2]}></Bars>
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
// https://react-slick.neostack.com/docs/example/pause-on-hover
export default Home;
