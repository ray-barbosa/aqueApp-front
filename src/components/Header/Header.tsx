import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <>
    <header>       
       <div>
       <Link to="/">Logo</Link>
        <Link to="/"><h1 className="nameSiteHeader">Aqué App</h1></Link>
        </div>
        <div className='menu-itens'>
          <Link to="/about"><p>Sobre nós</p></Link>
          <Link to="/profissionais"><p>Contrate</p></Link>   
          <Link  to="produtos"><p>Compre</p></Link>   
          <Link to="/login"><p>Login</p></Link>   
          <Link to="/cadastro"><p>Cadastre-se</p></Link>
          <Link to="/voluntarie"><p>Colabore</p></Link>   
          </div>       
    </header>
    </>
  );
};

export default Header;