import { Link } from 'react-router-dom'
import './navbar_deslogado.css'
import logo from '../../Img/logo.png'



function Navbar() {

    return (

        <nav >

            {/*Trata das informações do logo, barra de pesquisa e cesta*/}
            <ul className='navbar1'>
                <li> {/*Icone Medcontrol*/ }
                    <Link to="/Home">
                        <img src={logo} alt='Gerenciamento e Controle de Medicamento' className='img' />
                    </Link>
                </li>
                <li>
                    <p className='Pontuação'> Pontos : 0000</p>
                </li>
                <li>{/*Cesta*/ } 
                    <Link to="/Login">
                        <input type="button" className='Botão_Cesta img_Botão_Cesta' />
                    </Link>
                </li>
                <li>{/*Cesta*/ } 
                    <Link to="/Login">
                        <input type="button" className='Cadastre-se' value="Cadastre-se"/>
                    </Link>
                </li>
            </ul>


         {/*Trata das informações de todos os sintomas e botão de categorias*/}
            <nav className='navbar2'>
                
                    {/* Altera as informações do categorias*/}

                    <ul className='list '>
                        
                        <li className='item'> {/*Botão que volta para página Dor de Cabeça*/ }
                            <Link to="/Login">Beleza</Link >
                        </li>
                        <li className='item'>{/*Botão que volta para página Dor Muscular*/ }
                            <Link to="/Login">Saúde</Link >
                        </li>
                        <li className='item'>{/*Botão que volta para página Febre*/ }
                            <Link to="/Login">Educação</Link >
                        </li>
                        <li className='item'>{/*Botão que para página Gripe*/ }
                            <Link to="/Login">Cinema</Link >
                        </li>
                    </ul>

                
            </nav>
        </nav>
    )
}

export default Navbar