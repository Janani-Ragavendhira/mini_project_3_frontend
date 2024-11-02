import { useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Header from './component/Header'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ChangePassword from './Pages/ChangePassword'
import History from './Pages/History'
import BookTicket from './Pages/BookTicket'
import { AuthProvider, AuthContext } from './ContextProviders/AuthContext'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import RedirectAuthenticated from './RedirectAuthenticated'
import AppContent from './AppContent'

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  )
}

export default App
