import './Pix.css'
import Navbar from './navbar_modos';
import { Link } from 'react-router-dom';
import QRCode from '../../../../Img/QRCode.jpeg'




export default function Pix() {

       

    return (
        <main>
            <Navbar />
            <div className="pix-container">
                <div className="pix-content">
                    <h1>PIX</h1>
                    <div className="qr-code"><img src={QRCode} alt="" /></div>
                    <p>Chave: 88fd4e5e-6fe2-44b0-ae1c-953b651b4c34</p>
                    <Link to="/Login/Cesta/Pagamento/">
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>
        </main>
    )

}