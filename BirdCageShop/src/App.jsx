import { Navigate, BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './page/HomePage'
import BlogPage from './page/BlogPage'
import LogInPage from './page/LogInPage'
import SignUpPage from './page/SignUpPage'
import SpeciesPage from './page/SpeciesPage'
import AboutPage from './page/AboutPage'
import './App.css'
import CartPage from './page/CartPage'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/blogs" element={<BlogPage />}/>
            <Route path='/parrot' element={<SpeciesPage />} />
            <Route path='/about-us' element={<AboutPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Route>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/log-in" element={<LogInPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
