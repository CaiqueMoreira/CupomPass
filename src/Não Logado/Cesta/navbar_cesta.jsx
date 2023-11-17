import { Link } from 'react-router-dom'
import './navbar_cesta.css'
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
                
                <li> {/*Usuário */}
                    <div id='campo-perfil'>
                        <img src={perfil} alt="perfil" id='Perfil-logado' />
                        <p>Seja Bem Vindo!</p>
                    </div>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar