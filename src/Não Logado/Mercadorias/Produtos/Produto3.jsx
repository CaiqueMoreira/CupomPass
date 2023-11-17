import { Link } from "react-router-dom"
import produto from '../../../Img/Discount5.jpeg'
import './Produto1.css'

export default function Produto1() {

    return (

        <main id="containerprincipal">

            <div className='Principal_class'>
                <div className='Secundaria_class'>


                    <div className='imagem-titulo'>
                        <div className="imagem_remedio">
                            <img src={produto} alt="Carteira Digital com 200BTC para Binance " className='img_medicamento' />
                        </div>
                        <div className='titulo-serve-para'>
                            <h2 className='Titulo_medicamento'>Desconto de 5% salão de beleza </h2>
                            <div className='serve-desc'>
                                <p className='ServePara_medicamento'>Serve Para:  </p>
                                <p className='DescricaoServePara'>Desconto de 5% para qualquer procedimento de salão de beleza, por apenas R$ 10,00, pagando esse valor você ainda ganhará pontos para utilizar como desconto. </p>
                            </div>
                            <div className='Linha3'>
                                <ul className='PrecoBulaCarrinho'>
                                    <li>
                                        <Link to="/Login/cesta">
                                            <button type="button" className='Adicionaraocarrinho_medicamento'>Pague R$10.00 e Ganhe 100 pontos</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </main>

    );

}