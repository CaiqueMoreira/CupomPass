import { Link } from 'react-router-dom'
import Navbar from '../../Nav_logado/navbar_Logado.jsx'
import Desconto from '../../../Img/Discount5.jpeg'
import './Segmento1.css'

export default function Segmento1() {
    return (
        <main>
            <nav>
                <Navbar />
            </nav>

            <fieldset>
                <p>Filtros</p>
                <div className="FiltroValor">
                    <label ><input type="radio" name="Filtro" id="" /> Maior valor </label>
                </div>
                <div className="FiltroValor">
                    <label ><input type="radio" name="Filtro" id="" /> Menor valor </label>
                </div>
                <div>
                    <input className='Filtrobutton' type="button" id="" value="Aplicar" />
                </div>
            </fieldset>

            <div className="remedios">
                <div className='Segmento1Fileira-1'>
                    {/*Medicamento 1 */}
                    <div className='Item1-group-1'>
                        {/*URl de Direcionamento */}
                        <Link to="/Login/Segmento1/Item1" className="DescItem">
                            <img src={Desconto} className='ImgItem1' alt="Img1"></img>
                            <div className='information-scale'>
                                <p className='information-Item'>Desconto de 5% salão de beleza  <br />
                                    R$ 10,00 UN</p>
                            </div>
                        </Link>
                    </div>

                    {/*Medicamento 2 */}

                    <div className='Item1-group-1'>
                        {/*URl de Direcionamento */}
                        <Link to="/Login/Segmento1/Item2" className="DescItem">
                            <img src={Desconto} className='ImgItem1' alt="Img2"></img>
                            <div className='information-scale'>
                                <p className='information-Item'>Desconto de 5% salão de beleza  <br />
                                    R$ 10,00 UN</p>
                            </div>
                        </Link>
                    </div>

                    {/*Medicamento 3 */}

                    <div className='Item1-group-1'>
                        {/*URl de Direcionamento */}
                        <Link to="/Login/Segmento1/Item3" className="DescItem">
                            <img src={Desconto} className='ImgItem1' alt="Img3"></img>
                            <div className='information-scale'>
                                <p className='information-Item'>Desconto de 5% salão de beleza  <br />
                                    R$ 10,00 UN</p>
                            </div>
                        </Link>
                    </div>

                </div> {/*Fim da primeira linha*/}

            </div>



        </main>
    )
}