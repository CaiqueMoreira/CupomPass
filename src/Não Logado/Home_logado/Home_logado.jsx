import { Link } from 'react-router-dom'
import Navbar from '../Nav_logado/navbar_Logado.jsx'
import Desconto from '../../Img/Discount5.jpeg'
import './Home_logado.css'



function Home() {
    return(

        <div>
            <nav>
                <Navbar/>                
            </nav>

            <div className='Medicamentos-Fileira-1'>
                {/*Medicamento 1 */}
                <div className='Medicamentos-group-1'>
                    <Link to="/Login/Segmento1/Item1" className="DescRemediosLink">
                        <img src={Desconto} className='imgDipirona1g' alt="Img2"></img>
                        <div >
                            <p className='descript-information-medicament'>Desconto de 5% salão de beleza  <br />
                                R$ 10,00 UN</p>
                        </div>
                    </Link>
                </div>

                {/*Medicamento 2 */}

                <div className='Medicamentos-group-1'>
                    <Link to="/Login/Segmento1/Item2" className="DescRemediosLink">
                        <img src={Desconto} className='imgDipirona1g' alt="Img2"></img>
                        <div className='DordeCabecadescript-information-scale'>
                            <p className='descript-information-medicament'>Desconto de 5% salão de beleza  <br />
                                R$ 10,00 UN</p>
                        </div>
                    </Link>
                </div>

                {/*Medicamento 3 */}

                <div className='Medicamentos-group-1'>
                    <Link to="/Login/Segmento1/Item3" className="DescRemediosLink">
                        <img src={Desconto} className='imgDipirona1g' alt="Img2"></img>
                        <div className='DordeCabecadescript-information-scale'>
                            <p className='descript-information-medicament'>Desconto de 5% salão de beleza  <br />
                                R$ 10,00 UN</p>
                        </div>
                    </Link>
                </div>

                {/*Medicamento 4 */}

                <div className='Medicamentos-group-1'>
                    <Link to="/Login/Segmento1/Item4" className="DescRemediosLink">
                        <img src={Desconto} className='imgDipirona1g' alt="Img2"></img>
                        <div className='DordeCabecadescript-information-scale'>
                            <p className='descript-information-medicament'>Desconto de 5% salão de beleza  <br />
                                R$ 10,00 UN</p>
                        </div>
                    </Link>

                </div>

            </div>

        </div>

    )
}

export default Home