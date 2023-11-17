import './Cartão.css'
import Navbar from '../../navbar_cesta';
import { Link } from 'react-router-dom';

export default function Cartão() {

    return (
        <main>
            <Navbar />

            <div>
                <div className="payment-container-cartão">
                    <h1>Pagamento Realizado</h1>
                    <Link to="/Login/Cesta/Pagamento">
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>

        </main>
    )

}