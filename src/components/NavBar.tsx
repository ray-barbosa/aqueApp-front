import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="container-fluid">
      <ul>
        <li><strong>AquéApp</strong></li>        
      </ul>
       <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/profissionais">Profissionais</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cadastro">Cadastrar</Link></li>        
      </ul>
    </nav>
  );
};

export default NavBar;