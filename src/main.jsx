import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './context/AuthProvider.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './context/UserProvider.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
