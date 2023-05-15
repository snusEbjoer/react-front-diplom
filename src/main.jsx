import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Layout from './layout'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import Chat from './Chat'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
)
