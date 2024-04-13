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
import AllProduct from "./AdminPannel/pages/Product/AllProduct"

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

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <AuthProvider>
        <MainPageLayout>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/category/:category"
              element={<CategoryPage></CategoryPage>}
            ></Route>
            <Route path="/productDetails" element={<ProductDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/shoppingCart" element={<ShoppingCart />}></Route>

            {/* //  admin and dashboard page start */}
            <Route path="/admin" element={<AdminLogin />}></Route>
            <Route path="/dashboard/*">
              <Route path="users" element={ <AllUsers/> }></Route>
              
            </Route>
            <Route path="/upload" element={ <AllProduct/> }></Route>

            {/* //  admin and dashboard page end */}
          </Routes>
        </MainPageLayout>
      </AuthProvider>
    </div>
  );
};

export default App;
