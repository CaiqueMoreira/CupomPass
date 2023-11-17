import { Link, useNavigate } from 'react-router-dom';
import './Cadastro.css'; // Certifique-se de importar seu arquivo CSS

export default function Cadastro() {

     const navigate = useNavigate()


    return (
        <div className='Cadastro'>
            <h2 id='cadastro-titulo'>Cadastro</h2>
            <ul className='campos-list'>
                <li className='campo'>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" />
                </li>
                <li className='campo'>
                    <label htmlFor="sobrenome">Sobrenome:</label>
                    <input type="text" id="sobrenome" />
                </li>
                <li className='campo'>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" />
                </li>
                <li className='campo'>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" />
                </li>
                <li className='campo'>
                    <label htmlFor="dataNascimento">Data de Nascimento:</label>
                    <input type="date" id="dataNascimento" />
                </li>
                <div className='endereco0'>
                    <li className='endereco1'>
                        <label htmlFor="logradouro">Logradouro:</label>
                        <input type="text" id="logradouro" />
                    </li>
                    <li className='endereco1'>
                        <label htmlFor="numero">Nº:</label>
                        <input type="number" id="numero" />
                    </li>
                </div>
                <div className='endereco0'>
                    <li className='endereco2'>
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" id="cidade" />
                    </li>
                    <li className='endereco2'>
                        <label htmlFor="uf">UF:</label>
                        <input type="text" id="uf" />
                    </li>
                </div>
                <div className='endereco0'>
                    <li className='endereco3'>
                        <label htmlFor="pais">Pais:</label>
                        <input type="text" id="pais" />
                    </li>
                    <li className='endereco3'>
                        <label htmlFor="cep">CEP:</label>
                        <input type="number" id="cep" />
                    </li>
                </div>
            </ul>

            <div className='botoes'>
                <Link to="/Home">
                    <button id='cancelar-cadastro'>Cancelar</button>
                </Link>
                <button onClick= { () => {
        alert('Cadastro foi realizado com sucesso');
        navigate('/Login'); }}>Cadastrar</button>
            </div>
        </div>
    );
}
