import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div className='Tier0'>
      <div className="border">
        <p className='Tier1'>Login</p>
        <div className='Tier2'>
          <div className='input-container'>
            <label htmlFor="usuario" className="login-label">Usuário:</label>
            <input type="text" id="usuario" className="login-input" />
          </div>
          <div className='input-container'>
            <label htmlFor="senha" className="login-label">Senha:</label>
            <input type="password" id="senha" className="login-input" />
          </div>
        </div>
        <div className='Tier2'>
          <Link to="/Login/Home">
            <button className="login-button">Login</button>
          </Link>
          <Link to="/Cadastro">
            <button className="login-button">Cadastre-se</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
