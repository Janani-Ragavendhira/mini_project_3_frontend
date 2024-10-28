import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Header from './component/Header'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ChangePassword from './Pages/ChangePassword'
import History from './Pages/History'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Container className='mt-5'>
        {/* <Register /> */}

        {/* <Login /> */}

        {/* <ChangePassword /> */}

        <History />
        
      </Container>
    </>
  )
}

export default App
