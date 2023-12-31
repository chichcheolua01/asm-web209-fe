import { Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import {
  CategoryManagePage,
  CreateCategory,
  CreateProduct,
  CreateUser,
  Dashboard,
  ProductManagePage,
  UpdateCategory,
  UpdateProduct,
  UpdateUser,
  UserManagePage,
} from "./features/admin/components/index";
import {
  HomePage,
  ProductDetailPage,
  ProductPage,
  SigninPage,
  SignupPage,
  CartPage,
} from "./features/user/components/index";
import { Cart } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setLocalCart } from "./features/user/cart.slice";

function App() {
  const dispatch = useDispatch();
  function handleLoadEvent() {
    // Call dispatch(setLocalCart()) here
    dispatch(setLocalCart());
    const cart = localStorage.getItem("cart");
    if (cart == "null") {
      const temp: never[] = [];
      localStorage.setItem("cart", JSON.stringify(temp));
    }
  }
  // Add the event listener with the handleLoadEvent function as the callback
  window.addEventListener("load", handleLoadEvent);
  return (
    <div className="App">
      <Cart />
      <div className="static">
        <Routes>
          <Route path="" element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path="products">
              <Route index element={<ProductPage />} />
              <Route path="id/:id" element={<ProductDetailPage />} />
            </Route>
            <Route path="category/:category" element={<ProductPage />} />
            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductManagePage />} />
              <Route path="create" element={<CreateProduct />} />
              <Route path="update/:id" element={<UpdateProduct />} />
            </Route>
            <Route path="categories">
              <Route index element={<CategoryManagePage />} />
              <Route path="create" element={<CreateCategory />} />
              <Route path="update/:id" element={<UpdateCategory />} />
            </Route>
            <Route path="users">
              <Route index element={<UserManagePage />} />
              <Route path="create" element={<CreateUser />} />
              <Route path="update" element={<UpdateUser />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
