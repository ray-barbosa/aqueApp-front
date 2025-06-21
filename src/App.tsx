import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from  "./pages/Login"
import Profissionais from "./pages/Profissionais"
import NavBar from './components/NavBar'
import Cadastro from './pages/Cadastro'



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home / >} />
          <Route path="login" element={<Login / >} />
          <Route path="cadastro" element={<Cadastro / >} />
          <Route path="profissionais" element={<Profissionais / >} />

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
