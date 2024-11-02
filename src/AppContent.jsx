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

function AppContent() {

  const { user } = useContext(AuthContext);

  return (<div>
    <Header />
    <Container className='mt-5'>
      <Routes>
        <Route path='/' element={<RedirectAuthenticated><Login /></RedirectAuthenticated>}></Route>
        <Route path='login' element={<RedirectAuthenticated><Login /></RedirectAuthenticated>}></Route>
        <Route path='register' element={<RedirectAuthenticated><Register /></RedirectAuthenticated>}></Route>
        <Route path='bookTicket' exact element={<ProtectedRoute><BookTicket /></ProtectedRoute>} />
        <Route path='history' exact element={<ProtectedRoute><History /></ProtectedRoute>} />
        <Route path='changePassword' exact element={<ProtectedRoute><ChangePassword /></ProtectedRoute>} />
      </Routes>
    </Container>
  </div>
  )
}

export default AppContent
