import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInForm from './auth/forms/SignInForm'
import SignUpForm from './auth/forms/SignUpForm'
import Home from './Pages/Home'
import About from './Pages/About'
import NewsArticles from './Pages/NewsArticles'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/sign-in" element={<SignInForm />} />
    <Route path="/sign-up" element={<SignUpForm />} />

    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/news" element={<NewsArticles />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App