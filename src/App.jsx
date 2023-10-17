import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
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



const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path='/products/cages' element={<CagePage />} />
            <Route path='/products/food' element={<FoodPage />} />
            <Route path='/products/accessories-toys' element={<AccessoriesToysPage />} />
            <Route path="/blogs" element={<BlogPage />}/>
            <Route path="/blog-content" element={<BlogContentPage />}/>
            <Route path='/parrot' element={<SpeciesPage />} />
            <Route path='/item-info' element={<ItemInformation />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Route>
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path='/reset-password' element={<ResetPasswordPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/update-info" element={<UpdateInformationPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
