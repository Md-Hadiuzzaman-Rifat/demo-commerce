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

const bars=[
  {
    style: "text-[#cc8119] bg-[#fcf4e9]",
    heading: "NEW ARRIVAL",
    text: ""
  },
  {
    style :"text-[#009688] bg-[#ccf7f1]",
    text:"THE BEST QUALITY OUTFIT",
    heading: "TOP RATED",
    textStyle: "mb-[-14px] mt-[4px]"
  }
]
const Home = () => {
  return (
    <div>
        <RightCart></RightCart>
      <Hero />
      <Notice></Notice>
      <Bars item={bars[0]}></Bars>
      <NewCategory></NewCategory>
      <Category />
      <Category2 />
      <Services />
      <Bars item={bars[1]}></Bars>
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
