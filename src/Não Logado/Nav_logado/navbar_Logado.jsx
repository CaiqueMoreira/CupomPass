import { Link } from 'react-router-dom'
import './navbar_Logado.css'
import logo from '../../Img/logo.png'
import perfil from '../../Img/perfil.png'

function Navbar() {

    return (

        <nav >

            {/*Trata das informações do logo, barra de pesquisa e cesta*/}
            <ul className='navbar1_0'>
                <li> {/*Icone Medcontrol*/}
                    <Link to="/Login/Home">
                        <img src={logo} alt='Gerenciamento e Controle de Medicamento' className='img2' />
                    </Link>
                </li>
                <li>
                    <p className='Pontuação'> Pontos : 1800</p>
                </li>
                <li>{/*Cesta*/}
                    <Link to="/Login/cesta">
                        <input type="button" className='Botão_Cesta img_Botão_Cesta' />
                    </Link>
                </li>

                <li> {/*Usuário */}
                    <div id='campo-perfil'>
                        <img src={perfil} alt="perfil" id='Perfil-logado' />
                        <p>Seja Bem Vindo!</p>
                    </div>
                </li>
            </ul>


            {/*Trata das informações de todos os sintomas e botão de categorias*/}
            <nav className='navbar2'>

                {/* Altera as informações do categorias*/}

                <ul className='list '>
                    <li className='item'> {/*Botão que volta para página Dor de Cabeça*/}
                        <Link to="/Login/Segmento1">Beleza</Link >
                    </li>
                    <li className='item'>{/*Botão que volta para página Dor Muscular*/}
                        <Link to="/Login/Segmento2">Saúde</Link >
                    </li>
                    <li className='item'>{/*Botão que volta para página Febre*/}
                        <Link to="/Login/Segmento3">Educação</Link >
                    </li>
                    <li className='item'>{/*Botão que para página Gripe*/}
                        <Link to="/Login/Segmento4">Cinema</Link >
                    </li>
                </ul>


            </nav>
        </nav>
    )
}

export default Navbar