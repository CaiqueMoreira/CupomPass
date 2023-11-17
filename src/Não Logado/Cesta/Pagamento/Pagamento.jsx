import React, { useState } from 'react';
import Navbar from '../../Cesta/navbar_cesta';
import { Link, useNavigate } from 'react-router-dom';
import './Pagamento.css';

function Pagamento() {
    const [selectedPayment, setSelectedPayment] = useState('boleto');
    const navigate = useNavigate(); // Use o hook useNavigate para navegação

    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    const handlePaymentSubmit = () => {
        if (selectedPayment === 'boleto') {
            navigate('/Login/Cesta/Pagamento/boleto');
        } else if (selectedPayment === 'pix') {
            navigate('/Login/Cesta/Pagamento/pix');
        } else if (selectedPayment === 'credit-card') {
            navigate('/Login/Cesta/Pagamento/cartao');
        }
    };

    return (
        <div>
            <Navbar />

            <div className="payment-container">
                <div className="payment-title">Forma de Pagamento</div>
                <div className="payment-method">
                    <input
                        type="radio"
                        name="payment"
                        id="boleto"
                        value="boleto"
                        checked={selectedPayment === 'boleto'}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="boleto">Boleto</label>
                </div>
                <div className="payment-method">
                    <input
                        type="radio"
                        name="payment"
                        id="pix"
                        value="pix"
                        checked={selectedPayment === 'pix'}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="pix">Pix</label>
                </div>
                <div className="payment-method">
                    <input
                        type="radio"
                        name="payment"
                        id="credit-card"
                        value="credit-card"
                        checked={selectedPayment === 'credit-card'}
                        onChange={handlePaymentChange}
                    />
                    <label htmlFor="credit-card">Cartão de Crédito</label>
                </div>
                <div className={`credit-card-details ${selectedPayment === 'credit-card' ? 'visible' : ''}`}>
                    <div>
                        <label htmlFor="card-number">Número do Cartão:</label>
                        <input type="text" id="card-number" />
                    </div>
                    <div>
                        <label htmlFor="cvv">CVV:</label>
                        <input type="text" id="cvv" />
                    </div>
                    <div>
                        <label htmlFor="card-name">Nome Impresso no Cartão:</label>
                        <input type="text" id="card-name" />
                    </div>
                    <div>
                        <label htmlFor="validity">Validade:</label>
                        <input type="text" id="validity" />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF:</label>
                        <input type="text" id="cpf" />
                    </div>
                </div>
                <div className="buttons-container">
                    <Link to="/Login/Home">Voltar</Link>
                    <button onClick={handlePaymentSubmit}>Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default Pagamento;
