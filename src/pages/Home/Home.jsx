/* eslint-disable no-undef */
import Products from "../../components/Products/Products.jsx";
import Blogs from "../../components/Blogs/Blogs.jsx";
import Popup from "../../components/Popup/Popup.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import CategoryItem from "../../components/CategoryItem/CategoryItem.jsx";
import CategoryItem2 from "../../components/CategoryItem/CategoryItem2.jsx";
import CategoryItem3 from "../../components/CategoryItem/CategoryItem3.jsx";
import Services from "../../components/Services/Services.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import jerseyCombo from "/jersey-combo1.png";
import cargoCombo from "/cargo_combo.png";
import SampleProduct from "../../components/SampleProduct/SampleProduct.jsx";
// import AppStore from "../../components/AppStore/AppStore.jsx";
import FooterBanner from "../../components/FooterBanner/FooterBanner.jsx";
import ShoppingCartForm from "../../components/ShoppingCartForm/ShoppingCartForm.jsx";
import NewCategory from "../../components/NewCategory/NewCategory.jsx";
import Bars from "../../components/Bars/Bars.jsx";
import RightCart from "../../components/RightCart/RightCart.jsx";
import Notice from "../../components/Notice/Notice.jsx";
import { useGetProductsQuery } from "../../features/product/productApi.js";
import ProductListSkeleton from "../../components/ProductListSkeleton/ProductListSkeleton.jsx";

const BannerData = {
  discount: "২১ টি ভিন্ন ডিজাইন থেকে বেছে নিন আপনার পছন্দ মত জার্সি গুলো। ",
  title: "Summer Offer",
  title2: "Combo Offer",
  image: jerseyCombo,
  title3: "৫ টি জার্সি মাত্র ৯৫০ টাকা",
  title4:
    "২১ টি ভিন্ন ভিন্ন ডিজাইনের জার্সি পছন্দ করে নিতে এখনই ক্লিক করুন।",
  bgColor: "#777",
};

const BannerData2 = {
  discount: "Summer Sale",
  title: "6 Pocket, 8 Pocket Cargo",
  image: cargoCombo,
  title2: "Combo Offer",
  title3: "3 টি কার্গো মাত্র ১৯৫০ টাকা",
  title4:
    "১১ টি ভিন্ন ভিন্ন ডিজাইনের কার্গো পছন্দ করে নিতে এখনই ক্লিক করুন।",
  bgColor: "#E5D3B3",
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
    heading: "FLASH DEALS",
    textStyle: "mb-[-14px] mt-[4px]",
  },
];
const Home = () => {
  const { data, isSuccess, isLoading } = useGetProductsQuery();

  return (
    <div>
      <RightCart></RightCart>
      <Hero />
      <Notice></Notice>
      <Bars item={bars[0]}></Bars>
      <NewCategory></NewCategory>
      <CategoryItem />
      <CategoryItem2 />
      <CategoryItem3/>
      <Services />
      <Bars item={bars[1]} id="top rated"></Bars>
       {/* top rated  */}
       {
        isLoading && <ProductListSkeleton/>
       }
      {
        !isLoading && isSuccess && data && <SampleProduct data={data}></SampleProduct>
      }
      <Banner data={BannerData} />
      <Bars item={bars[2]} id="flash deals"></Bars>
      {/* // flash deals   */}
      {
        !isLoading && isSuccess && data && <Products data={data}></Products>
      }
      <Banner data={BannerData2} />
      <Blogs />
      
      {/* <AppStore></AppStore> */}
      <FooterBanner></FooterBanner>
      <ShoppingCartForm></ShoppingCartForm>
      <Popup />
    </div>
  );
};
export default Home;
