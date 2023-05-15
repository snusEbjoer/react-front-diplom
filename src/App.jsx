import { useState } from 'react'
import Home from './Home'
import Layout from './layout'
import Login from './Login'
import SignUp from './SignUp'
import Profile from './Profile'
import Chat from './Chat'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';


function App() {
  return (
    <div>
    <Home />
      </div>
  )
}
export default App
