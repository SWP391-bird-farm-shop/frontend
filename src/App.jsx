import { Navigate, Routes, Route } from 'react-router-dom'
import RequireAuth from './components/ReqAuth/RequireAuth'
import Layout from './components/layout/Layout'
import HomePage from './page/HomePage'
import CagePage from './page/productpage/CagePage'
import FoodPage from './page/productpage/FoodPage'
import AccessoriesToysPage from './page/productpage/AccessoriesToysPage'
import BlogPage from './page/BlogPage'
import LogInPage from './page/LogInPage'
import SignUpPage from './page/SignUpPage'
import SpeciesPage from './page/SpeciesPage'
import ItemInformation from './page/ItemInformationPage'
import AboutPage from './page/AboutPage'
import CartPage from './page/CartPage'
import UpdateInformationPage from './page/UpdateInformationPage'
import './App.css'
import UserPage from './page/UserPage'



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
        <Route path='/parrot' element={<SpeciesPage />} />
        <Route path='/item-info' element={<ItemInformation />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
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
          <Route path='/item-info' element={<ItemInformation />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Route>
      </Route>

      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/log-in" element={<LogInPage />} />
      <Route path="/update-info" element={<UpdateInformationPage />} />
    </Routes>
  );
}

export default App;
