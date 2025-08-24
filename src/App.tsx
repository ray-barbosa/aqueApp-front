import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home"
import Login from  "./pages/Login/Login"
import Profissionais from "./pages/Profissionais/Profissionais"
import Register from './pages/Register/Register'
import Header from './components/Header/Header'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home / >} />
          <Route path="login" element={<Login / >} />
          <Route path="cadastro" element={<Register / >} />
          <Route path="profissionais" element={<Profissionais / >} />

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
