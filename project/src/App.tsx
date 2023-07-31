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
} from "./features/user/components/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path="id/:id" element={<ProductDetailPage />} />
          </Route>
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products">
            <Route index element={<ProductManagePage />} />
            <Route path="create" element={<CreateProduct />} />
            <Route path="update" element={<UpdateProduct />} />
          </Route>
          <Route path="categories">
            <Route index element={<CategoryManagePage />} />
            <Route path="create" element={<CreateCategory />} />
            <Route path="update" element={<UpdateCategory />} />
          </Route>
          <Route path="users">
            <Route index element={<UserManagePage />} />
            <Route path="create" element={<CreateUser />} />
            <Route path="update" element={<UpdateUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
