import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import MainPageLayout from "./components/MainPageLayout/MainPageLayout";
import { AuthProvider } from "./context/AuthContext";
import AdminLogin from "./AdminPannel/pages/AdminLogin/AdminLogin";
import AllUsers from "./AdminPannel/pages/AdminAllUsers/AllUsers";
import AllProduct from "./AdminPannel/pages/Product/AllProduct";
import CreateCategory from "./AdminPannel/pages/Category/CreateCategory";
import Layout from "./AdminPannel/components/Layout/Layout";
import OrderForm from "./components/OrderForm/OrderForm";
import { useSelector } from "react-redux";
import CartIcon from "./components/CartIcon/CartIcon";
import { ToastContainer } from "react-toastify";
import EditProduct from "./AdminPannel/pages/EditProduct/EditProduct";
import SameCategory from "./components/SameCategory/SameCategory"
import ImageUpload from "./AdminPannel/components/ImageUpload/ImageUpload";
import QuickView from "./components/QuickView/QuickView";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const { formCondition } = useSelector((state) => state.cartHandler);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <ToastContainer />
      <AuthProvider>
        <MainPageLayout>
          {formCondition && <OrderForm></OrderForm>}
          <CartIcon></CartIcon>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/test" element={<QuickView />}></Route>
            <Route path="/image" element={<ImageUpload />}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/category/:category"
              element={<CategoryPage></CategoryPage>}
            ></Route>
            <Route
              path="/productDetails/:id"
              element={<ProductDetails />}
            ></Route>
            <Route path="/categoryPage" element={<SameCategory/>}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
            {/* //  admin and dashboard page start */}
            <Layout>
              <Route path="/admin" element={<AdminLogin />}></Route>
              <Route path="/dashboard/*">
                <Route path="users" element={<AllUsers />}></Route>
              </Route>
              <Route path='edit/:productId' element={<EditProduct/> }></Route>
              <Route path="/upload" element={<AllProduct />}></Route>
              <Route path="/createCategory" element={<CreateCategory />}></Route>
            </Layout>
            {/* //  admin and dashboard page end */}
          </Routes>
        </MainPageLayout>
      </AuthProvider>
    </div>
  );
};

export default App;
