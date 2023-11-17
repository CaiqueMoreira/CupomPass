import './Boleto.css'
import Navbar from './navbar_modos';
import { Link } from 'react-router-dom';



export default function Boleto() {


    const handleImprimirBoleto = () => {
        // Coloque aqui a lógica para gerar o boleto (pode ser um processo simulado)
        alert('O boleto está sendo gerado...');
    };


    return (
        <main>
            <Navbar />
            <div className="boleto-container">
                <div className="boleto-content">
                    <h1>Boleto</h1>
                    <button onClick={handleImprimirBoleto}>Imprimir Boleto</button>
                    <Link to="/Login/Cesta/Pagamento">
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>


        </main>
    )

}