import { Link } from 'react-router-dom'
import produto from '../../Img/Discount5.jpeg';
import './Cesta.css';
import Navbar from './navbar_cesta';
import { useState } from 'react';

export default function Cesta() {
    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    const precoUnitario = 10.00;
    const precoTotal = (precoUnitario * quantidade).toFixed(2);

    return (
        <main>
            <nav>
                <Navbar />
            </nav>

            <div id='centralizer'>
                <div className='cart-container'>
                    <table id='cart-table'>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço Unitário</th>
                                <th>Quantidade</th>
                                <th>Preço Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className='product-info'>
                                        <img src={produto} alt="" className='product-img' />
                                        <div className='product-description'>
                                        Desconto de 5% salão de beleza
                                        </div>
                                    </div>
                                </td>
                                <td>R$ {precoUnitario.toFixed(2)}</td>
                                <td>
                                    <button className='quantity-button' onClick={aumentarQuantidade}>+</button>
                                    {quantidade}
                                    <button className='quantity-button' onClick={diminuirQuantidade}>-</button>
                                </td>
                                <td>R$ {precoTotal}</td>
                            </tr>
                            {/* Adicione mais linhas da cesta, se necessário */}
                        </tbody>
                    </table>
                </div>

                <div className='cart-summary'>
                    <div className='cart-summary-subtotal'>
                        <label>SubTotal:</label>
                        <span>R$ {precoTotal}</span>
                    </div>
                    <div className='cart-summary-discount'>
                        <label>Desconto:</label>
                        <input type='number' placeholder='Insira pontos' />
                    </div>
                    <div className='cart-summary-total'>
                        <label>Total:</label>
                        <span>R$ {precoTotal}</span>
                    </div>
                    <div className='cart-summary-buttons'>
                        <Link to="/Login/Home">
                            <button className='cart-button'>Voltar</button>
                        </Link>
                        <Link to="/Login/Cesta/Pagamento">
                            <button className='cart-button'>Pagar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
