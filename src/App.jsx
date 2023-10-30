import { Navigate, Routes, Route } from 'react-router-dom'
import RequireAuth from './components/ReqAuth/RequireAuth'
import Layout from './components/layout/layout'
import HomePage from './page/HomePage'
import CagePage from './page/productpage/CagePage'
import FoodPage from './page/productpage/FoodPage'
import AccessoriesToysPage from './page/productpage/AccessoriesToysPage'
import BlogPage from './page/BlogPage'
import BlogContentPage from './page/BlogContentPage'
import SpeciesPage from './page/SpeciesPage'
import ItemInformation from './page/ItemInformationPage'
import AboutPage from './page/AboutPage'
import CartPage from './page/CartPage'
import LogInPage from './page/authenticationpage/LogInPage'
import QuestionPage from './page/authenticationpage/forgotpasswordpage/QuestionPage'
import ResetPasswordPage from './page/authenticationpage/forgotpasswordpage/ResetPasswordPage'
import SignUpPage from './page/authenticationpage/SignUpPage'
import UpdateInformationPage from './page/authenticationpage/UpdateInformationPage'
import './App.css'
import UserPage from './page/UserPage'
import SettingInformationPage from './page/SettingInformationPage'

import CreateVoucherPage from './page/rolepage/managerpage/CreateVoucherPage'
import ShapePage from './page/custompage/ShapePage'
import SizePage from './page/custompage/SizePage'
import MaterialPage from './page/custompage/MaterialPage'
import ColorPage from './page/custompage/ColorPage'
import TotalPage from './page/custompage/TotalPage'
import RoleLayout from './components/layout/RoleLayout'
import StaffPage from './page/rolepage/staffpage/StaffPage'
import ManagerPage from './page/rolepage/managerpage/ManagerPage'
import AdminPage from './page/rolepage/adminpage/AdminPage'
import ViewOrderPage from './page/rolepage/staffpage/ViewOrderPage'
import AnnounceOrderPage from './page/rolepage/staffpage/AnnounceOrderPage'
import FeedbackPage from './page/rolepage/staffpage/FeedbackPage'
import ProductPage from './page/rolepage/managerpage/ProductPage'
import VoucherPage from './page/rolepage/managerpage/VoucherPage'
import ManageAccount from './page/rolepage/adminpage/ManageAccount'
import CreateUser from './page/rolepage/adminpage/CreateUser'
import AddProductPage from './page/rolepage/managerpage/AddProductPage'
import BlogForm from './page/rolepage/staffpage/CreateBlog'


const App = () => {
  return (
    <Routes>
      {/* public routes */}
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/products/cages' element={<CagePage />} />
        <Route path='/products/food' element={<FoodPage />} />
        <Route path='/products/accessories-toys' element={<AccessoriesToysPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path='/blog-content/:blogId' element={<BlogContentPage />} />
        <Route path='/parrot' element={<SpeciesPage />} />
        <Route path="/item-info/:productId" element={<ItemInformation />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/custom-products-shape' element={<ShapePage />} />
        <Route path='/custom-products-size' element={<SizePage />} />
        <Route path='/custom-products-material' element={<MaterialPage />} />
        <Route path='/custom-products-color' element={<ColorPage />} />
        <Route path='/custom-products-end' element={<TotalPage />} />
      </Route>

      <Route element={<RoleLayout />}>
        <Route path='/create-voucher' element={<CreateVoucherPage />} />

      </Route>




      {/* user routes */}
      <Route element={<RequireAuth allowedRoles={['4']} />}>
        <Route element={<Layout />}>
          <Route path="/user-page" element={<UserPage />} />
          <Route path='/products/cages' element={<CagePage />} />
          <Route path='/products/food' element={<FoodPage />} />
          <Route path='/products/accessories-toys' element={<AccessoriesToysPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path='/parrot' element={<SpeciesPage />} />
          <Route path="/item-info/:productId" element={<ItemInformation />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/cart' element={<CartPage />} />

        </Route>
      </Route>

      <Route path="/log-in" element={<LogInPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/reset-pass" element={<ResetPasswordPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/update-info" element={<UpdateInformationPage />} />

      <Route path="/staff-page" element={<StaffPage />} />



      {/* admin routes */}
      <Route element={<RequireAuth allowedRoles={['1']} />}>
        <Route path="/admin-page" element={<AdminPage />} />
        <Route element={<RoleLayout />}>
          <Route path='/manage-account' element={<ManageAccount />} />
          <Route path='/info-setting' element={<SettingInformationPage />} />
          <Route path='/create-user' element={<CreateUser />} />
        </Route>
      </Route>

      {/* manager routes */}
      <Route element={<RequireAuth allowedRoles={['2']} />}>
        <Route path="/manager-page" element={<ManagerPage />} />
        <Route element={<RoleLayout />}>
          <Route path='/add-product/:action' element={<AddProductPage />} />
          <Route path='/product/:action' element={<ProductPage />} />
          <Route path='/voucher/:action' element={<VoucherPage />} />
        </Route>
      </Route>

      {/* manager routes */}
      <Route element={<RequireAuth allowedRoles={['2']} />}>
        <Route path="/manager-page" element={<ManagerPage />} />
        <Route element={<RoleLayout />}>
          <Route path='/add-product/:action' element={<AddProductPage />} />
          <Route path='/product/:action' element={<ProductPage />} />
          <Route path='/voucher/:action' element={<VoucherPage />} />
        </Route>
      </Route>

      <Route element={<RoleLayout />}>
        <Route path='/create-blog' element={<BlogForm />} />
        <Route path='/blog-content' element={<BlogContentPage />} />
        <Route path='/feedback' element={<FeedbackPage />} />
        <Route path='/order' element={<ViewOrderPage />} />
        <Route path='/announce-order' element={<AnnounceOrderPage />} />
      </Route>
    </Routes>
  );
}

export default App;
